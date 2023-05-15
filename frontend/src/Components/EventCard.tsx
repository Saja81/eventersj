import image from "../camille-minouflet-d7M5Xramf8g-unsplash.jpg";
function EventCard() {
  return (
    <div className="EventCard-div">
      <div className="EventCard-image-div">
        <div className="EventCard-image-wrapper">
          <img className="EventCard-image" src={image} alt="test" />
        </div>
        <div className="EventCard-gratis-div">
          <p>Gratis</p>
        </div>
      </div>
      <div className="EventCard-description">
        <h3>Titel</h3>
        <p>plats?</p>
      </div>
    </div>
  );
}

export default EventCard;
