/* Header Compontent*/

const Header = ()=>{
    return(
        <div className="navCon">
            <div className="imgCon">
                <img src="https://tse4.mm.bing.net/th/id/OIP.aEFj52jeL9cEwAK3oZYmhgHaHa?pid=Api&P=0&h=180" alt="logo-Image"/>
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