import UserForm from '../components/userForm'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useChatContext } from '../contexts/ChatContextProvider'

const Startpage = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [players, setPlayers] = useState(0)
  // const [disconnect, setDisconnect] = useState(false)
  const { socket, setChatUsername, chatUsername } = useChatContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(username)
    setChatUsername(username)
    // setPlayers(prevPlayer => prevPlayer + 1)
  }
  

  useEffect(() => {
    setUsername('')

    if (!username.length) {
      return
    }
    // emits that username value
    socket.emit("user:joined", chatUsername)
    socket.on("user:joined", (msg) => {
      console.log(msg)
    })
    socket.on("user:disconnect", (msg) => {
      console.log(msg)
    })

  }, [socket, chatUsername])

  return (
    <div className="d-flex justify-content-end" style={{ background: "url('./images/image 3.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%", width: "100%", position: "fixed" }}>
      <div id="homePageText">
        <h1>Battle</h1>
        <div style={{ position: "relative", left: "110px" }} >
          <h1>of</h1>
        </div>
        <h1>Red Line</h1>
      </div>
      <div style={{ position: "absolute", top: "75%", left: "50%", transform: "translate(-50%, -50%)" }}>
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