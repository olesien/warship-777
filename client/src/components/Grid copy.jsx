import React from "react";

export default function Grid() {
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    return (
        <div>
            <p>Drag the W3Schools image into the rectangle:</p>
            <div className="d-flex">
                {/* Board to play game on */}
                <div
                    className="bg-secondary container text-center grid-container"
                    style={{ height: "400px", width: "400px" }}
                >
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                    <div
                        className="div1"
                        onDrop={drop}
                        onDragOver={allowDrop}
                    ></div>
                </div>
            </div>
            <div id="drag1" draggable="true" onDragStart={drag}></div>
        </div>
    );
}
