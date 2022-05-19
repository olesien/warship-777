import React from "react";
import RenderColumns from "./RenderColumns";

export default function Grid({ grid, drop, allowDrop, drag }) {
    console.log("rerendering");

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
}
