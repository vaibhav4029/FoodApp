import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function Home() {

  const [search,setSearch] = useState();


  const [foodCat, setFoodCat] = useState([]); //if we have to use map functionn then we need to use square brackets or map can be used in array
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []); //to run only once while loading

  //to run when state change put state name inside brackets

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
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
                <div className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>(
                      setSearch(e.target.value)
                    )}/>
                    {/* <button className="btn btn-success text-white" type="Submit">Search</button> */}
                </div>
            </div>
      </div>
    </div>
      </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                    //ye commented part search k liye hai kaam nhi kr rha isko check krna hai bad m
                      .filter((item) => (item.CategoryName === data.CategoryName)  /*&& (item.name.toLowerCase().includes(search.toLocaleLowerCase()))*/) 
                      .map((filteredItem) => {
                        return (
                          <>
                            <div key={filteredItem._id} className="col-12 col-md-6 col-lg-4">
                              <Card foodItem={filteredItem} options={filteredItem.options[0]}
                              />
                            </div>
                          </>
                        );
                      })
                  ) : (
                    <div>No such data Found</div>
                  )}
                </div>
              );
            })
          : ""}
        {/* <Card /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
