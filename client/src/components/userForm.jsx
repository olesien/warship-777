import React from 'react'

const UserForm = ({ username, setUsername, onSubmit, loading}) => {

  return (
    <div>
      <form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
        <input 
          disabled={loading}
          type="text" 
          id="userName" 
          name="userName" 
          value={username}
          placeholder="Enter name..." 
          onChange={e => setUsername(e.target.value)} />
          {/* <UserInput /> */}
        {/* <br/> */}
        <input type="submit" value="Fight!" id="fightBtn"/>
      </form>
    </div>
  )
}

export default UserForm;