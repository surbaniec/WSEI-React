import { FC } from 'react';
import Publications from '../layout/Publications/Publications';
import Workspaces from '../layout/Workspaces/Workspaces';
import './Home.css';

const Home: FC = () => {
  return (
    <div className='home'>
      <Publications />
      <Workspaces />
    </div>
  );
};

export default Home;
