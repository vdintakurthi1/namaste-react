import { CDN_URL } from "../utilis/constants";

const RestCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating } = resData?.info;

  const stylecard = {
    background: "#f0f0f0",
  };

  return (
    <div className="res-card" style={stylecard}>
      <div className="card-image">
        <img src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3>{name}</h3>
      <h4>Biryani, North Indian, Cusines</h4>
      <h4>{avgRating} stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default RestCard;
