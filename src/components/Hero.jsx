import React from 'react';
import background from '../assets/magical-forest.jpg'
import Header from './Header';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  return (

    <>
      <div style={{minHeight: "100vh", backgroundImage: `url(${background})`,backgroundSize: 'cover',backgroundPosition: 'center'}} className="hero">

        <Header/>
        <div style={{marginTop:"150px"}} className="container d-flex flex-column align-items-center">
          <h1 style={{fontSize:"50px", fontFamily:"Anton SC, serif"}}>THE</h1>
          <span style={{fontSize:"100px", fontFamily:"Anton SC, serif"}}>BOOK STORE</span>
          <p className='text-center'>Enter a world of wonder, where stories come alive and adventures await. Welcome to our library—your <br /> gateway to imagination and discovery.</p>
          <div>
            <Link className='btn btn-warning me-5' to="/books">READ</Link>
            <Link className='btn btn-outline-light' to='/books'>Add</Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;