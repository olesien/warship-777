import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function RenderBoat({ ship }) {
    const [parts, setParts] = useState([]);
    const partLength = ship.subparts.length;
    //ship.subparts.unshift({hit: ship.hit})
    useEffect(() => {
        const newShip = JSON.parse(JSON.stringify(ship));
        newShip.subparts.unshift({ hit: ship.hit });
        setParts(
            newShip.subparts.map((part) => (
                <div className={"subpart " + (part.hit ? " hit" : "")}></div>
            ))
        );
    }, [ship]);
    return <div className={"previewboat boatLength" + partLength}>{parts}</div>;

    //return <div className={"previewboat boatLength" + partLength}></div>;
}
