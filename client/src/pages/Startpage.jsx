
import UsernameInput from '../components/UsernameInput'
import React from 'react'

const Startpage = () => {
  return (
    <div className="d-flex justify-content-end" style={{ background: "url('./images/image 3.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%", width: "100%", position: "fixed" }}>
      <div id="homePageText">
        <h1>Battle</h1>
        <div style={{ position: "relative", left: "110px" }} >
          <h1>of</h1>
        </div>
        <h1>Red Line</h1>
      </div>
      
      <div>
        <UsernameInput /> 
      </div> 
    </div>
   
  )
}


export default Startpage