import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            MB
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              
               <Link to="">Filmler</Link> 
               <Link to="/1_hafta_bootstrap">Hakkımda</Link> 
              
              <a class="nav-link" href="#">
                Hakkımda
              </a>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
