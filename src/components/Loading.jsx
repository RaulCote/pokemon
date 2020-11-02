import React from 'react';

const Loading = () => (
  <div className="loading" data-testid="loading">
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loading;
