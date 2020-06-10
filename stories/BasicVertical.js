import React from 'react';
import SplitPane from '../src';

export default () => {
  const [extraPane, setExtraPane] = React.useState(true);
  return (
    <SplitPane split="vertical">
      <div>
        <button onClick={() => setExtraPane(!extraPane)}>
          Toggle Extra Pane
        </button>
        default min: 50px
      </div>
      {extraPane && <div />}
    </SplitPane>
  );
};
