import Menu from "../Menu";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
   return (
      <header>
         <div className="logo">
            <Link to="/">
               <img src={require("../../images/icontp.png")} alt="img" />
               <h1>Cashing</h1>
            </Link>
         </div>
         <Menu />
      </header>
   );
}

export default Header;
