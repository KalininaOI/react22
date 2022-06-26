import React, { FC, memo, useMemo } from 'react';

interface IProps {
  value: number;
}

const IsTen: FC<IProps> = ({ value }) => {
  console.log('IsTen rerendered');

  const loop = () => {
    let i = 0;
    // eslint-disable-next-line no-plusplus
    while (i < 500000000) i++;
  };

  const isTen = () => {
    // let i = 0;
    // // eslint-disable-next-line no-plusplus
    // while (i < 500000000) i++;
    return value === 10 ? 'value is 10' : 'value is not 10';
  };

  useMemo(loop, [isTen()]);

  return <div>{isTen()}</div>;
};

export default memo(IsTen, () => {
  return true;
});
