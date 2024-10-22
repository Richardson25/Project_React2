import { CategoryCard } from "./CategoryCard";
import { categories } from "../../../data/categories";
import styles from "./style.module.css"

export const CategoriesSection = () => {
  return (
    <div className="container">
      <section className={styles.categoriesSection}>
        <h2 className="title2">CATEGORIES</h2>
        <ul className={styles.categoriesList}>
          {categories.map((category) => {
            const { id, img, name } = category;
            return (
              <li key={id}>
                <CategoryCard title={name} image={img} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
