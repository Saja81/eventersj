import { StarFill } from "react-bootstrap-icons";

function ProfileView() {
  return (
    <div className="main-divs">
      <h3>Min profil</h3>
      <div className="Profile-star-div">
        <StarFill className="Bootstrap-black-star" />
        <h3>Favoritmarkerade event</h3>
      </div>
    </div>
  );
}

export default ProfileView;
