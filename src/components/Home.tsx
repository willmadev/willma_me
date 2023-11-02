import styles from "./Home.module.css";
import logo from "../assets/logo.png";
import headshot from "../assets/headshot_1.jpeg";

const Home = () => {
  return (
    <section className={styles.section} id="home">
      <nav className={styles.navBar}>
        <a href="." className={styles.logoContainer}>
          <img src={logo} className={styles.logoImg} />
        </a>
        <a href="#about" className={styles.navItem}>
          About
        </a>
        {/* <a href="#projects" className={styles.navItem}>
          Projects
        </a> */}
      </nav>
      <div className={styles.layoutWrapper}>
        <div className={styles.layout}>
          <div className={styles.titleContainer}>
            <h1>Willma's Here</h1>
            <h3>Student | Developer</h3>
            {/* <a className={styles.cta}>Read my latest project</a> */}
          </div>
          <img src={headshot} className={styles.headshot} />
        </div>
      </div>
    </section>
  );
};

export default Home;
