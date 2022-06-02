import WaitingPlayer from './WaitingPlayer'

export default function PlayerDisconnect() {
  return (
    <div className="redirect">
        <h2>Opponent left the game</h2>
        <WaitingPlayer />
        <h3>Redirecting to Startpage...</h3>
    </div>
  )
}
