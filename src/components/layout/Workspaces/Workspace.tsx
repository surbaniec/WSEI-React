import React, { FC, useContext } from 'react';
import './Workspace.css';

export interface IWorkspace {
  id: number;
  workspaceBg: string;
  workspaceIcon: string;
  workspaceTitle: string;
  workspaceType: string;
  workspaceUsers: number;
}

interface IProps {
  data: IWorkspace;
}

const Workspace: FC<IProps> = ({ data }) => {
  return (
    <div className='workspace'>
      <img src={data.workspaceBg} alt='' className='workspace__bg' />
      <div className='workspace__body'>
        <div className='workspace__body-top'>
          <div className='workspace__tile'>
            <img src={data.workspaceIcon} alt='' className='workspace__icon' />
          </div>
          <h3 className='workspace__title'>{data.workspaceTitle}</h3>
        </div>
        <div className='workspace__body-info'>
          <img
            src={data.workspaceIcon}
            alt=''
            className='workspace__icon-small'
          />
          <span className='workspace__subtitle'>{data.workspaceType}</span>
          <img
            src='../../assets/people.svg'
            alt=''
            className='workspace__icon-small'
          />
          <span>{data.workspaceUsers}</span>
        </div>
        <span className='workspace__update-time'>Last update 2 days ago</span>
      </div>
    </div>
  );
};

export default Workspace;
