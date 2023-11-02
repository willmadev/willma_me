import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from "./SocialBar.module.css";

type IconSize = "s" | "m" | "l";

interface SocialBarProps {
  size: IconSize;
}
const fontSizes = {
  s: "2rem",
  m: "2.5rem",
  l: "3rem",
};

const SocialBar = ({ size }: SocialBarProps) => {
  return (
    <div className={styles.container}>
      <a href="mailto:contact@willma.me">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ fontSize: fontSizes[size] }}
        />
      </a>
      <a
        href="https://linkedin.com/in/willmadev"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ fontSize: fontSizes[size] }}
        />
      </a>
      <a href="https://twitter.com/willmadev" target="_blank" rel="noopener">
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ fontSize: fontSizes[size] }}
        />
      </a>
    </div>
  );
};

export default SocialBar;
