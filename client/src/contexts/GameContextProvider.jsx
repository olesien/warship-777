import { createContext, useContext, useState } from "react";
import socketio from "socket.io-client";

const GameContext = createContext();
const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL);

export const useGameContext = () => {
    return useContext(GameContext);
};

const GameContextProvider = ({ children }) => {
    const boats = [
        { size: "double", direction: "right" },
        { size: "double", direction: "right" },
        { size: "triple", direction: "left" },
        { size: "quadruple", direction: "left" },
    ]
    const [chatUsername, setChatUsername] = useState();
    const [room, setRoom] = useState();
    const [player, setPlayer] = useState({});
    const [opponent, setOpponent] = useState({});
    const [playerAvatar, setPlayerAvatar] = useState("");
    const [startBoats, setStartBoats] = useState(boats);
    const [idsTurn, setIdsTurn] = useState(null);
    const changeRoom = (newRoom) => {
        console.log("changin room");
        setRoom(newRoom);
    };

    const resetShips = () => {
        setStartBoats(boats)
    }

    const initialGrid = () => {
        resetShips()
        const columns = 10;
        const rows = 10;
        const innerGrid = [];
        for (let colI = 0; colI < columns; colI++) {
            const row = [];
            for (let rowI = 0; rowI < rows; rowI++) {
                row.push({
                    filled: false,
                    part: false,
                    missed: false,
                    hit: false,
                });
            }
            //columns
            innerGrid.push(row);
        }
        return innerGrid;
    }

    const [grid, setGrid] = useState(initialGrid);


    const updateGrid = (columnIndex, rowIndex, update) => {
        setGrid((oldGrid) => {
            return oldGrid.map((oldCol, oldColIndex) => {
                return oldCol.map((oldRow, oldRowIndex) => {
                    if (
                        oldColIndex === columnIndex &&
                        oldRowIndex === rowIndex
                    ) {
                        //update this row
                        return { ...oldRow, [update]: true };
                    }
                    return { ...oldRow };
                });
            });
        });
    };

    const removeBoatFromStart = (index) => {
        console.log(index);
        //Filter it!
        setStartBoats((startBoats) =>
            startBoats.filter((boat, boatIndex) => boatIndex !== index)
        );
    };

    const addBoatToStart = (size, direction) => {
        setStartBoats((startBoats) => [...startBoats, { size, direction }]);
    };


    const rotateShips = () => {
        console.log("rotating");
        setStartBoats((startBoats) => {
            return startBoats.map((boat) => {
                let direction = "right";
                if (boat.direction === "right") {
                    direction = "down";
                }
                if (boat.direction === "down") {
                    direction = "left";
                }
                if (boat.direction === "left") {
                    direction = "up";
                }
                return { ...boat, direction };
            });
        });
    };

    const values = {
        chatUsername,
        setChatUsername,
        socket,
        room,
        changeRoom,
        grid,
        setGrid,
        player,
        opponent,
        setPlayer,
        setOpponent,
        playerAvatar,
        setPlayerAvatar,
        updateGrid,
        idsTurn,
        setIdsTurn,
        initialGrid,
        startBoats,
        removeBoatFromStart,
        addBoatToStart,
        rotateShips,
    };

    return (
        <GameContext.Provider value={values}>{children}</GameContext.Provider>
    );
};

export default GameContextProvider;
