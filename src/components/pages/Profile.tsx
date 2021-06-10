import React, { FC, useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../App';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile: FC = () => {
  const currentUser = useContext(CurrentUserContext);
  const [editSection1, setEditSection1] = useState<boolean>(false);
  const [editSection2, setEditSection2] = useState<boolean>(false);

  useEffect(() => {
    const inputs = document.querySelectorAll('.profile__speciality-input');
    if (editSection2 === true) {
      inputs.forEach((input) => input.removeAttribute('disabled'));
    }

    if (editSection2 === false) {
      inputs.forEach((input) => input.setAttribute('disabled', 'true'));
    }

    const inputs2 = document.querySelectorAll('.profile__header-input');
    if (editSection1 === true) {
      inputs2.forEach((input) => input.removeAttribute('disabled'));
    }

    if (editSection1 === false) {
      inputs2.forEach((input) => input.setAttribute('disabled', 'true'));
    }
  }, [editSection1, editSection2]);

  return (
    <div className='profile__container'>
      <div className='profile__header'>
        <div className='profile__actions'>
          <div className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/message.svg'
              alt=''
            />
            <span>Message</span>
          </div>
          <div className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/edit-document.svg'
              alt=''
            />
            <span>Create a request</span>
          </div>
          <div className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/folder.svg'
              alt=''
            />
            <span>Add to a cluster</span>
          </div>
          <Link to='/' className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/x.svg'
              alt=''
            />
          </Link>
        </div>
        <div className='profile__header-profile'>
          <div className='profile__header-profile-info'>
            <img
              className='profile__header-profile-img'
              src={
                currentUser
                  ? currentUser['thumbnailUrl']
                  : 'https://secure.gravatar.com/avatar/1fd4fb5e1c8d00621b32a36a54b67b50?s=256&d=mm&r=g'
              }
              alt=''
            />
            <div className='profile__header-profile-desc'>
              {' '}
              <span className='profile__header-profile-name'>
                {currentUser ? currentUser['name'] : 'username'}
              </span>
              <span>
                {currentUser['company']
                  ? currentUser['company']['name']
                  : 'company name'}
              </span>
            </div>
          </div>
          <div className='profile__header-profile-contact'>
            <input
              type='text'
              className='profile__header-input'
              placeholder='humbertaswift@gmail.com'
              disabled
            />
            <input
              type='text'
              className='profile__header-input'
              placeholder='+33 (0)6 12 34 56 78'
              disabled
            />
          </div>
          <button
            className='profile__editBtn'
            onClick={() => setEditSection1(!editSection1)}
          >
            <img src='../../assets/pen.svg' alt='' />
          </button>
        </div>
      </div>
      <div className='profile__specialities'>
        <div className='profile__speciality-wrapper'>
          <h3 className='profile__speciality-title'>Expertise</h3>
          <div>
            <input
              type='text'
              className='profile__speciality profile__speciality-input'
              placeholder='Mergers and acquisition'
              disabled
            />
          </div>
        </div>
        <div className='profile__speciality-wrapper'>
          <h3 className='profile__speciality-title'>Specialities</h3>
          <div>
            <input
              type='text'
              className='profile__speciality profile__speciality-input'
              placeholder='Cross border operation'
              disabled
            />
            <input
              type='text'
              className='profile__speciality profile__speciality-input'
              placeholder='Transaction over 500M$'
              disabled
            />
          </div>
        </div>
        <div className='profile__speciality-wrapper'>
          <h3 className='profile__speciality-title'>
            Admission to practice law
          </h3>
          <div>
            <input
              type='text'
              className='profile__speciality profile__speciality-input'
              placeholder='Paris bar association'
              disabled
            />
            <input
              type='text'
              className='profile__speciality profile__speciality-input'
              placeholder='Tunisian bar association'
              disabled
            />
          </div>
        </div>
        <div className='profile__speciality-wrapper'>
          <h3 className='profile__speciality-title'>Countries</h3>
          <div>
            <input
              type='text'
              className='profile__speciality profile__speciality-input'
              placeholder='Tunisia'
              disabled
            />
          </div>
        </div>
        <button
          className='profile__editBtn'
          onClick={() => setEditSection2(!editSection2)}
        >
          <img src='../../assets/pen.svg' alt='' />
        </button>
      </div>
      <div className='profile__panel-info'>
        <h2 className='profile__section-title'>Panel informations</h2>
        <div>
          <h3 className='profile__speciality-title'>Hourly fee</h3>
          <span className='profile__section-text'>610$/hour (Negociated)</span>
        </div>
        <div>
          <h3 className='profile__speciality-title'>Terms & Conditions</h3>
          <span className='profile__section-text'>
            Monthly 10k$ retainer - see with Jeanny Smith
          </span>
          <div className='profile__attachment'>
            <img
              className='profile__actions-img'
              src='../../assets/edit-document.svg'
              alt=''
            />
            <span className='profile__section-text'>
              Attachment_lorem-ipsum25425.jpg
            </span>
          </div>
        </div>
        <h2 className='profile__section-title'>Services & Projects</h2>
        <span className='profile__section-text'>
          Corporate M&A and international acquisitions
        </span>
        <h2 className='profile__section-title'>Internal correspondants</h2>
        <div className='profile__corespondants'>
          <div className='profile__correspondant'>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/profile.svg'
                alt=''
              />
              <span className='profile__correspondant-name'>
                Firstname Lastname
              </span>
            </div>

            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/message.svg'
                alt=''
              />
              <span>Message</span>
            </div>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/profile.svg'
                alt=''
              />
              <span>Profile</span>
            </div>
          </div>
          <div className='profile__correspondant'>
            <div>
              {' '}
              <img
                className='profile__correspondant-icon'
                src='../../assets/profile.svg'
                alt=''
              />
              <span className='profile__correspondant-name'>
                Firstname Lastname
              </span>
            </div>

            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/message.svg'
                alt=''
              />
              <span>Message</span>
            </div>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/profile.svg'
                alt=''
              />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
      <div className='profile__tables'>
        <div className='profile__tables-table'>
          <table>
            <caption className='profile__section-title'>Proposals</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Entity</th>
                <th>Location</th>
                <th>Expertise</th>
                <th>Date</th>
                <th>Firm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operation Ti...</td>
                <td>Renault Co...</td>
                <td>France</td>
                <td>#Tax</td>
                <td>20/01/2018</td>
                <td>Racine</td>
              </tr>
              <tr>
                <td>Op. Prometh...</td>
                <td>Renault HQ</td>
                <td>USA</td>
                <td>#M&A</td>
                <td>18/02/2019</td>
                <td>Clifford chance</td>
              </tr>
              <tr>
                <td>Op. Latandre</td>
                <td>Renault Br ...</td>
                <td>Italia</td>
                <td>#Social</td>
                <td>18/02/2019</td>
                <td>SVZ</td>
              </tr>
            </tbody>
          </table>
          <span>See more proposals</span>
        </div>

        <div className='profile__tables-table'>
          <table>
            <caption className='profile__section-title'>
              Internal reviews
            </caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Entity</th>
                <th>Location</th>
                <th>Expertise</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operation Ti...</td>
                <td>Renault Co...</td>
                <td>France</td>
                <td>#Tax</td>
                <td>20/01/2018</td>
              </tr>
              <tr>
                <td>Op. Prometh...</td>
                <td>Renault HQ</td>
                <td>USA</td>
                <td>#M&A</td>
                <td>18/02/2019</td>
              </tr>
              <tr>
                <td>Op. Latandre</td>
                <td>Renault Br ...</td>
                <td>Italia</td>
                <td>#Social</td>
                <td>18/02/2019</td>
              </tr>
            </tbody>
          </table>
          <span>See more reviews</span>
        </div>

        <div className='profile__tables-table'>
          <table>
            <caption className='profile__section-title'>Amount of fees</caption>
            <thead>
              <tr>
                <th>Year</th>
                <th>Cost center</th>
                <th>Total amount</th>
                <th>Law firm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2019</td>
                <td>CS 153</td>
                <td>3 500$</td>
                <td>Clifford chance</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>CS 153</td>
                <td>9 500$</td>
                <td>Linklaters</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>CS 47</td>
                <td>10 500$</td>
                <td>Linklaters</td>
              </tr>
              <tr>
                <td></td>
                <td>CS 153</td>
                <td>18 500$</td>
                <td>Linklaters</td>
              </tr>
              <tr>
                <td></td>
                <td>CS 32</td>
                <td>15 500$</td>
                <td>Linklaters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
