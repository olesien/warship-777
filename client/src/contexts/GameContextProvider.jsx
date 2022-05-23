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
                row.push({ filled: false, part: false });
            }
            //columns
            innerGrid.push(row);
        }
        return innerGrid;
    });

    socket.emit("user:hello", "hello");
    const values = {
        chatUsername,
        setChatUsername,
        socket,
        room,
        changeRoom,
        grid,
        setGrid,
    };

    return (
        <GameContext.Provider value={values}>{children}</GameContext.Provider>
    );
};

export default GameContextProvider;
