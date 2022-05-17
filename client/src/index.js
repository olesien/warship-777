import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatContextProvider from "./contexts/ChatContextProvider";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChatContextProvider>
                <App />
            </ChatContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
