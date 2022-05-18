import React from "react";
import Grid from "./Grid";

const Gameboard = () => {
    return (
        <div className="d-flex">
            {/* Board to play game on */}
            <div
                className="bg-gameboard container text-center grid-container"
                style={{ height: "400px", width: "400px" }}
            >
                <Grid />
            </div>
        </div>
    );
};

export default Gameboard;
