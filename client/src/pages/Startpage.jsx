
import UsernameInput from '../components/UsernameInput'
import React from 'react'

const Startpage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ background: "url('./images/image 3.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%", width: "100%", position: "fixed" }}>
      <div>
        <UsernameInput /> 
      </div> 
    </div>
   
  )
}


export default Startpage