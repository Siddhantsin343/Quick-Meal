import Card from "./Card";

const Body =  () =>(
    <div className="bodyCon">
        <div className="searchBox">
            <input type="text" placeholder="search-Here"></input>
            <button>search</button>
        </div>
        <div className="filterBox">
            <button className="filterBtn">
                filter Restaurent
            </button>
        </div>
        <div className="CardCon">
            <Card/>
        </div>
    </div>
)

export default Body;