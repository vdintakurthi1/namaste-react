import { useEffect, useState } from "react";
import { Menu_Url, CDN_URL } from "../utilis/constants";
import { useParams } from "react-router-dom";

const Restaurantmenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  let restaurantName, cloudinaryImageId, itemCards;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_Url + resId);

    const json = await data.json();

    setRestInfo(json.data);
    console.log(json.data);
  };

  if (restInfo) {
    restaurantName = restInfo?.cards[0]?.card?.card?.info?.name;
    cloudinaryImageId = restInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId;

    itemCards =
      restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
  }

  return (
    <div>
      <h1> {restaurantName} </h1>
      <img src={CDN_URL + cloudinaryImageId}></img>

      <h2>Menu</h2>

      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} {"Price: Rs : "}
              {item?.card?.info?.price / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
