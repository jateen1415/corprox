import styles from "./style.module.scss";
import { FaEye, FaMedal, FaTrophy, FaUserAlt } from "react-icons/fa";

function CompanyStatus({}) {
  const countStatus = [
    {
      icon: <FaUserAlt size={30} />,
      countNumber: "6423",
      countText: "Active users",
    },
    {
      icon: <FaEye size={30} />,
      countNumber: "2400",
      countText: "Global client",
    },
    {
      icon: <FaTrophy size={30} />,
      countNumber: "6432",
      countText: "Win award",
    },
    {
      icon: <FaMedal size={30} />,
      countNumber: "1450",
      countText: "Clients satisfaction",
    },
  ];
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.column}>
          {countStatus.map((data,index) => (
            <div key={index} className={styles.counterCard}>
              <div className={styles.counterIcon}>{data.icon}</div>

              <span className={`${styles.countNumber} my-2`}>
                {data.countNumber}
              </span>
              <h3 className={styles.countText}>{data.countText}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { CompanyStatus };
