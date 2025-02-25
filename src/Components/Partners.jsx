import styles from "./Partners.module.css";
function Partners ({component}) {
    return (
    <>
    {
        component.map(( partner , index ) => (
    <div key={index} className={styles.mainDiv}>
    <img src={partner.image}></img>
    </div>
        ))}
    </>
    )
}
export default Partners;