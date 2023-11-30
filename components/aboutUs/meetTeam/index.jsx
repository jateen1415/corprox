import { ImageCustom } from "@/components/ui/imageCustom";
import {
  FaDribble as FaDribble,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "./style.module.scss";

function MeetTeam(props) {
  return (
    <div className={styles.profileCard}>
      <div className="card shadow-sm">
        <div className={`${styles.profileImage}`}>
          <ImageCustom src={props.src} width={200} height={200} alt="service" />
        </div>

        <div className={`${styles.profileCardBody} card-body`}>
          <h3 className={styles.sbTitle}> {props.cardTitle}</h3>
          <p className={styles.sbText}>{props.cardText}</p>

          {/* <div className={`${styles.socialLink} mt-4`}>
            <div class={`${styles.iconShape} backgroundTweet`}>
              <FaTwitter />
            </div>
            <div class={`${styles.iconShape} backgroundFacebook`}>
              <FaFacebookF />
            </div>
            <div class={`${styles.iconShape} backgroundYoutube`}>
              <FaYoutube />
            </div>
            <div class={`${styles.iconShape} backgroundDribble`}>
              <FaDribble />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export { MeetTeam };
