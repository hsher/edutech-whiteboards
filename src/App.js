import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      <div className="Console">
        <ul>
          <li>
            <button className="Console-button">
              <img src="asd" />

              <span>
                CURSOR
              </span>
            </button>

            <ul>
              <li>
                <button className="Console-button">
                  <img src="asd" />

                  <span>
                    PHOTO
                  </span>
                </button>

                <button className="Console-button">
                  <img src="asd" />

                  <span>
                    ERASE
                  </span>
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button className="Console-button">
              <img src="asd" />

              <span>
                TYPE
              </span>
            </button>
          </li>

          <li>
            <button className="Console-button">
              <img src="asd" />

              <span>
                DRAW
              </span>
            </button>
          </li>

          <li>
            <button className="Console-button">
              <img src="asd" />

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
