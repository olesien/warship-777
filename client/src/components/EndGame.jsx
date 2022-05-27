import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WaitingPlayer from '../components/WaitingPlayer';

export default function EndGame({ socket, winner, room, grid }) {
  const [loading, setLoading] = useState(false)
  const [awaitPlayers, setAwaitPlayers] = useState(0)
  const navigate = useNavigate()

  const handlePlayAgain = () => {
    setLoading(true)
    setAwaitPlayers(prevValue => prevValue + 1)
    console.log(awaitPlayers)

    if (awaitPlayers === 2) {
    navigate("/")
    socket.emit("game:replay", room, grid)
    }
  }
  useEffect(() => {
    
  }, [awaitPlayers])

  return (
    <div className="endgame-wrapper">
      {/* {!loading &&  */}
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
          </div>
          }
          <button 
            className="play-again-btn"
            onClick={handlePlayAgain}
          >
            Play again!
          </button>
        </div>
      {/* } */}
    </div>
  )
}
