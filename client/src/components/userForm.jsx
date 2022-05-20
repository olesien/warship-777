import React from 'react'

const UserForm = ({ username, setUsername, onSubmit, loading}) => {

  return (
    <div>
      <form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
        <input 
          type="text" 
          id="userName" 
          name="userName" 
          value={username}
          placeholder="Enter name..." 
          onChange={e => setUsername(e.target.value)} 
          disabled={loading}
        />
          {/* <UserInput /> */}
        {/* <br/> */}
        <input 
          type="submit" 
          value="Fight!" 
          id="fightBtn"
          disabled={loading}
        />
      </form>
    </div>
  )
}

export default UserForm;