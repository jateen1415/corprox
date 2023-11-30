import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.logo}>
            <Link href="/">
              <ImageCustom src="/logo.png" width="150" height="30" alt="Logo" />
            </Link>
          </div>

          <div className={styles.rightMenubar}>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    Home <div className={styles.arrow} />
                  </Link>
                  <div className={styles.subMenu}>
                    <ul>
                      <li>
                        <Link href="/">Home Page 01</Link>
                      </li>
                      <li>
                        <Link href="/">Home Page 02</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/">
                    Pages <div className={styles.arrow} />
                  </Link>
                  <div className={styles.subMenu}>
                    <ul>
                      <li>
                        <Link href="/">Login & Signup</Link>
                      </li>
                      <li>
                        <Link href="/">Utilities </Link>
                      </li>
                      <li>
                        <Link href="/">Team </Link>
                      </li>
                      <li>
                        <Link href="/">Project Details </Link>
                      </li>
                      <li>
                        <Link href="/">Services Details</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/">Service</Link>
                </li>
                <li>
                  <Link href="/">Project</Link>
                </li>
                <li>
                  <Link href="/">
                    Blog <div className={styles.arrow} />
                  </Link>
                  <div className={styles.subMenu}>
                    <ul>
                      <li>
                        <Link href="/">Blog Grid</Link>
                      </li>
                      <li>
                        <Link href="/">Blog No SideBar</Link>
                      </li>
                      <li>
                        <Link href="/">Blog Left SideBar</Link>
                      </li>
                      <li>
                        <Link href="/">Blog Right SideBar</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
