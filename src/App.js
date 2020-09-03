import React from 'react';
import './App.scss';

import cursor from './images/cursor.svg';

function App() {
  return (
    <>
      <div className="Console">
        <ul className="Console-list">
          <li>
            <button className="Console-button">
              <img src={cursor} />

              <span>
                CURSOR
              </span>
            </button>

            <ul className="Console-subList">
              <li>
                <button className="Console-button">
                  <img src={cursor} />

                  <span>
                    PHOTO
                  </span>
                </button>

                <button className="Console-button">
                  <img src={cursor} />

                  <span>
                    ERASE
                  </span>
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button className="Console-button">
              <img src={cursor} />

              <span>
                TYPE
              </span>
            </button>
          </li>

          <li>
            <button className="Console-button">
              <img src={cursor} />

              <span>
                DRAW
              </span>
            </button>
          </li>

          <li>
            <button className="Console-button">
              <img src={cursor} />

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
