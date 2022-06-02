import { useGameContext } from "../contexts/GameContextProvider";

const Chat = ({ message, setMessage, messages, messageRef, onSubmit }) => {
    const { socket } = useGameContext();
    return (
        <div id="chat">
            <div id="messages-wrapper">
                <ul id="messages">
                    {messages.map((message, index) => {
                        return (
                            <li key={index} className="message">
                                <span className="messageUsername">
                                    {message.userid === socket.id
                                        ? "You"
                                        : "Opponent"}
                                    :
                                </span>
                                <span className="messageContent">
                                    {message.content}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <form action="" onSubmit={onSubmit}>
                <input
                    id="messageBar"
                    type="text"
                    ref={messageRef}
                    value={message}
                    placeholder="Write message..."
                    onChange={(e) => setMessage(e.target.value)}
                />

                <input
                    type="submit"
                    value="Send"
                    id="sendMessageBtn"
                    className="btn-primary"
                    // disabled={!message.length}
                />
            </form>
        </div>
    );
};

export default Chat;
