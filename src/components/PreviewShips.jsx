import { useEffect, useState } from "react";
import { useGameContext } from "../contexts/GameContextProvider";

import RenderBoat from "./RenderBoat";

const makeShips = (person) => {
    const gameboard = person.gameboard;
    let coreParts = [];
    gameboard.forEach((col, colIndex) => {
        col.forEach((row, rowIndex) => {
            if (row.filled) {
                const newRow = row;
                newRow.subparts = row.subparts.map((part) => {
                    const partColIndex = colIndex + part.col;
                    const partRowIndex = rowIndex + part.row;

                    console.log(partColIndex, partRowIndex);
                    const child = gameboard[partColIndex][partRowIndex];
                    return { ...part, hit: child.hit };
                });
                coreParts.push(row);
            }
        });
    });
    console.log(coreParts);

    return coreParts.map((ship, key) => {
        return <RenderBoat ship={ship} key={key} />;
    });
};

export default function PreviewShips({ foe }) {
    const { player, opponent } = useGameContext();
    const [playerShips, setPlayerShips] = useState([]);
    const [opponentShips, setOpponentShips] = useState([]);
    useEffect(() => {
        console.log();
        if (foe) {
            setOpponentShips(makeShips(opponent));
        } else {
            setPlayerShips(makeShips(player));
        }
    }, [player, opponent, foe]);
    if (foe) {
        return <div>{opponentShips}</div>;
    }
    return <div>{playerShips}</div>;
}
