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
              <img src={cursor} alt="" role="presentation" />

              <span>
                CURSOR
              </span>
            </button>

            <ul className="Console-subList">
              <li className="Console-listItem">
                <button className="Console-button">
                  <img src={cursor} alt="" role="presentation" />

                  <span>
                    PHOTO
                  </span>
                </button>

                <button className="Console-button">
                  <img src={cursor} alt="" role="presentation" />

                  <span>
                    ERASE
                  </span>
                </button>
              </li>
            </ul>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img src={cursor} alt="" role="presentation" />

              <span>
                TYPE
              </span>
            </button>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img src={cursor} alt="" role="presentation" />

              <span>
                DRAW
              </span>
            </button>
          </li>

          <li className="Console-listItem">
            <button className="Console-button">
              <img src={cursor} alt="" role="presentation" />

              <span>
                BOARD
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
