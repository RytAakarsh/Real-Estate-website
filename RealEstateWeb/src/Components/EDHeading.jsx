import styles from "./EDHeading.module.css"
function EDHeading () {
   return (
    <div>
    <div className={styles.heading}>
    <h1 className={styles.heading1}>Recent</h1>
    <h1 className={styles.heading2}>Properties </h1>
    </div>
    <p className={styles.paraHead}> Checkout our some of our latest properties</p>
    </div>
   )
}
export default EDHeading ;