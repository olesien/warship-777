import React from "react";
import RenderRows from "./RenderRows";

export default function RenderColumns({ grid, drop, allowDrop, drag }) {
    return (
        <>
            {grid.map((column, columnIndex) => (
                <div className="rows" key={columnIndex}>
                    {column.map((row, rowIndex) => {
                        //console.log(column.length, columnIndex, rowIndex);
                        const calculateTotal =
                            column.length * columnIndex + (rowIndex + 1);
                        //console.log(calculateTotal);
                        return (
                            <RenderRows
                                row={row}
                                drop={drop}
                                allowDrop={allowDrop}
                                drag={drag}
                                totalIndex={calculateTotal}
                                key={calculateTotal}
                            />
                        );
                    })}
                </div>
            ))}
        </>
    );
}
