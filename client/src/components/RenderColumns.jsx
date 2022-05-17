import React from "react";
import RenderRows from "./RenderRows";

export default function RenderColumns({ grid, drop, allowDrop, drag }) {
    return (
        <>
            {grid.map((column, columnIndex) => (
                <div className="rows">
                    {column.map((row, rowIndex) => (
                        <RenderRows
                            row={row}
                            drop={drop}
                            allowDrop={allowDrop}
                            drag={drag}
                            totalIndex={(columnIndex + 1) * (rowIndex + 1)}
                        />
                    ))}
                </div>
            ))}
        </>
    );
}
