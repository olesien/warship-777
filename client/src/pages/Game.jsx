import Gameboard from '../components/Gameboard'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

const Game = () => {
  return (
    <div className="">
        

        <div className="">
            {/* Name of user */}
            <div className="d-flex flex-column align-items-center">
                <h3>Username</h3>

                <button className="mb-5 ready-btn">Ready ?</button>
            </div>
            

            <Gameboard />

            {/* Your ships, place them out on the board */}
            <div>

                <div className="">
                    <div className="d-flex flex-wrap mt-5" style={{ height: "100px", width: "400px" }}>
                        <div className="grid-container pe-2" style={{ width: "90px" }}>
                            <div className="grid-item ship-colors"></div>
                            <div className="grid-item ship-colors"></div>
                        </div>

                        <div className="grid-container pe-2" style={{ width: "130px" }}>
                            <div className="grid-item ship-colors"></div>
                            <div className="grid-item ship-colors"></div>
                            <div className="grid-item ship-colors"></div>
                        </div>

                        <div className="grid-container pe-2" style={{ width: "170px" }}>
                            <div className="grid-item ship-colors"></div>
                            <div className="grid-item ship-colors"></div>
                            <div className="grid-item ship-colors"></div>
                            <div className="grid-item ship-colors"></div>
                        </div>

                        <div className="grid-container pe-2" style={{ width: "90px" }}>
                            <div className="grid-item ship-colors"></div>
                            <div className="grid-item ship-colors"></div>
                        </div>
                    </div>

                    <div id="rotate-btn" className="d-flex justify-content-center align-items-center" style={{ height: "20px", width: "20px" }}>
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Game