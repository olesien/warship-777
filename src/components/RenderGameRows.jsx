import { useGameContext } from "../contexts/GameContextProvider";

export default function RenderGameRows({
    row,
    totalIndex,
    type,
    rowIndex,
    columnIndex,
}) {
    const { socket, room, updateGrid, idsTurn } = useGameContext();
    const makehit = () => {
        if (idsTurn !== socket.id) {
            console.log("not our turn!");
            return;
        }
        //temporary
        if (row.hit) {
            console.log("been hit already");
            return;
        }

        if (row.missed) {
            console.log("been missed already");
            return;
        }
        socket.emit("user:hit", { room, columnIndex, rowIndex });

        if (!row.part) {
            console.log("is not a part of anything!");
            return;
        }
        console.log("hit at " + totalIndex);
    };
    if (type === "opponent") {
        return (
            <div
                id={"div" + totalIndex}
                className={
                    "grid-item " +
                    (idsTurn === socket.id && !row.hit && !row.missed
                        ? "clickable"
                        : "not-clickable")
                }
                onClick={makehit}
            >
                {row.hit ? (
                    <div
                        id={"hititem-" + totalIndex}
                        className="inner-grid-opponent-hit"
                    ></div>
                ) : (
                    row.missed && (
                        <div
                            id={"hititem-" + totalIndex}
                            className="inner-grid-opponent-missed"
                        ></div>
                    )
                )}
            </div>
        );
    }
    //player
    return (
        <div id={"div" + totalIndex} className="grid-item">
            {row.hit ? (
                <div
                    id={"hititem-" + totalIndex}
                    className="inner-grid-player-hit"
                ></div>
            ) : row.missed ? (
                <div
                    id={"hititem-" + totalIndex}
                    className="inner-grid-player-missed"
                ></div>
            ) : (
                row.part && (
                    <div
                        id={"boatitem-" + totalIndex}
                        className="inner-grid-item"
                    ></div>
                )
            )}
        </div>
    );
}
