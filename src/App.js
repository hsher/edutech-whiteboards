import React from 'react';
import './App.scss';

import cursor from './images/cursor.svg';
import type from './images/type.svg';
import draw from './images/draw.svg';
import board from './images/board.svg';
import erase from './images/erase.svg';
import photo from './images/photo.svg';
import buttonArrow from './images/button_arrow.svg';

function App() {
  return (
    <>
      <div className="Console">
        <ul className="Console-list Console-list--main">
          <li className="Console-listItem">
            <button className="Console-button isActive">
              <img
                className="Console-buttonArrow Console-buttonArrow--mobile"
                src={buttonArrow}
                alt=""
                role="presentation"
              />
              <img
                className="Console-buttonImage"
                src={cursor}
                alt=""
                role="presentation"
              />
            </button>

            <span className="Console-label">
              CURSOR
            </span>

            <ul className="Console-subList Console-subList--mobile">
              <li className="Console-listItem">
                <button className="Console-button">
                  <img
                    className="Console-buttonImage"
                    src={photo}
                    alt=""
                    role="presentation"
                  />
                </button>

                <span className="Console-label">
                  PHOTO
                </span>
              </li>

              <li className="Console-listItem">
                <button className="Console-button">
                  <img
                    className="Console-buttonImage"
                    src={erase}
                    alt=""
                    role="presentation"
                  />
                </button>

                <span className="Console-label">
                  ERASE
                </span>
              </li>
            </ul>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={type}
                alt=""
                role="presentation"
              />
            </button>

            <span className="Console-label">
              TYPE
            </span>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={draw}
                alt=""
                role="presentation"
              />
            </button>

            <span className="Console-label">
              DRAW
            </span>
          </li>

          <li className="Console-listItem Console-listItem--tablet">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={erase}
                alt=""
                role="presentation"
              />
            </button>

            <span className="Console-label">
              ERASE
            </span>
          </li>

          <li className="Console-listItem Console-listItem--tablet">
            <button className="Console-button">
              <img
                className="Console-buttonImage"
                src={photo}
                alt=""
                role="presentation"
              />
            </button>

            <span className="Console-label">
              PHOTO
            </span>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img
                className="Console-buttonArrow"
                src={buttonArrow}
                alt=""
                role="presentation"
              />

              <img
                className="Console-buttonImage"
                src={board}
                alt=""
                role="presentation"
              />
            </button>

            <span className="Console-label">
              BOARD
            </span>

            <ul className="Console-subList isActive">
              <li className="Console-listItem">
                <button className="Console-button Console-button--board">
                  JOHN
                </button>
              </li>

              <li className="Console-listItem">
                <button className="Console-button Console-button--board">
                  MAIN
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
