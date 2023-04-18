import React from 'react'
import favicon from '../../assets/favicon/apple-touch-icon.png'

function Navbar() {
  return (
    <nav className="navigation container-fluid navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" href="./Home">
        <img src={favicon} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href="./Home">Home</a>
            <a className="nav-link active" aria-current="page" href="./ProjectGallery">Project Gallery</a>
            <a className="nav-link active" aria-current="page" href="./Freelance">Freelance Work</a>
            <a className="nav-link active" aria-current="page" href="./Blog">Blog</a>
            <a className="nav-link active" aria-current="page" href="./Contact">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar