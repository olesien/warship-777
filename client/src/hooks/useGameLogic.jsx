import { useState } from "react";

export default function useGameLogic() {
    //filled means that it can be interacted with. Part is just for visuals
    const [grid, setGrid] = useState([
        [
            { filled: true, part: true, subparts: [{ col: 0, row: 1 }] },
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
            { filled: true, part: true, subparts: [{ col: 1, row: 0 }] },
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
            { filled: false, part: true },
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
            {
                filled: true,
                part: true,
                subparts: [
                    { col: 0, row: 1 },
                    { col: 0, row: 2 },
                ],
            },
            { filled: false, part: true },
            { filled: false, part: true },
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

        console.log("totalIndex: " + totalIndex);

        const columnCount = grid.length;
        const rowCount = grid[0].length;

        const columnIndex = Math.ceil(totalIndex / columnCount) - 1;
        const parentColumnIndex = Math.ceil(parentIndex / columnCount) - 1;

        const rowIndex = totalIndex - rowCount * columnIndex - 1;

        const parentRowIndex = parentIndex - rowCount * parentColumnIndex - 1;

        let isNew = parentColumnIndex === -1;

        console.log("--------");
        console.log(isNew);
        console.log(columnIndex, rowIndex);
        console.log(parentColumnIndex, parentRowIndex);

        //is a part!
        if (grid[columnIndex][rowIndex].part) {
            return;
        }

        setGrid((prevGrid) => {
            let oldGridItem = {};
            if (isNew) {
                oldGridItem.subparts = [];
            } else {
                oldGridItem = prevGrid[parentColumnIndex][parentRowIndex];
            }
            //const oldGridItem = prevGrid[parentColumnIndex][parentRowIndex];

            let obfuscated = false;
            //check if
            let children;
            if (isNew) {
            } else {
                children = oldGridItem.subparts.map((subpart) => {
                    const newColumn = columnIndex + subpart.col;
                    const oldColumn = parentColumnIndex + subpart.col;

                    const newRow = rowIndex + subpart.row;
                    const oldRow = parentRowIndex + subpart.row;

                    const newGridItem = prevGrid[newColumn][newRow];
                    if (newGridItem.filled || newGridItem.part) {
                        obfuscated = true;
                    }

                    return { newColumn, oldColumn, newRow, oldRow };
                });
            }

            console.log("childrne");
            console.log(children);

            if (obfuscated) {
                console.log(obfuscated);
                return prevGrid;
            }

            //new grid
            const newGrid = prevGrid.map((prevColumn, prevColumnIndex) => {
                console.log(prevColumnIndex, parentColumnIndex, columnIndex);

                //Map through the columns
                return prevColumn.map((prevRow, prevRowIndex) => {
                    //add "main" boat tile
                    if (
                        prevRowIndex === rowIndex &&
                        prevColumnIndex === columnIndex
                    ) {
                        console.log(
                            "Adding to: " + prevColumnIndex + " " + prevRowIndex
                        );
                        return {
                            filled: true,
                            part: true,
                            subparts: oldGridItem.subparts,
                        };
                    }
                    //remove the "main" boat tile
                    if (
                        prevRowIndex === parentRowIndex &&
                        prevColumnIndex === parentColumnIndex
                    ) {
                        console.log(
                            "Removing from: " +
                                prevColumnIndex +
                                " " +
                                prevRowIndex
                        );
                        return { filled: false, part: false };
                    }

                    //loop through the smaller component parts to add or remove.
                    if (!isNew) {
                        const rightTile = children.find(
                            (child) =>
                                child.newColumn === prevColumnIndex &&
                                child.newRow === prevRowIndex
                        );
                        if (rightTile) {
                            //add this tile!
                            console.log("adding component tile");
                            return { filled: false, part: true };
                        }

                        const deleteTile = children.find(
                            (child) =>
                                child.oldColumn === prevColumnIndex &&
                                child.oldRow === prevRowIndex
                        );

                        if (deleteTile) {
                            console.log(prevColumnIndex, prevRowIndex);
                            console.log("deleting component tile");
                            //add this tile!
                            return { filled: false, part: false };
                        }
                    }

                    //If no changes to this row, return it
                    return prevRow;
                });
            });
            //Return the new grid
            return newGrid;
        });

        //child.parentNode.removeChild(child);

        //ev.target.appendChild(document.getElementById(data));
    }
    return { grid, drop: drop, allowDrop: allowDrop, drag: drag };
}
