"use client";

import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TfiControlForward } from "react-icons/tfi";
import styles from "./style.module.scss";
import { ImageCustom } from "../ui/imageCustom";

function HomeAboutUs({}) {
  return (
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-md-12 col-lg-6 mb-4 mb-md-4 mb-lg-0">
          <div class={styles.aboutImg}>
            <ImageCustom
              src="/about-img.png"
              width="1000"
              height="100"
              alt="about"
            />
          </div>
        </div>
        <div class="col-md-12 col-lg-5">
          <div class={styles.aboutContentRight}>
            <h2 className={styles.aboutHeading}>About Us</h2>
            <p className={styles.aboutText}>
              Credibly grow multifunctional customer service through team driven
              scenarios. Rapidiously disintermediate end-to-end e-business after
              goal-oriented partnerships. Professionally incentivize scalable
              expertise before strategic intellectual.
            </p>
            <div class={styles.featureWrapTab}>
              <Tabs>
                <TabList>
                  <Tab>Our History</Tab>
                  <Tab>Our Mission</Tab>
                  <Tab>Our Vision</Tab>
                </TabList>
              </Tabs>
            </div>

            <div className={styles.techFeatureList}>
              <p className={styles.featureText}>
                Objectively monetize resource sucking testing procedures
                vis-a-vis standards compliant ROI. Proactively disintermediate
                virtual sources before wireless alignments.
              </p>

              <ul class={styles.featureList}>
                <li class="py-1">
                  <span className={styles.featureIcon}>
                    <TfiControlForward size={16} />
                  </span>
                  <strong>Creative</strong> Websites Design
                </li>
                <li class="py-1">
                  <span className={styles.featureIcon}>
                    <TfiControlForward size={16} />
                  </span>
                  <strong>Accounting</strong> Procedures Guidebook
                </li>
                <li class="py-1">
                  <span className={styles.featureIcon}>
                    <TfiControlForward size={16} />
                  </span>
                  <strong>Cost</strong> Accounting Fundamentals
                </li>
                <li class="py-1">
                  <span className={styles.featureIcon}>
                    <TfiControlForward size={16} />
                  </span>
                  <strong>Corporate</strong> Cash Management
                </li>
                <li class="py-1">
                  <span className={styles.featureIcon}>
                    <TfiControlForward size={16} />
                  </span>
                  <strong>SEO</strong> Optimization Services
                </li>
                <li class="py-1">
                  <span className={styles.featureIcon}>
                    <TfiControlForward size={16} />
                  </span>
                  <strong>Company</strong> Brand Solutions
                </li>
                <li class="py-1">
                  <span className={styles.featureIcon}>
                    <TfiControlForward size={16} />
                  </span>
                  <strong>45-Day</strong> Money-Back Guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomeAboutUs };
