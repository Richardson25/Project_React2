import Logo from "../../assets/logo.svg"
import styles from "./style.module.css";


export const Header = () => {
    return(
        <header className={styles.flexbox}>
            <img src={Logo} alt="logo website"/>
        </header>
    )
}

//export default Header;