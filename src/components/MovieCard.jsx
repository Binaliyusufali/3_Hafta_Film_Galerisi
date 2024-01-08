import React from "react";
import MOVIES from "../data/movies"

function MovieCard() {
  return (
    <>
    <div className="input-group  container mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Aradığınız Filmi Giriniz"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        
      />
      <button className="btn btn-success" type="button" id="button-addon2" >
        Ara
      </button>
    </div>
    
    
    <div className="row row-cols-1 row-cols-md-3 g-4 m-auto  container">
    {MOVIES.map((item,index)=>(

      <div className="col ">
        <div className="card border-warning " key={index}>
          <img src={item.posterUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.plot}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
    
    </>


  );
}

export default MovieCard;
