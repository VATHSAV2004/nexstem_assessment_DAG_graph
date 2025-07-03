import React from 'react';
import { Handle, Position } from 'reactflow';
import './index.css';

function CustomNode({ id, data }) {
  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Left} className="react-flow__handle-left" />
      
      <div className="label">{data.label}</div>

      <button className="deletebutton" onClick={() => data.deleteNode(id)}>X</button>

      <Handle type="source" position={Position.Right} className="react-flow__handle-right" />
    </div>
  );
}

export default CustomNode;
