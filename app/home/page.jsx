import React from "react";
import { HeroBanner } from "@/components/heroBanner";
import { HowWork } from "@/components/howWork";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FaBrain, FaBriefcase, FaConfluence } from "react-icons/fa";

import { CompanyStatus } from "@/components/companyStatus";
import { QualityServices } from "@/components/qualityServices";
import { ConsultingAgency } from "@/components/consultingAgency";

import styles from "./style.module.scss";
import { AboutUs } from "@/components/aboutUs";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />

      <section className={styles.sectionSpace}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className={styles.sectionHeading}>
                <h2>How Does it Work?</h2>
                <p>
                  Distinctively grow go forward manufactured products and
                  enthusiastically disseminate outsourcing customer service.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-4 mb-lg-0">
              <HowWork
                className="iconBgPurple"
                cardTitle="Generate Ideas"
                cardText=" Appropriately restore mission-critical strategic theme areas rather than visionary ideas."
                icon={<FaBrain size={35} />}
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-4 mb-lg-0">
              <HowWork
                className="iconBgPurpleDarker"
                cardTitle="Create Design"
                cardText=" Appropriately restore mission-critical strategic theme areas rather than visionary ideas."
                icon={<FaBriefcase size={35} />}
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-4 mb-lg-0">
              <HowWork
                className="iconBgPurpleBlue"
                cardTitle="Launch Project"
                cardText=" Appropriately restore mission-critical strategic theme areas rather than visionary ideas."
                icon={<FaConfluence size={35} />}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.sectionSpace} ${styles.bgSoft}`}>
        <AboutUs />
      </section>
      <section>
        <CompanyStatus />
      </section>

      <section className={styles.sectionSpace}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className={styles.sectionHeading}>
                <h2>Best Quality Services</h2>
                <p>
                  Efficiently aggregate core competencies without maintainable
                  ideas. Dynamically foster tactical solutions without enabled
                  value.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-4 pb-md-4 pb-lg-0 ">
              <QualityServices
                src="/images/planning.svg"
                cardTitle="Financial Planning"
                cardText=" You can never go wrong with our own top-notch dedicated servers loaded"
              />
            </div>
            <div className="col-lg-4 col-md-6 pb-4 pb-md-4 pb-lg-0 ">
              <QualityServices
                src="/images/growth.svg"
                cardTitle="Business Growth"
                cardText=" We can guarantee an excellent experience and loading time for your successful"
              />
            </div>
            <div className="col-lg-4 col-md-6 pb-4 pb-md-4 pb-lg-0 mb-5">
              <QualityServices
                src="/images/saving.svg"
                cardTitle="Saving Strategy"
                cardText=" With full root access you will be able to take full control of your server very easy"
              />
            </div>

            <div className="col-lg-4 col-md-6 pb-4 pb-md-4 pb-lg-0  pb-lg-0">
              <QualityServices
                src="/images/total-market.svg"
                cardTitle="Total Marketing Solutions"
                cardText=" Our VPS hosting plan is fully packed with dedicated IPv6 Internet protocol IP"
              />
            </div>

            <div className="col-lg-4 col-md-6 pb-4 pb-md-4 pb-lg-0  pb-lg-0">
              <QualityServices
                src="/images/total-seo.svg"
                cardTitle="Total SEO Solutions"
                cardText=" If you’re not 100% satisfied with Hostler, we’ll refund your payment no risk"
              />
            </div>
            <div className="col-lg-4 col-md-6 pb-4 pb-md-4 pb-lg-0  pb-lg-0">
              <QualityServices
                src="/images/business.svg"
                cardTitle="Business Security"
                cardText="One of many premium features is a dedicated IP cheapest VPS hosting plan"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ConsultingAgency />
      </section>

      <Footer />
    </div>
  );
}
