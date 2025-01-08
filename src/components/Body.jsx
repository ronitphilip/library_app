import React from 'react'

const Body = () => {
  return (
    <>
      <div style={{backgroundColor:"#021334", overflow:"hidden"}}>
        <h1 className='text-center my-5'>Quotes</h1>
        <div style={{minHeight:"120vh"}} className='row'>

          <div className='col'></div>
          <div className='col-6'>
            <div className='d-flex flex-column justify-content-evenly' style={{height:"60%", backgroundColor:"white", color:"black", borderTopLeftRadius: "70px", borderBottomLeftRadius: "70px"}}>
              <h4 style={{fontFamily: "Sour Gummy, serif", fontWeight:"400"}} className='text-center'>"Be yourself; everyone else is already taken."</h4>
              <h5 style={{fontFamily: "Sour Gummy, serif", fontWeight:"400"}} className='text-end me-5'>-Oscar Wilde</h5>
            </div>
          </div>

          <div className='col-6'>
            <div className='d-flex flex-column justify-content-evenly' style={{height:"70%", color:"black", backgroundColor:"white", borderTopRightRadius: "70px", borderBottomRightRadius: "70px"}}>
              <h4 style={{fontFamily: "Sour Gummy, serif", fontWeight:"400"}} className='text-center'>"The secret of getting ahead is getting started."</h4>
              <h5 style={{fontFamily: "Sour Gummy, serif", fontWeight:"400"}} className='text-end me-5'>-Mark Twain</h5>
            </div>
          </div>
          <div className='col'></div>

          <div className='col-6'></div>
          <div className='col-6'>
            <div className='d-flex flex-column justify-content-evenly' style={{height:"70%", color:"black", backgroundColor:"white", borderTopLeftRadius: "70px", borderBottomLeftRadius: "70px"}}>
              <h4 style={{fontFamily: "Sour Gummy, serif", fontWeight:"400"}} className='text-center'>"There is no charm equal to tenderness of heart."</h4>
              <h5 style={{fontFamily: "Sour Gummy, serif", fontWeight:"400"}} className='text-end me-5'>-Jane Austen</h5>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Body