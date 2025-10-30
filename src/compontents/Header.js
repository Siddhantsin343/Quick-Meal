/* Header Compontent*/
import { LOGO_URL } from "../utils/constant";

const Header = ()=>{
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
                    <button className="Login-button">Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;