import React from "react";
import RenderColumns from "./RenderColumns";

export default function Grid({ grid, drop, allowDrop, drag }) {
    console.log("rerendering");

    return (
        <div className="d-flex">
            {/* Board to play game on */}
            <div
                className="bg-gameboard container text-center grid-container"
                style={{ height: "400px", width: "400px" }}
            >
                <RenderColumns
                    grid={grid}
                    drop={drop}
                    allowDrop={allowDrop}
                    drag={drag}
                />
            </div>
        </div>
    );
}
