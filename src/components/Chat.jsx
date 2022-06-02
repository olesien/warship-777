import React from "react";

const Chat = ({ message, setMessage, messages, messageRef, onSubmit }) => {
    return (
        <div id="chat">
            <div id="messages-wrapper">
                <ul id="messages">
                    {messages.map((message, index) => {
                        return (
                            <li key={index} className="message">
                                <span className="messageUsername">{message.username}:</span>
                                <span className="messageContent">{message.content}</span>
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
