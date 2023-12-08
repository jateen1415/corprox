import Link from "next/link";
import styles from "./style.module.scss";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";

function BusinessApp(props) {
  const countStatus = [
    {
      icon: <FaApple size={32} />,
      countNumber: "Download on the",
      countText: "App Store",
      link:"https://www.apple.com/in/app-store/"
    },
    {
      icon: <FaGooglePlay size={32} />,
      countNumber: "Download on the",
      countText: "Google Play",
      link:"https://play.google.com"
    },
    {
      icon: <FaWindows size={32} />,
      countNumber: "Download on the",
      countText: "Windows",
      link:"https://www.microsoft.com/"
    },
  ];
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-9 col-md-10 col-lg-9">
            <div className={styles.heroText}>
              <h2>Download Apps Managing Business</h2>
              <p className={styles.leadText}>
                Building your Apps helps attract more potential clients. Our
                integrated marketing team will work high-impact convergence.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          {countStatus.map((data, index) => (
            <div key={index} className={styles.downloadBtnWrap}>
              <a href={data.link}>
                <button className={styles.pillBtn}>
                  <div className={styles.counterIcon}>{data.icon}</div>
                  <div className={styles.pillTextGroup}>
                    <span className={`${styles.countNumber} my-2`}>
                      {data.countNumber}
                    </span>
                    <h3 className={styles.countText}>{data.countText}</h3>
                  </div>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { BusinessApp };
