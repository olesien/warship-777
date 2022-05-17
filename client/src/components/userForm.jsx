import React from 'react'

const UserForm = ({ username, setUsername, onSubmit}) => {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          id="userName" 
          name="userName" 
          value={username}
          placeholder="Enter username" 
          onChange={e => setUsername(e.target.value)} />
          {/* <UserInput /> */}
        <br/>
        <input type="submit" value="battle" id="fightBtn" />
      </form>
    </div>
  )
}

export default UserForm;