import banner from "../../../assets/banner.jpg";
import styles from "./style.module.css"
export const BannerSection = () => {
  return (
    <div className="container">
      <section className={styles.flexbox}>
        <img src={banner} alt="image of the banner" />
        <div>
          <h1 className="title1">Fashion Store</h1>
          <p className="paragraph">we are the best store in the world</p>
          <a href="#" className="btn">
            Buy a product
          </a>
        </div>
      </section>
    </div>
  );
};
