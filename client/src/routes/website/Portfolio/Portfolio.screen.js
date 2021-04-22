import { motion } from "framer-motion";

//Components
import { Header, Footer } from "../../../components";

//Style
import "./style.scss";

//Assets
// @ts-ignore
import CircleShape from "../../../assets/img/circle-shape-primary.png";

const Services = () => {
  const letterVariants = {
    initial: (i) => ({
      x: i * -150,
      opacity: 0,
    }),
    in: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: (i + 1) * 0.2,
      },
    }),
    out: (i) => ({
      x: -150,
      opacity: 0,
      transition: {
        delay: (i + 1) * 0.1,
      },
    }),
  };

  return (
    <div className="portfolio-container">
      <Header />
      <div className="page-container">
        <img className="circle-img" src={CircleShape} alt="" />

        <div className="left-wrapper">
          <div className="our-portfolio-txt">
            {["O", "U", "R"].map((letter, i) => (
              <motion.span
                initial="initial"
                animate="in"
                exit="out"
                variants={letterVariants}
                custom={i}
                transition={{
                  duration: 1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <br />
            {["P", "R", "O", "J", "E", "C", "T", "S"].map((letter, i) => (
              <motion.span
                initial="initial"
                animate="in"
                exit="out"
                variants={letterVariants}
                custom={i}
                transition={{
                  duration: 1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="vertical-content">
            Everything we make must meet our three experience principles: smart,
            simple and human. While these never <span>budge</span>, we are
            proudly flexible in our process; continually adapting our methods to
            meet the specific challenges of each <span>project</span>.
          </div>
        </div>
        <div className="right-wrapper">
          <div className="portfolio-grid">
            <div className="portfolio-box">
              <h1 className="title">Project 01</h1>
            </div>
            <div className="portfolio-box">
              <h1 className="title">Project 02</h1>
            </div>
            <div className="portfolio-box">
              <h1 className="title">Project 03</h1>
            </div>
            <div className="portfolio-box">
              <h1 className="title">Project 04</h1>
            </div>
            <div className="triangle-shape" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
