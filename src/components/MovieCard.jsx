import React from "react";
import MOVIES from "../data/movies"

// const [filteredMovie, setFilteredMovie] = useState(movie);

// const handleFilter = (event)=> {
//   const value = event.target.value;
//   const filtered = movie.filter(movie =>movie.title.includes(value));
//   setFilteredMovie(filtered)
// }

function MovieCard() {
  return (
    <>
    <div class="input-group  container mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Aradığınız Filmi Giriniz"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        // value={filmAdi}
        // onChange={handleClick}
      />
      <button class="btn btn-success" type="button" id="button-addon2" >
        Ara
      </button>
    </div>
    
    
    <div class="row row-cols-1 row-cols-md-3 g-4 m-auto  container">
    {MOVIES.map((item,index)=>(

      <div class="col ">
        <div class="card border-warning " key={index}>
          <img src={item.posterUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.plot}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
    
    </>


  );
}

export default MovieCard;
