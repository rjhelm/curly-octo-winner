import React from "react";
import Navbar from "./Navbar";
import styled from 'styled-components';
import home from "../assets/home.jpg";
import me from "../assets/ryanjdev.png";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

const Home = () => {
    return (
        <Section id="home">
            <Navbar />
            <motion.div
                variants={homeAnimation}
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
                className="home"
            >
                <div className="content">
                    <div className="title">
                        <h1>RyanJDev</h1>
                    </div>
                    <div className="subTitle">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </p>
                    </div>
                    <img src={me} alt="" />
                </div>

            </motion.div>
            <motion.div
                className="info"
                variants={homeInfoAnimation}
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
            >
                <div className="grid">
                    <div className="col">
                        <strong>Placeholder</strong>
                        <p>Another Placeholder</p>
                    </div>
                    <div className="col">
                        <strong>Email</strong>
                        <p>ryjhelm@gmail.com</p>
                    </div>
                    <div className="col">
                        <strong>Nope</strong>
                        <p>Placeholder</p>
                    </div>
                    <div className="col">
                        <strong></strong>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="col">
                        <strong>Web Developer</strong>
                        <p>Full Stack</p>
                        <p>MERN Stack and more</p>
                    </div>
                </div>
            </motion.div>
        </Section>
    )
}

export default Home;