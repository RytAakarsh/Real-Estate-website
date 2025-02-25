import styles from "./SpecialContainer.module.css";
function SpecialContainer ({component}) {
    return (
        <div>
           {
            component.map( (property , index) => (
        <div key={index} className={styles.propertyBox}>
        <img src={property.image}></img>
        <div className={styles.discription}>
        <h2> {property.title} </h2>
        <p> {property.para} </p>
        <b className=" ml-12 mr-12 ">Bedrooms</b> <b className=" mr-12" >Bathrooms</b>  <b className=" mr-12" >Area</b>
       <br></br>
            <span className={styles.logos}> <i class="fa-solid fa-bed"></i></span> <span className={styles.logos}> <i class="fa-solid fa-shower"></i> </span> <span className={styles.logos}> <i class="fa-thin fa-square"></i> </span> <span className={styles.area}> {property.Sq} sq. ft.</span>
        <br></br>
        <p className={styles.salePrice}>For Sale</p>
        <p className={styles.price}> {property.price}</p>
        <b className={styles.lastlogo}> <i class="fa-solid fa-heart ml-80 mr-6 text-[25px]" style={{color: "#000000"}}></i></b> 
        <b className={styles.lastlogo}> <i class="fa-solid fa-code-compare text-[25px]" style={{color: "#000000"}}></i></b>
        </div>
        </div>
         ))} 
        </div>
    )
}
export default SpecialContainer ;