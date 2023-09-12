import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import resList from "../utilis/mockData";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.1808917&lng=81.1302716&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const rests =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setFilteredList(rests);
  };

  return (
    <div className="body">
      <div className="search">search</div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList =
            filteredList &&
            filteredList.filter((restaurant) => restaurant.info.avgRating > 4);
          setFilteredList(filteredList);
        }}
      >
        Click me
      </button>
      <div className="res-container">
        {filteredList &&
          filteredList.map((restaurant) => (
            <RestCard key={restaurant.info.id} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
