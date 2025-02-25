import styles from "./Features.module.css";
function Features ({component}) {
    return (
    <> 
       {
       component.map(( feature , index ) => (
    <div key={index} className={styles.mainDiv}>
         <img src={feature.image} className={styles.image}></img>
         <h2 className={styles.name}>{feature.name}</h2>
         <p className={styles.para} > {feature.para}</p>
    </div>
       ))}
    </>
    )
}
export default Features;