import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  return filteredRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="bodyCon">
      {/* Search Box */}
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search here..."
          className="SearchBOX"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const searchResults = allRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchResults);
          }}
        >
          Search
        </button>
      </div>

      {/* Filter Button */}
      <div className="filterBox">
        <button
          className="filterBtn"
          onClick={() => {
            const fastDelivery = allRestaurants.filter(
              (res) => res?.info?.sla?.deliveryTime <= 20
            );
            setFilteredRestaurants(fastDelivery);
          }}
        >
          Filter by Fast Delivery
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="CardCon">
        {filteredRestaurants.map((restaurant) => (
           <Card key={restaurant?.info?.id} resData={restaurant.info} />
          // --> this is use to make dynamic <Link  key={restaurant?.info?.id} to={"/restaurent/"+ restaurant.data.id}><Card resData={restaurant.info} /></Link>/>
        ))}
      </div>
    </div>
  );
};

export default Body;

// END
