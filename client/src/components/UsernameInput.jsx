import React from 'react'

const UsernameInput = () => {
  return (
    <div>
        {/* An input for your username */}

        <form className="d-flex flex-column align-items-center"> 
            <input type="text" id="userName" name="userName" placeholder="Enter username..." />
            <br/>
            <input type="submit" value="Fight!" id="fightBtn" />
        </form>
    </div>
  )
}

export default UsernameInput