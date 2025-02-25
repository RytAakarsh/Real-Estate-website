import styles from "./AgentsDisplay.module.css";
function AgentsDisplay ({component}) {
    return (
        <>
        {
            component.map(( detail , index ) => (
        <div key={index} className={styles.mainDiv}>
            <img src={detail.image} className={styles.mainImage}></img>
            <div className={styles.discription}>
                <h2 className={styles.name}>{detail.Name}</h2>
                <h2 className={styles.number}>{detail.Number}</h2>
                <h2 className={styles.mail}>{detail.Mail}</h2>
                <h2 className={styles.deal}>{detail.Num}</h2>
                <h2 className={styles.message}>Listed Properties</h2>
            </div>
        </div>
            ))}
        </>
    )
}
export default AgentsDisplay;