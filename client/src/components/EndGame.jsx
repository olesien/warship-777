import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export default function EndGame({ socket, winner }) {
  const navigate = useNavigate()

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

        <button className="play-again-btn">
          Play again!
        </button>
      </div>
    </div>
  )
}
