const UserForm = ({ handleSubmit, userInput, setUserInput }) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="userName" 
          name="userName" 
          value={userInput}
          placeholder="Enter username" 
          onChange={e => setUserInput(e.target.value)} />
          {/* <UserInput /> */}
        <br/>
        <input type="submit" value="battle" id="fightBtn" />
      </form>
    </div>
  )
}

export default UserForm;