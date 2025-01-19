import styles from "./EstateImage.module.css";
function EstateImage({ component }) {
    return (
      <div>
        {component.map((property, index) => (
          <div key={index} className={`${styles.propertyBox} property-card`}>
            <img src={property.image}></img>
            <h2>{property.title}</h2>
            <p className={styles.location}> <i className="fa-solid fa-location-dot mr-2" style={{ color: "#1F79B8" } } ></i>  
            {property.location}</p>
            <p className={styles.stars}> <i class="fa-solid fa-star " style={{color: "#ef9b0b"}}></i> <i class="fa-solid fa-star " style={{color: "#ef9b0b"}}></i><i class="fa-solid fa-star " style={{color: "#ef9b0b"}}></i><i class="fa-solid fa-star " style={{color: "#ef9b0b"}}></i><i class="fa-solid fa-star " style={{color: "#ef9b0b"}}></i> </p>
            
            <b className="mt-5 ml-12 ">Bedrooms</b> <b className="mt-5" >Bathrooms</b>  <b className="mt-5" >Area</b>
            <br></br>
            <span className={styles.logos}> <i class="fa-solid fa-bed"></i></span> <span className={styles.logos}> <i class="fa-solid fa-shower"></i> </span> <span className={styles.logos}> <i class="fa-thin fa-square"></i> </span> <span className={styles.area}> {property.Sq} sq. ft.</span>
        <p className={styles.price}> {property.price}</p>
        <b className={styles.lastlogo}> <i class="fa-solid fa-heart ml-80 text-[25px]" style={{color: "#000000"}}></i></b> 
        <b className={styles.lastlogo}> <i class="fa-solid fa-code-compare text-[25px]" style={{color: "#000000"}}></i></b>
        
          </div>
        ))}
      </div>
    );
}
export default EstateImage ;