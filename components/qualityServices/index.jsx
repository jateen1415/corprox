import styles from "./style.module.scss";
import { ImageCustom } from "../ui/imageCustom";

function QualityServices(props) {
  return (
    <div className={styles.serviceList}>
      <div className={styles.serviceBox}>
        <div className={`${styles.serviceImage}`}>
          <ImageCustom src={props.src} width={60} height={60} alt="service" />
        </div>
        <div className={styles.sbTitle}> {props.cardTitle}</div>
        <p className={styles.sbText}>{props.cardText}</p>
      </div>
    </div>
  );
}

export { QualityServices };
