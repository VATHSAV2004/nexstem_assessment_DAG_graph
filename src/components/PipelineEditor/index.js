import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../Modal';

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls as FlowControls,
  Background,
  MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';

import CustomNode from '../CustomNode';
import Controls from '../Controls';
import StatusMessage from '../StatusMessage';

import { validateDag } from '../../utils/validation';
import { getLayoutedElements } from '../../utils/layout';

const nodeTypes = { custom: CustomNode };

function PipelineEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [isValidDag, setIsValidDag] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const onInit = (instance) => {
    setReactFlowInstance(instance);
  };

  const onConnect = useCallback(
    (params) => {
      if (params.source === params.target) return;
      setEdges((eds) =>
        addEdge({ ...params, markerEnd: { type: 'arrowclosed' } }, eds)
      );
    },
    [setEdges]
  );

  const addNode = (label) => {
  const newNode = {
    id: `${+new Date()}`,
    type: 'custom',
    position: { x: Math.random() * 400, y: Math.random() * 400 },
    data: { label },
  };

  setNodes((nds) => [...nds, newNode]);

  setTimeout(() => {
    if (reactFlowInstance) {
      reactFlowInstance.fitView();
    }
  }, 100);
};


  const deleteSelected = useCallback(() => {
    setNodes((nds) => nds.filter((n) => !n.selected));
    setEdges((eds) =>
      eds.filter(
        (e) =>
          !e.selected &&
          !nodes.find((n) => n.id === e.source || n.id === e.target)?.selected
      )
    );
  }, [nodes, edges]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Delete') {
        deleteSelected();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [deleteSelected]);

  useEffect(() => {
    const { valid, reason } = validateDag(nodes, edges);
    setIsValidDag({ valid, reason });
  }, [nodes, edges]);

  const onLayout = () => {
    const { layoutedNodes, layoutedEdges } = getLayoutedElements(nodes, edges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
    if (reactFlowInstance) {
      reactFlowInstance.fitView();
    }
  };

  return (
    <div className="editor">
      <ReactFlowProvider>
        <div className="graph-panel">
          <Controls onAddNode={() => setShowModal(true)} onAutoLayout={onLayout} />
<Modal
  visible={showModal}
  onClose={() => setShowModal(false)}
  onSubmit={(label) => {
    addNode(label);
    setShowModal(false);
  }}
/>

          <StatusMessage status={isValidDag} />
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onSelectionChange={setSelectedElements}
            nodeTypes={nodeTypes}
            onInit={onInit}
            fitView
          >
            <FlowControls />
            <MiniMap />
            <Background color="#cbd5e1" variant="dots" gap={16} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default PipelineEditor;
