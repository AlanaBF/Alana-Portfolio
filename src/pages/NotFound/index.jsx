import React from 'react'
import { Container } from 'react-bootstrap'
import error from '../../assets/images/vecteezy_3d-code-debugging-illustration-side-view_10998101_639.png'
import { Link } from 'react-router-dom'
import "./notfound.css"

const NotFound = () => {
  return (
    <Container fluid className='notfound-page-container'>
      <Container className='notfound-page-inner'>
        <div className='notfound-page-content'>
          <div>
            <p>Oops...</p>
            <span> 404 </span>
            <p>Page Not Found</p>
            
            <Link to='/'>Go To Home Page..</Link>
          </div>
          <div>
            <img className="bug404" src={error} alt="bug image" />
          </div>
          <div><a href="https://www.vecteezy.com/free-png/error">Error PNGs by Vecteezy</a></div>
        </div>
      </Container>
    </Container>
  )
}

export default NotFound