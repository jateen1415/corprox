import { ImageCustom } from "../ui/imageCustom";
import styles from "./style.module.scss";

function ProductDesign() {
  const productCard = [
    {
      cardImg: "/Product-design-Icon.svg",
      cardTitle: "Product Design",
      cardText:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },

    {
      cardImg: "/visual-design-Icon.svg",
      cardTitle: "Visual Design",
      cardText:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },

    {
      cardImg: "/art-direction-Icon.svg",
      cardTitle: "Art Direction",
      cardText:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
  ];

  return (
    <div className={styles.planList}>
      {productCard.map((data) => (
        <div key={data} className={styles.planBox}>
          <ImageCustom src={data.cardImg} width="124" height="124" alt="Logo" />
          <div className={styles.sbTitle}> {data.cardTitle}</div>
          <p className={styles.sbText}>{data.cardText}</p>
        </div>
      ))}
    </div>
  );
}

export { ProductDesign };
