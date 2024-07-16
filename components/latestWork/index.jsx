import { ImageCustom } from "../ui/imageCustom";
import styles from "./style.module.scss";

function LatestWork() {
  const workCard = [
    {
      cardImg: "/blood-orange.svg",
      cardTitle: "Project title",
      cardText: "UI, Art direction",
    },

    {
      cardImg: "/abstrack.svg",
      cardTitle: "Project title",
      cardText: "UI, Art direction",
    },

    {
      cardImg: "/d-project.svg",
      cardTitle: "Project title",
      cardText: "UI, Art direction",
    },

    {
      cardImg: "/isaiah-book.svg",
      cardTitle: "Project title",
      cardText: "UI, Art direction",
    },

    {
      cardImg: "/mexico-book.svg",
      cardTitle: "Project title",
      cardText: "UI, Art direction",
    },

    {
      cardImg: "/get-job.svg",
      cardTitle: "Project title",
      cardText: "UI, Art direction",
    },
  ];

  return (
    <div className={styles.workBoxMain}>
      <h2 className={styles.workHeading}>Latest work</h2>
      <div className={styles.workGrid}>
        {workCard.map((data) => (
          <div key={data} className={styles.workBox}>
            <ImageCustom
              src={data.cardImg}
              width="394"
              height="330"
              alt="Logo"
            />
            <div className={styles.sbTitle}> {data.cardTitle}</div>
            <p className={styles.sbText}>{data.cardText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { LatestWork };
