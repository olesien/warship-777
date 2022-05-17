import React from "react";
import RenderColumns from "./RenderColumns";

import { useState } from "react";

export default function Grid() {
    console.log("rerendering");
    const [grid, setGrid] = useState([
        [{ filled: false }, { filled: false }, { filled: false }],
        [{ filled: false }, { filled: false }, { filled: false }],
        [{ filled: false }, { filled: false }, { filled: false }],
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
        console.log(ev.target.id);

        const totalIndex = Number(ev.target.id.substring(3));
        console.log(totalIndex);

        const columnCount = grid.length;
        const rowCount = grid[0].length;

        console.log(columnCount, rowCount);

        const columnIndex = Math.ceil(totalIndex / columnCount) - 1;
        console.log("col: " + columnIndex);

        const rowIndex = totalIndex - rowCount * columnIndex - 1;

        console.log("row: " + rowIndex);

        setGrid((prevGrid) => {
            const newGrid = prevGrid.map((prevColumn, prevColumnIndex) => {
                if (prevColumnIndex === columnIndex) {
                    return prevColumn.map((prevRow, prevRowIndex) => {
                        if (prevRowIndex === rowIndex) {
                            return { filled: true };
                        }
                        return prevRow;
                    });
                }
                return prevColumn;
            });
            //gridRef[columnIndex][rowIndex].filled = true;
            console.log(newGrid);
            return newGrid;
        });

        const child = document.getElementById(data);
        child.parentNode.removeChild(child);

        //ev.target.appendChild(document.getElementById(data));
    }

    return (
        <div>
            <p>Drag the icon into the rectangle:</p>
            <div className="d-flex">
                {/* Board to play game on */}
                <div
                    className="bg-secondary container text-center grid-container"
                    style={{ height: "120px", width: "120px" }}
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
