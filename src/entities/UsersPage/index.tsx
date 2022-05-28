import React, { useEffect, useState } from 'react';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../IUsers/interface';
// eslint-disable-next-line import/no-named-as-default
import UsersPageComponent from './components/UsersPageComponents';

const UsersPage = () => {
  const [usersData, setUsersData] = useState<IUsers[] | null>(null);

  //   const getData = async (url: string) => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setUsersData(data);
  //   };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       getData(usersUrl);
  //     }, 1500);
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(usersUrl).then((response) =>
        response.json().then((data) => {
          setUsersData(data);
        })
      );
    }, 1500);
  }, []);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={usersData} />;
};

export default UsersPage;
