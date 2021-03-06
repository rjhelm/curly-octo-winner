import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { skillsBarAnimations } from "../animation";
import { useScroll } from "./useScroll";
// import skills1 from "assets/skills1.png";
// import skills2 from "assets/skills2.png";

const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  background-color: var(--secondary-color);
  .background {
    position: relative;
    .design1 {
      position: absolute;
      right: 0;
      z-index: 1;
    }
    .design2 {
      position: absolute;
      left: 0;
      z-index: 1;
      top: 20rem;
    }
  }
  .sideTitle {
    h1 {
      color: white;
      font-size: 9rem;
      z-index: 2;
    }
  }
  .skills__title {
    padding: 6rem 6rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: #000000;
      text-size: 2rem;
      font-size: 1.3rem;
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .skills {
    display: flex;
    justify-content: center;
    alignItems: center;
    padding: 0 30rem;
    gap: 1rem;
    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &__bar {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: #000000;
            font-size: 1.4rem;
          }
          progress {
            width: 30rem;
            -webkit-appearance: none;
            appearance: none;
            &::-webkit-progress-bar {
              height: 3rem;
              background-color: white;
            }
            &::-webkit-progress-value {
              background-color: var(--tertiary-color);
            }
          }
        }
        h3 {
          transform: rotate(90deg);
          color: white;
          font-size: 2rem;
        }
      }
    }
    &__content {
      p {
        font-size: 1.3rem;
      }
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      color: white;
      z-index: 1;
      .title {
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    overflow-x: hidden;
    padding: 2rem 0;
    .background {
      display: none;
    }
    .skills__title {
      padding: 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .skills {
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__bars {
        padding: 0.2rem;
        gap: 0rem;
        align-items: center;
        justify-content: center;
        &__bar {
          .container {
            gap: 1rem;
            progress {
              width: 12rem;
              height: 0.5rem;
              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3 {
            font-size: 1.3rem;
          }
        }
      }
      &__content {
        padding: 0 2rem;
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

const Skills = () => {
  const [element, controls] = useScroll();
  const skillsData = [
    {
      name: "Javascript",
      amount: 90,
    },
    {
      name: "React",
      amount: 90,
    },
    {
      name: "HTML",
      amount: 90,
    },
    {
      name: "CSS",
      amount: 90,
  },
    {
      name: "NodeJS",
      amount: 80,
    },
    {
      name: "MySQL/MongoDB",
      amount: 80,
    },
    {
      name: "Python",
      amount: 70,
    },
    {
      name: "C#",
      amount: 70,
    },

  ];
  return (
    <Section id="skills" ref={element}>
      <Title value="skills" />
      <div className="background">
        {/* <img src={skills1} alt="skills design" className="design1" />
        <img src={skills2} alt="skills design" className="design2" /> */}
      </div>
      <div className="skills__title">
        <p>Skills</p>
        <h2>My Programming Knowledge</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {skillsData.map(({ name, amount }) => {
            return (
              <motion.div
                className="skills__bars__bar"
                key={name}
                variants={skillsBarAnimations}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="container">
                  <progress value={amount} max="100" />
                  <span>{name}</span>
                </div>
                <h3>{amount}%</h3>
              </motion.div>
            );
          })}
        </div>
        <div className="skills__content">
          <p className="title">
            I am always learning and adding to my programming skills.
          </p>
          <p className="description">
            I learned how to code using Javascript and React so my comfort level with these is higher but its a constant process to stay current. I branched out and have been working to understand Pyton, C#, Java, and PHP. I have been able to expand my knowledge so that I can handle a broad range of work. The most important thing is I love programming and it's exciting to me when I get to pick up something new or something I already have an understanding of.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Skills;