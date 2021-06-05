import React, { FC } from 'react';
import ResumeWork from '../layout/ResumeWork/ResumeWork';
import './WorkspacePage.css';
import { useLocation } from 'react-router-dom';

const Workspace: FC = () => {
  const location = useLocation();
  const { workspacesData } = location.state;

  return (
    <div className='workspace__container'>
      <div className='workspace__header'>
        <img
          className='workspace__header-img'
          src={workspacesData['workspaceBg']}
          alt=''
        />
        <div className='workspace__header-info'>
          <img
            className='workspace__header-icon'
            src={workspacesData['workspaceIcon']}
            alt=''
          />
          <div className='workspace__header-info-text'>
            <h2 className='workspace__page-title'>
              {workspacesData['workspaceTitle']}
            </h2>
            <p className='workspace__text'>
              Workspace purpose and a bit of context. This much needed
              description is here to remind people where they are, if they are
              new or have poor memory.
            </p>
          </div>
        </div>
      </div>
      <div className='workspace__cards'>
        <h3 className='workspace__cards-title'>
          Start working on corporate matters
        </h3>
        <div className='workspace__cards-list'>
          <div className='workspace__card'>
            <img
              className='workspace__card-icon'
              src='../../assets/entities.svg'
              alt=''
            />
            <h4 className='workspace__card-title'>
              Explore your <span className='bold'>entities</span>
            </h4>
            <p className='workspace__card-text'>
              Take a few minutes to look at the most important elements and
              specificities of your entities.
            </p>
          </div>
          <div className='workspace__card'>
            <img
              className='workspace__card-icon'
              src='../../assets/entities.svg'
              alt=''
            />
            <h4 className='workspace__card-title'>
              Structure the <span className='bold'>ownership</span>
            </h4>
            <p className='workspace__card-text'>
              Get a clear view of the ownership by looking at the relations
              between individuals and entities.
            </p>
          </div>
          <div className='workspace__card'>
            <img
              className='workspace__card-icon'
              src='../../assets/entities.svg'
              alt=''
            />
            <h4 className='workspace__card-title'>
              Define the <span className='bold'>calendar</span>
            </h4>
            <p className='workspace__card-text'>
              Prepare future events by creating detailed plans around the life
              of your entity.
            </p>
          </div>
        </div>
      </div>
      <ResumeWork title={'Latest updates'} showMenu={true} />
    </div>
  );
};

export default Workspace;
