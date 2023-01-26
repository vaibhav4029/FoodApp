import React from "react";
import { Link } from "react-router-dom";
export default function Carousel() {
  return (
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel" style={{objectFit:"contain !important"}}
      >
        
        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900×700/?icecream"
              alt="First slide"
            />
          </div>
          
        
          
            <div className="carousel-caption" id='carousel' style={{zIndex:"100"}}>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success text-white" type="Submit">Search</button>
                </form>
            </div>
      </div>
    </div>
  );
}
