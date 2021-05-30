import { FC } from 'react';
import Publications from '../layout/Publications/Publications';
import ResumeWork from '../layout/ResumeWork/ResumeWork';
import Workspaces from '../layout/Workspaces/Workspaces';
import './Home.css';

const Home: FC = () => {
  return (
    <div className='home'>
      <Publications />
      <Workspaces />
      <ResumeWork />
    </div>
  );
};

export default Home;
