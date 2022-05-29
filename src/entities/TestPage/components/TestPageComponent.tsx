import React, { useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [counter, setCount] = useState(0);

  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updatedArray = useMemo(() => {
    return someArray.map((num) => {
      console.log('Hello');
      return num;
    });
  }, [someArray]);

  // componenntWillMount
  useEffect(() => {
    console.log('компонент отображен');
  }, []);

  // componentDidUpdate
  // useEffect(() => {
  //   console.log('компонент обновлен');
  // });

  // useEffect(() => {
  //   console.log('counter обновлен');
  // }, [counter]);

  // useEffect(() => {
  //   console.log('Some_Array обновлен');
  // }, [someArray]);
  // с скобкаx то, за чем следит. если нет скобок - следит за всем

  // useEffect(() => {
  //   console.log('counter OR Some_Array обновлен');
  // }, [counter, someArray]);

  // component WillUnmount

  useEffect(() => {
    return () => {
      console.log('компонент удален');
    };
  }, []);

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Увеличиь counter
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Добавить число в массив
      </button>
      {updatedArray.map((num, index) => {
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
