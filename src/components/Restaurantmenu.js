import { CDN_URL } from "../utilis/constants";
import useRestmenu from "../utilis/useRestmenu";
import { useParams } from "react-router-dom";

const Restaurantmenu = () => {
  const { resId } = useParams();

  let restaurantName, cloudinaryImageId, itemCards;

  const restInfo = useRestmenu(resId);

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
