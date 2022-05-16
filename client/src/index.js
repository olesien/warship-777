import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatContextProvider from "./contexts/ChatContextProvider";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <ChatContextProvider>
            <App />
        </ChatContextProvider>
    </React.StrictMode>
);
