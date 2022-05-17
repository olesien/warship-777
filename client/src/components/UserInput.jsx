import React from 'react'

export default function UserInput() {
  return (
    <div>
      {/* An input for your username */}
      <input type="text" id="userName" name="userName" placeholder="Enter username" />
      <br/>
      <input type="submit" value="Fight!" id="fightBtn" />
    </div>
  )
}
