import React from 'react';
import './index.css';

function Controls({ onAddNode, onAutoLayout }) {
  return (
    <div className="control-panel">
      <button className="add-node-btn" onClick={onAddNode}>
         Add Node
      </button>
      <button className="layout-btn" onClick={onAutoLayout}>
         Auto Layout
      </button>
    </div>
  );
}

export default Controls;
