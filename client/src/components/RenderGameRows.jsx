import React from "react";

export default function RenderGameRows({ row, totalIndex }) {
    //console.log(totalIndex);
    return <div id={"div" + totalIndex} className="grid-item"></div>;
}
