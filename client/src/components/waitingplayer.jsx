import loading from '../assets/images/goingMerryOnePiece.gif'

export default function waitingplayer() {
  return (
    <div className="waiting">
      <h4>Waiting for Opponent...</h4>
      <img src={loading} alt="loading gif" />
    </div>
  )
}
