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
    <div className="d-flex align-items-center justify-content-center" style={{ background: "url('./images/image 3.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%", width: "100%", position: "fixed" }}>
      <div>
        <UserForm 
          onSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
        />
      </div> 
    </div>
  )
}


export default Startpage