import React from "react"
import { Link } from "react-router-dom"


function Nav() {



  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Profile manager tool</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active my-2 my-sm-0" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link my-2 my-sm-0" to="/addprofile">Add Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Nav