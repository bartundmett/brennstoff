import React from 'react';

export default function StoryWrapper({ background, children }) {
  return (
    <div
      style={{
        background,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '2rem',
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
}
