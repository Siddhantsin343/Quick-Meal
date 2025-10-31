import { useState , useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

/* Header Compontent*/
const Header = ()=>{

const [logBtn, setlogBtn] = useState("Log-IN")

    return(
        <div className="navCon">
            <div className="imgCon">
                <img src={LOGO_URL} alt="logo-Image"/>
            </div>
            <div className="navItem">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact us</Link></li>
                    <li>Cart</li>
                    <button className="Login-button"
                        onClick={()=>{
                            logBtn === "Log-IN" ? setlogBtn("Log-OUT"): setlogBtn("Log-IN")
                        }}
                    >{logBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;