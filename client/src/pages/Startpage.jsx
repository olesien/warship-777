import UserForm from '../components/userForm'
import WaitingPlayer from '../components/WaitingPlayer'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useChatContext } from '../contexts/ChatContextProvider'

const Startpage = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const { socket, setChatUsername, chatUsername } = useChatContext()
  const navigate = useNavigate()

  const one = "Monkey D. Luffy"
  const two = "Roronoa Zoro"
  const three = "Shanks"
  const four = "Nami"
  const five = "Dracule Mihawk"
  const six = "Karasu"
  const seven = "Nefertari Vivi"
  const eight = "Arlong"

  const avatarName = (name) => {
    setUsername(name)
  }

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

              {loading && 
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)" }}>
                      <WaitingPlayer />
                </div>
              }

            </div>
            <div style={{ position: "absolute", top: "75%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <UserForm 
                onSubmit={handleSubmit}
                username={username}
                setUsername={setUsername}
              />
            </div> 

              <form action="" id="avatarSelect" >
                <label className="avatar" id="one">
                  <input type="radio" name="avatar" onClick={() => avatarName(one)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>

                <label className="avatar" id="two">
                  <input type="radio" name="avatar" onClick={() => avatarName(two)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>

                <label className="avatar" id="three">
                  <input type="radio" name="avatar" onClick={() => avatarName(three)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>

                <label className="avatar" id="four">
                  <input type="radio" name="avatar" onClick={() => avatarName(four)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>

                <label className="avatar" id="five">
                  <input type="radio" name="avatar" onClick={() => avatarName(five)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>

                <label className="avatar" id="six">
                  <input type="radio" name="avatar" onClick={() => avatarName(six)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>

                <label className="avatar" id="seven">
                  <input type="radio" name="avatar" onClick={() => avatarName(seven)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>

                <label className="avatar" id="eight">
                  <input type="radio" name="avatar" onClick={() => avatarName(eight)}/>
                  <label htmlFor="" className="avatarLabel" />
                </label>
              </form>
    </div>  
  )
}


export default Startpage;
