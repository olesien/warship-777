import { createContext, useContext, useState } from "react";
import socketio from "socket.io-client";

const GameContext = createContext();
const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL);

export const useGameContext = () => {
    return useContext(GameContext);
};

const GameContextProvider = ({ children }) => {
    const [chatUsername, setChatUsername] = useState();
    const [room, setRoom] = useState();
    const [player, setPlayer] = useState({});
    const [opponent, setOpponent] = useState({});
    const [playerAvatar, setPlayerAvatar] = useState("");
    const [startBoats, setStartBoats] = useState([
        { size: "double", direction: "right" },
        { size: "double", direction: "right" },
        { size: "triple", direction: "left" },
        { size: "quadruple", direction: "down" },
    ]);
    const [idsTurn, setIdsTurn] = useState(null);
    const changeRoom = (newRoom) => {
        console.log("changin room");
        setRoom(newRoom);
    };

    const [grid, setGrid] = useState(() => {
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
    });

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
        startBoats,
    };

    return (
        <GameContext.Provider value={values}>{children}</GameContext.Provider>
    );
};

export default GameContextProvider;
