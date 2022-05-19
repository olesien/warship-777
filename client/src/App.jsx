import Startpage from "./pages/Startpage";
import Game from "./pages/Game";
import { Routes, Route } from "react-router";
import "./App.css";
import { useEffect } from "react";
import { useGameContext } from "./contexts/GameContextProvider";

const App = () => {
    //listen to game state
    const { socket, changeRoom } = useGameContext();
    useEffect(() => {
        socket.on("game:changeRoom", changeRoom);
    }, [socket, changeRoom]);
    return (
        <>
            <Routes>
                <Route path="/" element={<Startpage />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </>
    );
};

export default App;
