import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{backgroundColor:"white"}}>
      <div style={{width:"80vw", margin:"auto"}} className='row d-flex flex-row pt-5'>

        <div className="col-5">
          <h4 className='text-dark'>The Book Store</h4>
          <p className='text-dark pe-5'>
            Designed and built with all the love in the world by the Dev team with the help of our contributors. <br /> <br />
            Code licensed Dev, docs CC BY 3.0. <br /> <br />
            Currently v1.0.0.</p>
        </div>

        <div className="col-2">
          <h4 className='text-dark'>Links</h4>
          <Link className='link-underline link-underline-opacity-0 text-dark' to={'/'}>Home</Link> <br />
          <Link className='link-underline link-underline-opacity-0 text-dark' to={'/books'}>Books</Link> <br />
          <Link className='link-underline link-underline-opacity-0 text-dark' to={'/books'}>Add</Link>
        </div>

        <div className="col-2">
          <h4 className='text-dark'>Guides</h4>
          <a className='link-underline link-underline-opacity-0 text-dark' href="https://react.dev" target='_blank'>React</a><br />
          <a className='link-underline link-underline-opacity-0 text-dark' href="https://www.npmjs.com/package/react-router-dom" target='_blank'>React Router</a><br />
          <a className='link-underline link-underline-opacity-0 text-dark' href="https://react-bootstrap.github.io" target='_blank'>React Bootstrap</a>
        </div>

        <div className="col-3">
          <h4 className='text-dark'>Contact Us</h4>

          <div className='d-flex'>
            <input className='form-control w-75' placeholder="Email" type="text" /> 
            <button className='btn btn-primary ms-3'><i className="fa-solid fa-arrow-right text-dark"></i></button>
          </div>

          <div className='d-flex mt-3'>
            <i className="fa-brands fa-facebook text-primary fs-4 me-4"></i>
            <i className="fa-brands fa-instagram text-primary fs-4 me-4"></i>
            <i className="fa-brands fa-linkedin text-primary fs-4 me-4"></i>
            <i className="fa-brands fa-twitter text-primary fs-4 me-4"></i>
            <i className="fa-brands fa-github text-primary fs-4 me-4"></i>
          </div>

        </div>

      </div>
      <div>
        <p className='text-secondary text-center'>Copyright © July 2024 Batch, The Book Store. Built with React.</p>
      </div>
    </div>
  )
}

export default Footer