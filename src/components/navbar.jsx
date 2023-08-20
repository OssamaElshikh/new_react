import React from "react"
import { Link } from "react-router-dom"


function Nav () {



return (
  <nav class="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Profile manager tool</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link active my-2 my-sm-0" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link my-2 my-sm-0" to="/addprofile">Add Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



      )
}

export default Nav