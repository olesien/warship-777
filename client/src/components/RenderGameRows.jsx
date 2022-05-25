import React from "react";

export default function RenderGameRows({ row, totalIndex, type }) {
    const makehit = () => {
        console.log("hit at " + totalIndex);
    };
    if (type === "opponent") {
        return (
            <div
                id={"div" + totalIndex}
                className="grid-item"
                onClick={makehit}
            >
                {row.hit && (
                    <div
                        id={"hititem-" + totalIndex}
                        className="inner-grid-item-hit"
                    ></div>
                )}
            </div>
        );
    }
    //console.log(totalIndex);
    return (
        <div id={"div" + totalIndex} className="grid-item">
            {row.part && (
                <div
                    id={"boatitem-" + totalIndex}
                    className="inner-grid-item"
                ></div>
            )}
        </div>
    );
}
