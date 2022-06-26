import React, { FC, memo } from 'react';

interface IProps {
  decrease: () => void;
  increase: () => void;
}

const ChildComponent: FC<IProps> = ({ increase, decrease }) => {
  return (
    <div>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default memo(ChildComponent);
