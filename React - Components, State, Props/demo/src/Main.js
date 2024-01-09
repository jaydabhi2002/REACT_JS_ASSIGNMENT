import React from 'react'
import img1 from './image/001.jpeg'
import img2 from './image/002.jpeg'
import img3 from './image/003.jpeg'

const Main = () => {
  return (
    
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height={"400px"} src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img height={"400px"} src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img height={"400px"} src={img3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>

  )
}

export default Main
