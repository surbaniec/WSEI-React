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
    const inputs3 = document.querySelectorAll('.profile__section-input');
    const inputs4 = document.querySelectorAll('.profile__table-input');
    if (editSection2 === true) {
      inputs.forEach((input) => input.removeAttribute('disabled'));
      inputs3.forEach((input) => input.removeAttribute('disabled'));
      inputs4.forEach((input) => input.removeAttribute('disabled'));
    }

    if (editSection2 === false) {
      inputs.forEach((input) => input.setAttribute('disabled', 'true'));
      inputs3.forEach((input) => input.setAttribute('disabled', 'true'));
      inputs4.forEach((input) => input.setAttribute('disabled', 'true'));
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
              <input
                type='text'
                className='profile__header-profile-name profile__header-input'
                placeholder={currentUser ? currentUser['name'] : 'username'}
                disabled
              />
              <input
                type='text'
                className='profile__header-profile-name profile__header-input'
                placeholder={
                  currentUser['company']
                    ? currentUser['company']['name']
                    : 'company name'
                }
                disabled
              />
              <input
                type='text'
                className='profile__header-input'
                placeholder='New-York partner'
                disabled
              />
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
          <input
            type='text'
            className='profile__section-text profile__section-input'
            placeholder='610$/hour (Negociated)'
            disabled
          />
        </div>
        <div>
          <h3 className='profile__speciality-title'>Terms & Conditions</h3>
          <input
            type='text'
            className='profile__section-text profile__section-input'
            placeholder='Monthly 10k$ retainer'
            disabled
          />
          <div className='profile__attachment'>
            <img
              className='profile__actions-img'
              src='../../assets/edit-document.svg'
              alt=''
            />
            <input
              type='text'
              className='profile__section-text profile__section-input profile__section-input--blue'
              placeholder='Attachment_lorem-ipsum25425.jpg'
              disabled
            />
          </div>
        </div>
        <h2 className='profile__section-title'>Services & Projects</h2>
        <input
          type='text'
          className='profile__section-text profile__section-input'
          placeholder='Corporate M&A and international acquisitions'
          disabled
        />
        <h2 className='profile__section-title'>Internal correspondants</h2>
        <div className='profile__corespondants'>
          <div className='profile__correspondant'>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/profile.svg'
                alt=''
              />
              <input
                type='text'
                className='profile__correspondant-name profile__section-input profile__section-input--blue'
                placeholder='Firstname Lastname'
                disabled
              />
            </div>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/message.svg'
                alt=''
              />
              <input
                type='text'
                className='profile__correspondant-name profile__section-input profile__section-input--blue'
                placeholder='Message'
                disabled
              />
            </div>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/profile.svg'
                alt=''
              />
              <input
                type='text'
                className='profile__correspondant-name profile__section-input profile__section-input--blue'
                placeholder='Profile'
                disabled
              />
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
              <input
                type='text'
                className='profile__correspondant-name profile__section-input profile__section-input--blue'
                placeholder='Firstname Lastname'
                disabled
              />
            </div>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/message.svg'
                alt=''
              />
              <input
                type='text'
                className='profile__correspondant-name profile__section-input profile__section-input--blue'
                placeholder='Message'
                disabled
              />
            </div>
            <div>
              <img
                className='profile__correspondant-icon'
                src='../../assets/profile.svg'
                alt=''
              />
              <input
                type='text'
                className='profile__correspondant-name profile__section-input profile__section-input--blue'
                placeholder='Profile'
                disabled
              />
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
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Operation Ti...'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Renault Co...'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='France'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='#Tax'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='20/01/2018'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Racine'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Op. Prometh...'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Renault HQ'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='USA'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='#M&A'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='18/02/2019'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Clifford chance'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Op. Latandre'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Renault Br...'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Italia'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='#Social'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='18/02/2019'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='SVZ'
                    disabled
                  />
                </td>
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
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Opertion Ti...'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Renault Co...'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='France'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='#Tax'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='20/01/2018'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Op. Prometh'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Renault HQ'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='USA'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='#M&A'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='18/02/2019'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Op. Latandre'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Renault Br ...'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Italia'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='#Social'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='18/02/2019'
                    disabled
                  />
                </td>
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
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='2019'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='CS 153'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='3 500$'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Clifford chance'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='2018'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='CS 153'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='9 500$'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Linklaters'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='2017'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='CS 47'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='10 500$'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Linklaters'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='CS 153'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='18 500$'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Linklaters'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='CS 32'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='15 500$'
                    disabled
                  />
                </td>
                <td>
                  <input
                    type='text'
                    className='profile__table-input'
                    placeholder='Linklaters'
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
