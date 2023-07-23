import React from "react";
import { img_300 } from "../../../../../Config/tmdb";
import { unavailable } from "../../../../../Config/tmdb";
import Styles from "./ShowContent.module.css";
// import AuthContext from "../../../../../Context/AuthContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import { db } from "../../../../../Config/Firebase";
// import { ref, onValue, child, push, update } from "firebase/database";

const ShowContent = ({ content, media }) => {
  // const navigate = useNavigate();
  // const [isFav, setIsFav] = useState(false);
  
  // const user = useContext(AuthContext);
  const id = content.id;
  const poster = content.poster_path;
  const title = content.name || content.title;
  const releaseDate = content.release_date || content.first_air_date;
  const mediaType = content.media_type || media;
  const vote = content?.vote_average?.toFixed(2);

  // const userId = user?.uid;
  // const userFavRef = ref(db, "users" + userId + "/favorite");
  // const handleFavButton = () => {
  //   if (user) {
  //     // alert("Fav added");
  //     setIsFav((prev) => {
  //       return !prev;
  //     });
  //   } else {
  //     alert("Kindly login to add favorites!!");
  //     setInterval(() => {
  //       navigate("/login");
  //     }, 1500);
  //   }
  // };

  
  return (
    <div key={id} id={id} className={Styles["content__box"]}>
      <div className={Styles["content__img-box"]}>
        <img src={poster ? `${img_300}${poster}` : unavailable} alt={title}/>
        {/* <p className={Styles["fav__icon"]} onClick={handleFavButton}>
          {isFav ? (
            <FontAwesomeIcon
              icon={faSolidHeart}
              className={Styles["fav__icon-color"]}
            />
          ) : (
            <FontAwesomeIcon icon={faHeart} />
          )}
        </p> */}
      </div>
      <div className={Styles["content__details"]}>
        <div className={Styles["content__details-head"]}>
          <h2 className={Styles["content__details-title"]}>{title}</h2>
          <div className={Styles["content__details-vote"]}>
            <span>{vote}</span>
          </div>
        </div>
        <div className={Styles["content__details-sub"]}>
          {mediaType && (
            <p className={Styles["content__details-media"]}>
              {mediaType?.charAt(0).toUpperCase() + mediaType?.slice(1)}
            </p>
          )}
          <p className={Styles["content__details-date"]}>{releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowContent;
