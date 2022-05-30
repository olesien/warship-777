import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function RenderBoat({ ship }) {
    const [afloat, setAfloat] = useState(false);
    const partLength = ship.subparts.length;
    //ship.subparts.unshift({hit: ship.hit})
    useEffect(() => {
        let newShip = JSON.parse(JSON.stringify(ship));
        newShip.subparts.unshift({ hit: ship.hit });
        // newShip.subparts = newShip.subparts.sort((a, b) =>
        //     a.hit === b.hit ? 0 : a.hit ? -1 : 1
        // );

        //Has any part NOT been struck?
        const isAfloat = newShip.subparts.find((part) => !part.hit);
        if (isAfloat) {
            setAfloat(true);
        } else {
            setAfloat(false);
        }
    }, [ship]);
    if (afloat) {
        return <div className={"previewboat boatLength" + partLength}></div>;
    }

    return <div className={"previewboat hit boatLength" + partLength}></div>;

    //return <div className={"previewboat boatLength" + partLength}></div>;
}
