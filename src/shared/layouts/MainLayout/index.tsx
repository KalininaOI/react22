import React, { FC } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import style from './MainLayout.module.scss';

interface IMainLayuot {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayuot> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
