import React, { FC } from 'react';
import Workspace from './Workspace';
import './Workspaces.css';
import { workspacesData } from '../../../data/WorkspacesData';

const Workspaces: FC = () => {
  return (
    <div className='workspaces'>
      <h2 className='workspaces__title'>Workspaces</h2>
      <div className='workspaces__list'>
        {workspacesData.map((data, i) => {
          return <Workspace key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Workspaces;
