import SocialBar from "./SocialBar";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialBar size="s" />
      <p>
        Copyright © {new Date().getFullYear()} <a href=".">Willma</a>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
