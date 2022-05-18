import React from "react";
import RenderColumns from "./RenderColumns";

import { useState } from "react";

export default function Grid() {
    console.log("rerendering");

    //filled means that it can be interacted with. Part is just for visuals
    const [grid, setGrid] = useState([
        [
            { filled: true, part: true },
            { filled: false, part: true },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
        [
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
            { filled: false, part: false },
        ],
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

        const child = document.getElementById(data);
        const parentNode = child.parentNode;
        const parentIndex = Number(parentNode.id.substring(3));
        console.log(parentIndex);

        const totalIndex = Number(ev.target.id.substring(3));

        const columnCount = grid.length;
        const rowCount = grid[0].length;

        const columnIndex = Math.ceil(totalIndex / columnCount) - 1;
        const parentColumnIndex = Math.ceil(parentIndex / columnCount) - 1;

        const rowIndex = totalIndex - rowCount * columnIndex - 1;

        const parentRowIndex = parentIndex - rowCount * parentColumnIndex - 1;

        console.log(columnIndex, rowIndex);
        console.log(parentColumnIndex, parentRowIndex);

        setGrid((prevGrid) => {
            const newGrid = prevGrid.map((prevColumn, prevColumnIndex) => {
                console.log(prevColumnIndex, parentColumnIndex, columnIndex);

                //Add new element
                if (
                    prevColumnIndex === parentColumnIndex ||
                    prevColumnIndex === columnIndex
                ) {
                    //Map through the columns
                    return prevColumn.map((prevRow, prevRowIndex) => {
                        //add boat?
                        if (
                            prevRowIndex === rowIndex &&
                            prevColumnIndex === columnIndex
                        ) {
                            console.log(
                                "Adding to: " +
                                    prevColumnIndex +
                                    " " +
                                    prevRowIndex
                            );
                            return { filled: true };
                        } else if (
                            //else remove boat?
                            prevRowIndex === parentRowIndex &&
                            prevColumnIndex === parentColumnIndex
                        ) {
                            console.log(
                                "Removing from: " +
                                    prevColumnIndex +
                                    " " +
                                    prevRowIndex
                            );
                            return { filled: false };
                        }
                        //If no changes to this row, return it
                        return prevRow;
                    });
                }

                //If no changes to this column, return it
                return prevColumn;
            });
            //Return the new grid
            return newGrid;
        });

        //child.parentNode.removeChild(child);

        //ev.target.appendChild(document.getElementById(data));
    }

    return (
        <>
            <RenderColumns
                grid={grid}
                drop={drop}
                allowDrop={allowDrop}
                drag={drag}
            />
        </>
    );

    // return (
    //     <div>
    //         <p>Drag the icon into the rectangle:</p>
    //         <div className="d-flex">
    //             {/* Board to play game on */}
    //             <div
    //                 className="bg-gameboard container text-center grid-container"
    //                 style={{ height: "120px", width: "120px" }}
    //             >
    //                 <RenderColumns
    //                     grid={grid}
    //                     drop={drop}
    //                     allowDrop={allowDrop}
    //                     drag={drag}
    //                 />
    //             </div>
    //         </div>
    //         <div
    //             id="drag0"
    //             className="innerGridItem"
    //             draggable="true"
    //             onDragStart={drag}
    //         ></div>
    //     </div>
    // );
}
