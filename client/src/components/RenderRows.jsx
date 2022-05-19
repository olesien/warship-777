import React from "react";

export default function RenderRows({ row, drop, allowDrop, drag, totalIndex }) {
    //console.log(totalIndex);
    return (
        <div
            id={"div" + totalIndex}
            className="grid-item"
            onDrop={drop}
            onDragOver={allowDrop}
        >
            {row.filled ? (
                <div
                    id={"drag" + totalIndex}
                    className="inner-grid-item"
                    draggable="true"
                    onDragStart={drag}
                ></div>
            ) : (
                row.part && (
                    <div
                        id={"drag" + totalIndex}
                        className="inner-grid-item"
                        draggable="false"
                    ></div>
                )
            )}
        </div>
    );
}
