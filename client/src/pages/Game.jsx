import Gameboard from '../components/Gameboard'
import React from 'react'

const Game = () => {
  return (
    <div className="d-flex justify-content-evenly">
        <Gameboard />

        <div className="d-flex flex-column">
            {/* Name of user */}
            <h1>Username's Turn</h1>

            {/* Your ships, place them out on the board */}
            <div>
                <h3 className="d-flex">Your ships</h3>
                <div className="bg-primary" style={{ height: "200px", width: "200px" }}>
                    <div className="grid-container py-1">
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                    </div>

                    <div className="grid-container py-1">
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                    </div>

                    <div className="grid-container py-1">
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                    </div>

                    <div className="grid-container py-1">
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Game