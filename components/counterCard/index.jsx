import styles from "./style.module.scss";

function CounterCard() {
  return (
    <div className={styles.counterMain}>
      <div className={styles.column}>
        <div className={styles.counterCard}>
          <h3 className={styles.countHead}>100</h3>
          <span className={styles.countText}>Happy Client</span>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.counterCard}>
          <h3 className={styles.countHead}>60</h3>
          <span className={styles.countText}>Win Awards</span>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.counterCard}>
          <h3 className={styles.countHead}>555</h3>
          <span className={styles.countText}>Dedicated Support</span>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.counterCard}>
          <h3 className={styles.countHead}>200</h3>
          <span className={styles.countText}>Client Testimonials</span>
        </div>
      </div>
    </div>
  );
}

export { CounterCard };
