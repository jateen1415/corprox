"use client";
import React, { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import styles from "./style.module.scss";
import { MeetTeam } from "@/components/aboutUs/meetTeam";
import { HeroBannerCustom } from "@/components/ui/heroBannerCustom";
import { Sidebar } from "@/components/aboutUs/Sidebar";

export default function AboutUs() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header />
      <section>
        <HeroBannerCustom heading="About Us" />
      </section>
      <section className={styles.sectionSpace}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className={styles.sectionHeading}>
                <h2>Meet our lovely team</h2>
                <p>
                  Dynamically pursue reliable convergence rather than 24/7
                  process improvements develop end-to-end customer service.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4 ">
              <MeetTeam
                src="/images/about-profile1.jpeg"
                cardTitle="John Q. Public"
                cardText=" Developer"
                modalTitle="Twitter"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4 ">
              <MeetTeam
                src="/images/about-profile1.jpeg"
                cardTitle="Madurai Mani Iyer"
                cardText="Lead Developer"
                modalTitle="Facebook"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4 ">
              <MeetTeam
                src="/images/about-profile1.jpeg"
                cardTitle="Maria J. Go"
                cardText=" Support Engineer"
                modalTitle="Youtube"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4 ">
              <MeetTeam
                src="/images/about-profile1.jpeg"
                cardTitle="John Q. Public"
                cardText=" Developer"
                modalTitle="Dribble"
              />
            </div>
            <div className="d-flex justify-content-center col-12 col-md-12 col-lg-12 mb-md-4 mb-4 pt-4 ">
              <button
                onClick={() => setShow(true)}
                type="button"
                class="btn btn-outline-secondary"
              >
                Open Form
              </button>
            </div>
            {show && (
              <div class={styles.FormModal}>
                <div class={styles.modalContent}>
                  <span onClick={() => setShow(false)} class={styles.closeIcon}>
                    ×
                  </span>
                  <Sidebar />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
