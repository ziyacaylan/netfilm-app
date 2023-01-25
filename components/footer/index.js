import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with Next.js by&nbsp;
      <Link href="https://github.com/ziyacaylan" target="_blank">
        Ziya ÇAYLAN
      </Link>
    </footer>
  );
};
export default Footer;
