import { ImageCustom } from "../ui/imageCustom";
import styles from "./style.module.scss";

function HeroBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.heroText}>
        <h1 className={styles.displayHead}>Visual Designer</h1>
        <p className={styles.leadText}>
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>

        <button>Contact</button>
      </div>

      <ImageCustom
              src="/banner-image.svg"
              width="480"
              height="360"
              alt="Logo"
            />
    </div>
  );
}

export { HeroBanner };
