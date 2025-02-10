import styles from "./QuickLinks.module.css";
function QuickLinks  ({ component }) {
    return (
        <>
          <h5 className={styles.link}>{component}</h5>
        </>
    )
}
export default QuickLinks;