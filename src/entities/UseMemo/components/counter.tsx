import React, { FC, memo } from 'react';

interface IProps {
  value: number;
}

const Counter: FC<IProps> = ({ value }) => {
  console.log('counter rerender');
  return <div>{value}</div>;
};

export default memo(Counter);
