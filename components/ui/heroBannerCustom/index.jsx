import Link from "next/link";
import styles from "./style.module.scss";

function HeroBannerCustom(props) {
  return (
    <div className={styles.banner}>
      <div className={styles.heroImage}>
        <div className="container">
          <div className={styles.heroText}>
            <h1 className={styles.displayHead}>{props.heading}</h1>
          </div>

          <nav className={styles.breadcrumbs}>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link className={styles.linkBread} href="#">
                  Home
                </Link>
              </li>
              <li className={`${styles.breadcrumbsItem} breadcrumb-item`}>
                <Link className={styles.linkBread} href="#">
                  Pages
                </Link>
              </li>
              <li className={`${styles.breadcrumbsItem} breadcrumb-item`}>
                <Link className={styles.linkBread} href="#">
                  About Us
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export { HeroBannerCustom };
