import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GameContextProvider from "./contexts/GameContextProvider";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GameContextProvider>
                <App />
            </GameContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
