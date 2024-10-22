import styles from "./style.module.css"

export const ProductCard = ({title, image, price}) =>{
   // const priceFormated = price.toFixed(2).replace(".", ",")
   
   const priceFormated = price.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return(
        <div className={styles.productCard}>
        <img src={image} alt= "image product"/>
        <h3 className="title3">{title}</h3>
        <p className="price">{ priceFormated }</p>
        </div>
    )
}