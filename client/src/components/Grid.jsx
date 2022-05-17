import React from "react";
import RenderColumns from "./RenderColumns";

import { useState } from "react";

export default function Grid() {
    const [grid, setGrid] = useState([
        [{ filled: true }, { filled: false }],
        [{ filled: false }, { filled: false }],
    ]);
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    return (
        <div>
            <p>Drag the icon into the rectangle:</p>
            <div className="d-flex">
                {/* Board to play game on */}
                <div
                    className="bg-secondary container text-center grid-container"
                    style={{ height: "80px", width: "80px" }}
                >
                    <RenderColumns
                        grid={grid}
                        drop={drop}
                        allowDrop={allowDrop}
                        drag={drag}
                    />
                </div>
            </div>
            <div
                id="drag0"
                className="innerGridItem"
                draggable="true"
                onDragStart={drag}
            ></div>
        </div>
    );
}
