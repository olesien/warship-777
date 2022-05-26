import { useEffect, useState } from "react";
import { useGameContext } from "../contexts/GameContextProvider";

export default function PreviewShips({ foe }) {
    const { player, opponent } = useGameContext();
    const [playerShips, setPlayerShips] = useState([]);
    const [opponentShips, setOpponentShips] = useState([]);
    useEffect(() => {
        console.log(player);
        console.log(opponent);

        //player
        const gameboard = player.gameboard;
        let coreParts = [];
        gameboard.forEach((col, colIndex) => {
            col.forEach((row, rowIndex) => {
                if (row.filled) {
                    const newRow = row;
                    newRow.subparts = row.subparts.map((part) => {
                        const partColIndex = colIndex + part.col;
                        const partRowIndex = rowIndex + part.row;

                        const child = gameboard[partColIndex][partRowIndex];
                        return { ...part, hit: child.hit };
                    });
                    coreParts.push(row);
                }
            });
        });
        console.log(coreParts);
    }, [player, opponent, playerShips, opponentShips]);
    if (foe) {
        return <div>Preview Enemy Ships</div>;
    }
    return <div>Preview Your Ships</div>;
}
