import styles from "./MainForm.module.css"
function MainForm () {
  return (
    <div className={styles.formContainer}>
        <h2 className={styles.Heading}>Let Us Call You!</h2>
        <p className={styles.subHeading}>To help you choose your property</p>
        <input type="text" placeholder="Your Name" className={styles.inputName}></input>
        <input type="text" placeholder="Your Number" className={styles.inputNum}></input>
        <input type="text" placeholder="Your Email" className={styles.inputEM}></input>
        <textarea placeholder="Tell us about desired property " className={styles.inputDiscription}></textarea>
    </div>
  )
}
export default MainForm;