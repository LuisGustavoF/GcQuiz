import React from 'react';

export default function ProgressBar({ current, total }) {
  const percent = (current / total) * 100;

  return (
    <div className="progress-bar-background">
      <div className="progress-bar-foreground" style={{ width: `${percent}%` }}></div>
    </div>
  );
}
