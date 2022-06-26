import React from 'react';
import ChildOne from './components/ChildOne';
import { myUsers, UsersContext } from './context';

const UseContext = () => {
  return (
    <UsersContext.Provider value={myUsers}>
      <ChildOne />
    </UsersContext.Provider>
  );
};

export default UseContext;
