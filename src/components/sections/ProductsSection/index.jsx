import { ProductCard } from "./ProductCard";
import { products } from "../../../data/products";
import styles from "./style.module.css"
export const ProductsSection = () => {
  return (
    <div className="container">
      <section className={styles.productsSection}>
        <h2 className="title2">Nice dress</h2>
        <ul className={styles.productList}>
          {products.map((product) => {
            const { id, name, price, img } = product;
            return (
              <li key={id}>
                <ProductCard title={name} image={img} price={price} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
