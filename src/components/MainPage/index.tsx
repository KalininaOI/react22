import React from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import ItemsList from '../ItemsList';

const MainPage = () => {
  return (
    <MainLayout>
      <ItemsList />
    </MainLayout>
  );
};

export default MainPage;
