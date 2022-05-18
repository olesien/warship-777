import UserForm from '../components/userForm'
import React, { useState, useEffect } from 'react'
import { useChatContext } from '../contexts/ChatContextProvider'

const Startpage = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const { socket, setChatUsername, chatUsername } = useChatContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(username)
    setChatUsername(username)
  }

  useEffect(() => {
    if (username === '') {
      return
    }
    // emits that username value
    socket.emit("newPlayer", chatUsername)
    socket.emit("user:joined", chatUsername)

  }, [socket, chatUsername])

  return (
    <div className="d-flex justify-content-end" id="homePage">
      <div id="homePageText">
        <h1>Battle</h1>
        <div id="of">
          <h1>of</h1>
        </div>
        <h1>Red Line</h1>
      </div>
      <div id="userFormPosition">
        <UserForm 
          onSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
        />
      </div> 

      <div id="avatarSelect">
        <div className="avatar" id="one"></div>
        <div className="avatar" id="two"></div>
        <div className="avatar" id="three"></div>
        <div className="avatar" id="four"></div>
        <div className="avatar" id="five"></div>
        <div className="avatar" id="six"></div>
        <div className="avatar" id="seven"></div>
        <div className="avatar" id="eight"></div>
      </div>

      <div id="waitingText" className="d-none">
        <h1>Waiting for player...</h1>
      </div>
    </div>  
  )
}


export default Startpage