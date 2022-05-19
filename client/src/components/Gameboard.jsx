import React from "react";
import Grid from "./Grid";

const Gameboard = ({ grid, drop, allowDrop, drag }) => {
    return (
        <div className="d-flex">
            {/* Board to play game on */}
            <div
                className="bg-gameboard container text-center grid-container"
                style={{ height: "400px", width: "400px" }}
            >
                <Grid
                    grid={grid}
                    drop={drop}
                    allowDrop={allowDrop}
                    drag={drag}
                />
            </div>
        </div>
    );
};

export default Gameboard;
