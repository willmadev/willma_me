import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Projects from "./components/Projects";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <Home />
      <About />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
