import { useEffect, useState } from 'react'


export default function EndGame({ chatUsername, player, opponent }) {
  const [winner, setWinner] = useState({})
  const [loser, setLoser] = useState({})


  useEffect(() => {
    console.log(opponent)
    console.log(player)

    setWinner(player)
    setLoser(opponent)

    // console.log(winner)

    

  }, [])

  return (
    <div className="endgame-wrapper">
      <div className="endgame-background-image">
        <button className="back-startpage">
          Startpage
        </button>
        {player ? (
        <div className="loser-frame">
          <div className="transparent-background">
                <h3>{winner.username}</h3>

                <img src={winner.avatar} alt="" />
              
                <h3>Sunk your ships!</h3>
          </div>
        </div>
        )

        :

        (
        <div className="winner-frame">
          <div className="transparent-background">
                <img src={winner.avatar} alt="" />
              
                <h3>You sunk the enemy ships!</h3>
          </div>
        </div>
        )}
        <div className="play-again-btn-wrapper">
          <button className="play-again-btn">
            Play again!
          </button>
        </div>
      </div>
    </div>
  )
}
