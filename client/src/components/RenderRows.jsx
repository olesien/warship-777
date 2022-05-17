import React from "react";

export default function RenderRows({ row, drop, allowDrop, drag, totalIndex }) {
    console.log(totalIndex);
    return (
        <div
            id={"div" + totalIndex}
            className="gridItem"
            onDrop={drop}
            onDragOver={allowDrop}
        >
            {row.filled && (
                <div
                    id={"drag" + totalIndex}
                    className="innerGridItem"
                    draggable="true"
                    onDragStart={drag}
                ></div>
            )}
        </div>
    );
}
