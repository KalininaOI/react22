import React from 'react';
import './assets/scss/normalize.scss';
import { Route, Routes } from 'react-router-dom';
import TestPage from './entities/TestPage';
import UsersPage from './entities/UsersPage';
import PageLayout from './layouts/PageLayout';
import UserComponent from './entities/UsersPage/components/UserComponent';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="users_page" element={<UsersPage />} />
        <Route path="users_page/:id" element={<UserComponent />} />
        <Route path="test_page" element={<TestPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
