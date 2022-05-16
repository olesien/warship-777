import { createContext, useContext } from "react";
import socketio from "socket.io-client";

const ChatContext = createContext();
const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL);

export const useChatContext = () => {
    return useContext(ChatContext);
};

const ChatContextProvider = ({ children }) => {
    const values = {
        socket,
    };

    return (
        <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    );
};

export default ChatContextProvider;
