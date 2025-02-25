import styles from "./EDHeading.module.css"
function EDHeading ({Display} ) {
   return (
   <div>
      {Display.map((title, index ) => (
      <div key={index} >
         <div className={styles.heading}>
         <h1 className={styles.heading1}> {title.Heading1} </h1>
         <h1 className={styles.heading2}> {title.Heading2} </h1>
         </div>
         <p className={styles.paraHead}> {title.Para} </p>
      </div>
      ))}
   </div>
   )
}
export default EDHeading ;