"use client";
import React, { useState } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineDribbble } from "react-icons/ai";
import styles from "./style.module.scss";

function MeetTeam(props) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.profileCard}>
      <div className="card shadow-sm">
        <div className={`${styles.profileImage}`}>
          <ImageCustom  src={props.src} width={200} height={200} alt="service" />
        </div>

        <div className={`${styles.profileCardBody} card-body`}>
          <h3 className={styles.sbTitle}> {props.cardTitle}</h3>
          <p className={styles.sbText}>{props.cardText}</p>

          <div className={`${styles.socialLink}`}>
            <div
              onClick={() => setShow(true)}
              class={`${styles.iconShape} backgroundTweet`}
            >
              <FaTwitter />
            </div>
            <div
              onClick={() => setShow(true)}
              class={`${styles.iconShape} backgroundFacebook`}
            >
              <FaFacebookF />
            </div>
            <div
              onClick={() => setShow(true)}
              class={`${styles.iconShape} backgroundYoutube`}
            >
              <FaYoutube />
            </div>
            <div
              onClick={() => setShow(true)}
              class={`${styles.iconShape} backgroundDribble`}
            >
              <AiOutlineDribbble />
            </div>
          </div>
          {/* modal start */}
          {show && (
            <div class={styles.modal}>
              <div class={styles.modalContent}>
                <span onClick={() => setShow(false)} class={styles.closeIcon}>
                  ×
                </span>
                <h3>{props.modalTitle}</h3>
              </div>
            </div>
          )}
          {/* modal end */}
        </div>
      </div>
    </div>
  );
}

export { MeetTeam };
