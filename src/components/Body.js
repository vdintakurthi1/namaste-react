import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import resList from "../utilis/mockData";
import { Link } from "react-router-dom";

const Body = () => {
  const [renderedList, setRenderedList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&page_type=DESKTOP_WEB_LISTING"
    );

    // mtm location
    // lat=17.4400802&lng=78.3489168

    const json = await data.json();

    const rests =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setFilteredList(rests);
    setRenderedList(rests);
  };

  const handleFilterClick = () => {
    const filteredRestaurants = renderedList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredList(filteredRestaurants);
  };

  return renderedList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchfilteredList = renderedList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              searchfilteredList.length
                ? setFilteredList(searchfilteredList)
                : setFilteredList(renderedList);
            }}
          >
            search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterClick}>
          Top rests
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <RestCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
