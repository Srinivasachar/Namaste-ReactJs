import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({resObject}) => {
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="logo"
          src={CDN_URL+resObject.cloudinaryImageId}
        ></img>
        <h2>{resObject.name}</h2>
        <h4>{resObject.costForTwoString}</h4>
        <h4>{resObject.slaString}</h4>
        <h4>{resObject.avgRating + " star"}</h4>
      </div>
    )
  };

  export default RestaurantCard;