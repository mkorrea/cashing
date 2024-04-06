import Menu from "../Menu";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
   const handleMouseEnter = () => {
      const img = document.getElementById("logo-img");
      img.style.transform = "rotate(360deg)";
    };
  
    const handleMouseLeave = () => {
      const img = document.getElementById("logo-img");
      img.style.transform = "rotate(320deg)";
    };
   
   return (
      <header>
         <div className="logo">
            <Link to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <img id="logo-img" src={require("../../images/logo-icon.png")} alt="img" />
               <h1>Cashing</h1>
            </Link>
         </div>
         <Menu />
         <h3> {info.name} </h3>
      </header>
   );
}

export default Header;
