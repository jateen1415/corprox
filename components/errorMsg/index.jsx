import Link from "next/link";
import styles from "./style.module.scss";

const ErrorMsg = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.heroImage}>
          <div className="container">
            <div className={styles.heroText}>
              <h1 className={styles.displayHead}>404</h1>
              <h2 className={styles.displayHeadTwo}>
                Sorry, something went wrong
              </h2>
              <p className={styles.leadText}>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>

              <div className={styles.homeBtn}>
                <Link href="home">
                  <button type="button" class="btn btn-outline-secondary">
                    Go to Homepage
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorMsg;
