import React from "react"
import { Link, useNavigate } from "react-router-dom"


function Nav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication data
    localStorage.removeItem('access_token');
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/profile">Profile manager tool</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active my-2 my-sm-0" to="/profile">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link my-2 my-sm-0" to="/addprofile">Add Profile</Link>
            </li>
          </ul>
          <button className="btn btn-outline-light" onClick={handleLogout}>Logout <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
          </svg></button>
        </div>
      </div>
    </nav>



  )
}

export default Nav