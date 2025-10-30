import { useState , useEffect } from "react";
import { LOGO_URL } from "../utils/constant";

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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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