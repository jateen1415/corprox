import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import styles from "./style.module.scss";
import { MeetTeam } from "@/components/aboutUs/meetTeam";

export default function AboutUs() {
  return (
    <div>
      <Header />
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
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4 ">
              <MeetTeam
                src="/images/about-profile1.jpeg"
                cardTitle="Madurai Mani Iyer"
                cardText="Lead Developer"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4 ">
              <MeetTeam
                src="/images/about-profile1.jpeg"
                cardTitle="Maria J. Go"
                cardText=" Support Engineer"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4 ">
              <MeetTeam
                src="/images/about-profile1.jpeg"
                cardTitle="John Q. Public"
                cardText=" Developer"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
