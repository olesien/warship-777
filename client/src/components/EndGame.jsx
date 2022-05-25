import React from 'react'

export default function EndGame() {
  return (
    <div className="winner-wrapper">
      <button className="back-startpage">
        Startpage
      </button>
      <div className="transparent-background">
        <div className="winner-frame">
          <p>Monkey D. Luffy</p>

          <img src="winner-url" alt="" />

          <p>Sunk your ships!</p>
        </div>

        <button>
          Play again!
        </button>
      </div>
    </div>
  )
}
