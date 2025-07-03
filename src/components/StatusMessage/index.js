import React from 'react';
import './index.css';

function StatusMessage({ status }) {
  if (!status) return null;

  return (
    <div className="status-wrapper">
      <div className={`status-message ${status.valid ? 'valid' : 'invalid'}`}>
        {status.valid ? 'Valid DAG' : `Invalid DAG: ${status.reason}`}
      </div>
    </div>
  );
}

export default StatusMessage;
