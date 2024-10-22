import { FormNewsLetter } from "./FormNewsLetter"
import styles from "./style.module.css"



export const FormSection = () =>{
    return(
        <div className="container sm">
            <section className={styles.newsletterSection}>
             <h2 className="title2 center">Sign to our NewsLetter</h2>
             <FormNewsLetter/>
        </section>
        </div>
        
       
    )
}