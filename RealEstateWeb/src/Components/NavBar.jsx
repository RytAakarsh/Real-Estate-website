import styles from "./NavBar.module.css";
import Logo from '../assets/Logo.png';
function NavBar () {
    return (
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a className={`${styles.NavBarMain} navbar-brand`} href="#">
      <div className={styles.LogoName}>
        <img src={Logo} alt="Logo" width="65" height="104" class="d-inline-block align-text-top " />
        <h3 className={styles.NavName1}> Estate </h3>
        <h3 className={styles.NavName2}> World </h3>
      </div>
        
        <div className={styles.pages}>
         <a href="" className={styles.page} style={{backgroundColor:"rgb(4, 67, 4)", color: "white"} }>Home</a> 
         <a href="" className={styles.page}>Real Estate</a>
         <a href="" className={styles.page}>Property</a>
         <a href="" className={styles.page}>Contact Us</a>
        </div>
        
    </a>
    </div>
    </nav>
    )
}
export default NavBar;
