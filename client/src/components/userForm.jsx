import React, { useState, useEffect } from 'react'
import UserInput from './UserInput';

const UserForm = ({ socket }) => {
  const [playerId, setPlayerId] = useState();

  const handleOnSubmit = () => {
    console.log(`Emitting new user with user id: ${playerId}`)
    socket.emit('newPlayer', playerId)
  }

  useEffect(() => {
    setPlayerId()

  }, playerId)

  return (
    <div>
        <form> 
          <UserInput onSubmit={handleOnSubmit} />
        </form>
    </div>
  )
}

export default UserForm;