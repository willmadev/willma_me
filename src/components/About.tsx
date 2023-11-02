import styles from "./About.module.css";
import headshot from "../assets/headshot_2.jpg";
import SocialBar from "./SocialBar";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About Me</h2>
      <div className={styles.layout}>
        <div className={styles.imgWrapper}>
          <img src={headshot} className={styles.headshotImg} />
        </div>
        <div className={styles.textContainer}>
          <h3>Hi! I'm Willma</h3>
          <div className={styles.paragraph}>
            <p>
              I'm a Hong Kong native currently based in Toronto, pursuing a
              Bachelor's degree in Computer Science and Communication, Culture,
              Information, and Technology (CCIT) at the University of Toronto
              Mississauga (UTM). I'm passionate about merging creativity with
              technology, often coding and creating digital projects.
            </p>
            <p>
              With two internships under my belt and a growing portfolio, I'm on
              the lookout for new software engineering intern opportunities.
              I've also crafted several passion projects showcased on this
              website. I'm excited about the potential in the tech industry and
              am open to new collaborations and ideas. Feel free to connect with
              me via social media – I'm always eager to explore new horizons.
            </p>
          </div>
          <SocialBar size="m" />
        </div>
      </div>
    </section>
  );
};

export default About;
