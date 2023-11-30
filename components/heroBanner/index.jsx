import { CounterCard } from "../counterCard";
import styles from "./style.module.scss";

function HeroBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.heroImage}>
        <div className="container">
          <div className={styles.heroText}>
            <h1 className={styles.displayHead}>
              We Are Creative Corporate & Marketing Agency
            </h1>
            <p className={styles.leadText}>
              We offer digital marketing agency. Find here details about our
              company.Completely pontificate methodologies with viral sources
              cross-unit action.
            </p>
            <CounterCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroBanner };
