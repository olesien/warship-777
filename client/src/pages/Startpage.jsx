import UserForm from '../components/userForm'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useChatContext } from '../contexts/ChatContextProvider'

const Startpage = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const { socket, setChatUsername, chatUsername } = useChatContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    console.log(username)
    setChatUsername(username)
  }


  const startGame = () => {
    setLoading(false)
    console.log("Start game")
    navigate("/game")
  }
  
  
  useEffect(() => {
    setUsername('')
    console.log("UseEffect runs")
    

    if (!username.length) {
      return
    }
    // emits that username value
    socket.emit("user:joined", chatUsername)
    socket.on("user:joined", (msg) => {
      console.log(msg)
    })
    socket.on("players", (msg) => {
      startGame()
    })
    // socket.on("user:disconnect", (msg) => {
    //   console.log(msg)
    // })

    
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
            <div style={{ position: "absolute", top: "75%", left: "50%", transform: "translate(-50%, -50%)" }}>
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

            {loading && <p>loading...</p>}
    </div>  
  )
}


export default Startpage;
