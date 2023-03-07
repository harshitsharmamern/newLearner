import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const Navigate = useNavigate()
  const handlelogout=()=>{
    localStorage.removeItem('auth-token')
       Navigate('/signin')
  }
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">about <span className="sr-only">(current)</span></Link>
      </li>
      {!localStorage.getItem('auth-token') ?
      (
        <>
        <li className="nav-item active">
        <Link className="nav-link" to="/signup">signup <span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="/signin">signin <span className="sr-only">(current)</span></Link>
      </li>

      </>
      ) :
      <li className="nav-item active">
        {/* <Link className="nav-link" to="/signin">LOGOUT <span className="sr-only">(current)</span></Link> */}
       <button onClick={handlelogout}> LOGOUT</button>
      </li>
    }
     
    </ul>
   
  </div>
</nav>
    </>
  )
}

export default Navbar