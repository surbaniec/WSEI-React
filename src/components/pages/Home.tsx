import { FC } from 'react';

export interface IUser {
  user: object;
}

const Home: React.FC<IUser> = ({ user }) => {
  return (
    <>
      <span>Home page</span>
    </>
  );
};

export default Home;
