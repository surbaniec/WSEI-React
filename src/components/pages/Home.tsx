import { FC } from 'react';
import SideBar from '../layout/SideBar/SideBar';
import TopBar from '../layout/TopBar/TopBar';

export interface IUser {
  user: object;
}

const Home: React.FC<IUser> = ({ user }) => {
  return (
    <>
      <TopBar />
      <SideBar />
    </>
  );
};

export default Home;
