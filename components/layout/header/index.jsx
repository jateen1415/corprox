import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <div className={styles.logo}>
          <Link href="/">
            <ImageCustom src="/Logo.svg" width="49" height="30" alt="Logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>

            <li>
              <Link href="/">Work</Link>
            </li>

            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
