import Startpage from "./pages/Startpage";
import Game from "./pages/Game";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import { useGameContext } from "./contexts/GameContextProvider";

const App = () => {
    //listen to game state
    const { room } = useGameContext();
    return (
        <>
            <Routes>
                {room ? (
                    <>
                        <Route path="/game" element={<Game />} />
                        <Route
                            path="*"
                            element={<Navigate to="/game" replace />}
                        />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Startpage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </>
                )}
            </Routes>
        </>
    );
};

export default App;
