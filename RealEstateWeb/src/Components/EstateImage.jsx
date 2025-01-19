import styles from "./EstateImage.module.css";
function EstateImage({ component }) {
    return (
      <div>
        {component.map((property, index) => (
          <div key={index} className={`${styles.propertyBox} property-card`}>
            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-488x326.jpg" ></img>
            <h2>{property.title}</h2>
            <p className={styles.location}> <i className="fa-solid fa-location-dot" style={{ color: "#0860f7" }}></i>
            {property.location}</p>
            <p>Size: {property.Sq} sq. ft.</p>
            <p>Price: {property.price}</p>
          </div>
        ))}
      </div>
    );
}
export default EstateImage ;