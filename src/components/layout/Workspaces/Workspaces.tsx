import React, { FC } from 'react';
import Workspace from './Workspace';
import { IWorkspace } from './Workspace';
import './Workspaces.css';

const Workspaces: FC = () => {
  const workspacesData: IWorkspace[] = [
    {
      workspaceBg: '../../assets/client-contract.png',
      workspaceIcon: '../../assets/entities2.svg',
      workspaceTitle: 'Client contract',
      workspaceType: 'Contract',
      workspaceUsers: 150,
    },
    {
      workspaceBg: '../../assets/client-contract.png',
      workspaceIcon: '../../assets/entities2.svg',
      workspaceTitle: 'Supplier contract',
      workspaceType: 'Contract',
      workspaceUsers: 25,
    },
    {
      workspaceBg: '../../assets/corporate.png',
      workspaceIcon: '../../assets/entities2.svg',
      workspaceTitle: 'Corporate',
      workspaceType: 'Corporate',
      workspaceUsers: 25,
    },
    {
      workspaceBg: '../../assets/group-norms.jpg',
      workspaceIcon: '../../assets/entities2.svg',
      workspaceTitle: 'Group norms',
      workspaceType: 'Norms',
      workspaceUsers: 25,
    },
    // {
    //   workspaceBg: '../../assets/client-contract.png',
    //   workspaceIcon: '../../assets/entities2.svg',
    //   workspaceTitle: 'Real estate contract',
    //   workspaceType: 'Contract',
    //   workspaceUsers: 50,
    // },
  ];

  return (
    <div className='workspaces'>
      <h2 className='workspaces__title'>Workspaces</h2>
      <div className='workspaces__list'>
        {workspacesData.map((data) => {
          return <Workspace data={data} />;
        })}
      </div>
    </div>
  );
};

export default Workspaces;
