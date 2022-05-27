import React from 'react'

const Chat = ({ message, setMessage, messages, onSubmit }) => {

  return (
    <div id="chat">
      <div id="messages-wrapper">
        <ul id="messages">
          {messages.map((message, index) => {
            const ts = new Date(message.timestamp)
            const time = ts.toLocaleTimeString()
            return (
              <li key={index} className="message">
                <span>{time}</span>
                <span>{message.username}</span>
                <span>{message.content}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <form action="" onSubmit={onSubmit}>
        <input
          id="messageBar" 
          type="text"
          value={message}
          placeholder="Write message..."
          onChange={e => setMessage(e.target.value)} 
        />

        <input 
          type="submit"
          value="Send" 
          id="sendMessageBtn" 
          // disabled={!message.length}
        />
      </form>
    </div>
  )
}

export default Chat
