import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WaitingPlayer from '../components/WaitingPlayer';

export default function EndGame({ socket, winner, room, grid, init }) {

  const [loading, setLoading] = useState(false)
  const [awaitPlayers, setAwaitPlayers] = useState(0)
  const navigate = useNavigate()

  const handlePlayAgain = () => {
    setLoading(true)
    setAwaitPlayers(prevValue => prevValue + 1)
  }


  useEffect(() => {

    if (awaitPlayers > 0) {
      socket.emit("game:replay", room, grid, awaitPlayers)
    }
    
    if (awaitPlayers === 2) {
      init()
      setAwaitPlayers(0)
    }
    
    socket.on("game:replay", (playersReady) => {
      setAwaitPlayers(playersReady)
    })


    return () => {
      console.log("CLEANUP")
      socket.off("game:replay")
    }

  }, [socket, room, awaitPlayers, grid])

  return (
    <div className="endgame-wrapper">
        <div className="endgame-background-image">
          <button 
            className="back-startpage"
            onClick={() => navigate("/" - "game")}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} className="back-icon"/>
            Startpage
          </button>
          {loading && 
            <div className="replay-loading">
              <WaitingPlayer />
            </div>
          }
          {!loading && 
          <div className="winner-frame">
            <div 
              className={winner.id !== socket.id 
                ? "transparent-background-red" 
                : "transparent-background-green"}
            >
              {winner.id !== socket.id
                ? <h3>{winner.username}</h3>
                : <h3 className="mt-4"> </h3>}
              
              <img className="winner-image mt-2" src={winner.avatar} alt="" />
            
              {winner.id !== socket.id
                ? <h3>Sunk your ships!</h3>
                : <h3>You sunk the enemy ships!</h3>}
            </div>
            <button 
              className="play-again-btn"
              onClick={handlePlayAgain}
            >
              Play again!
            </button>
          </div>
          }
        </div>
    </div>
  )
}
