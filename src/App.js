import React from 'react';
import './App.scss';

import cursor from './images/cursor.svg';

function App() {
  return (
    <>
      <div className="Console">
        <ul className="Console-list">
          <li className="Console-listItem">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={cursor}
                alt=""
                role="presentation"
              />
            </button>

            <span>
              CURSOR
            </span>

            <ul className="Console-subList">
              <li className="Console-listItem">
                <button className="Console-button">
                  <img
                    className="Console-buttonImage"
                    src={cursor}
                    alt=""
                    role="presentation"
                  />
                </button>

                <span>
                  PHOTO
                </span>

                <button className="Console-button">
                  <img
                    className="Console-buttonImage"
                    src={cursor}
                    alt=""
                    role="presentation"
                  />
                </button>

                <span>
                  ERASE
                </span>
              </li>
            </ul>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={cursor}
                alt=""
                role="presentation"
              />
            </button>

            <span>
              TYPE
            </span>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={cursor}
                alt=""
                role="presentation"
              />
            </button>

            <span>
              DRAW
            </span>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={cursor}
                alt=""
                role="presentation"
              />
            </button>

            <span>
              BOARD
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
