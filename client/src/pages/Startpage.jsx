import UserForm from '../components/userForm'
import React, { useState, useEffect } from 'react'
import { useChatContext } from '../contexts/ChatContextProvider'

const Startpage = () => {
  const {socket} = useChatContext();

  // let playerId;
  const [userInput, setUserInput] = useState('')
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(userInput);
      // emits that username value
    socket.emit("newPlayer", username)
    setUserInput('')
    socket.emit("user:joined", username)
  }

  useEffect(() => {

  }, [username])

  return (      
    <div className="d-flex align-items-center justify-content-center" style={{ background: "url('./images/image 3.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%", width: "100%", position: "fixed" }}>
      <div>
        <UserForm 
          onSubmit={handleSubmit}
          userInput={userInput}
          setUserInput={setUserInput}
        />
      </div> 
    </div>
  )
}


export default Startpage