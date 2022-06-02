import WaitingPlayer from './WaitingPlayer'
import { useEffect, useState} from 'react'

export default function PlayerDisconnect() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('Redirecting...');
    }
  });
  return (
    <div className="redirect">
        <h2>Opponent left the game</h2>
        <WaitingPlayer />
        <h3>Redirecting to Startpage in {seconds}</h3>
    </div>
  )
}
