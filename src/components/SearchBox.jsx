
import { useState } from "react";
import MOVIES from "../data/movies"


// const [filmAdi,  setFilmAdi] = useState("");

// const handleClick(e){
//   const filmAdi = e.target.value;
// //   setFilmAdi(filmAdi)

//   const filtrelenmisFilmler = MOVIES.filter((filmAdi) =>
//   filmAdi.title.toLowerCase().includes(filmAdi.toLowerCase())
// );



// // setMovie(filtrelenmisFilmler);

// };


const SearchBox = () => {
  return (
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
  );
};

export default SearchBox;
