import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function RenderBoat({ ship }) {
    const [parts, setParts] = useState([]);
    const partLength = ship.subparts.length;
    //ship.subparts.unshift({hit: ship.hit})
    useEffect(() => {
        let newShip = JSON.parse(JSON.stringify(ship));
        newShip.subparts.unshift({ hit: ship.hit });
        newShip.subparts = newShip.subparts.sort((a, b) =>
            a.hit === b.hit ? 0 : a.hit ? -1 : 1
        );

        // console.log(
        //     newShip.subparts.sort((a, b) => (a.hit === b ? 0 : a ? -1 : 1))
        // );
        setParts(
            newShip.subparts.map((part, key) => (
                <div
                    key={key}
                    className={"subpart " + (part.hit ? " hit" : "")}
                ></div>
            ))
        );
    }, [ship]);
    return <div className={"previewboat boatLength" + partLength}>{parts}</div>;

    //return <div className={"previewboat boatLength" + partLength}></div>;
}
