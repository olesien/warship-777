import React from 'react'

const UsernameInput = () => {
  return (
    <div>
        {/* An input for your username */}

        <form> 
            <input type="text" id="userName" name="userName" placeholder="Enter username" />
            <br/>
            <input type="submit" value="Battle" />
        </form>
    </div>
  )
}

export default UsernameInput