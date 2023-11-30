import styles from "./style.module.scss";
function HowWork(props) {
  return (
    <div className={styles.planList}>
      <div className={styles.planBox}>
        <div className={`${styles.icons} ${props.className} `}>
          {props.icon}
        </div>
        <div className={styles.sbTitle}> {props.cardTitle}</div>
        <p className={styles.sbText}>{props.cardText}</p>
      </div>
    </div>
  );
}

export { HowWork };
