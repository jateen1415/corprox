import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImageCustom } from "@/components/ui/imageCustom";

function Footer() {
  return (
    <footer>
      <div className={styles.footerBg}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-4">
              <Link className="footer-brand mr-lg-5 d-flex" href="index.html">
                <ImageCustom
                  src="/logo.png"
                  width="160"
                  height="35"
                  alt="Logo"
                />
              </Link>
              <p className="my-4">
                Interactively unleash interactive best practices before
                technically sound portals.
              </p>
              <div className={`${styles.btnWrapper} mt-4`}>
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
                  <FaDribbble />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <h5 className="mb-4">Company</h5>
              <ul className={styles.linksVertical}>
                <li>
                  <Link target="_blank" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <h5 className="mb-4">Resources</h5>
              <ul className={styles.linksVertical}>
                <li>
                  <Link target="_blank" href="#">
                    Help
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Events
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Live sessions
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Open sources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2">
              <h5 className="mb-4">Support</h5>
              <ul className={styles.linksVertical}>
                <li>
                  <Link target="_blank" href="#">
                    Help
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Tech Support
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Network Status
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="#">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footerBottomBg} ${styles.borderTop} py-3`}>
        <div className="container">
          <div className="row">
            <div className="col p-3">
              <div className="d-flex text-center justify-content-center align-items-center">
                <p className={`${styles.copyright} pb-0 mb-0`}>
                  Copyrights © 2021. All rights reserved by ThemeTags
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
