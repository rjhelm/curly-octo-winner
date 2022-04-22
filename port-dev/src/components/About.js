import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title  from "./Title";
import { useScroll } from "./useScroll";
import { servicesAnimations } from "../animation";


const Section = styled.section`
    min-height: 100vh;
  .about {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
    &__item {
      padding: 2rem;
      &:nth-of-type(3) {
        background-color: var(--primary-color);
        .about__item__title {
          span {
            color: white;
          }
        }
        .about__item__description {
          color: white;
        }
      }
      &__image {
        margin-bottom: 3rem;
        img {
          width: 450px;
          height: 300px;
        }
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--tertiary-color);
        }
      }
      &__description {
        font-size: 1.2rem;
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .about {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

const About = () => {
    const [element, controls] = useScroll();
    const data = [
        {
            type: "Professional",
            text: "I am a Web Developer, I completed the University of Utah Full Stack Web Development Bootcamp. I am also currently in school studying Computer Science. I am a passionate developer and I love to create beautiful websites and applications. I have been working full time since I was 16 and have alot of valuable experience. I have been in management, IT, sales, and more",
            image: "https://github.com/rjhelm/ryan-port-react/blob/main/src/Assets/certification.png?raw=true",
        },
        {
            type: "Programming/Tools",
            text: "I learned to program using HTML, CSS, JavaScript, React, NodeJS, Express, MySQL, and MongoDB. I have since worked with Python, Java, C++, React Native, .NET, and Apache. I have experience with Git, Heroku, Netifly, and AWS. I use Visual Studio when coding and have used Windows, Linux, and Mac.",
            image: "https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/5fd3903b41d20bd2244ec3fd_programminglanguagesstickers.jpg",
        },
        {
            type: "Personal",
            text: "I love to code in my free time, learning new and interesting things is super exciting to me, I have been learning more about, AI, blockchain, and game development. I have 3 kids that I love to spend time with. I love video games, basketball, reading, music, and more.",
            image: "https://github.com/rjhelm/ryan-port-react/blob/main/src/Assets/ryanjdev.png?raw=true",
        },
    ];
    return (
        <Section id="about" ref={element}>
            <Title value="about" />
            <div className="about">
                {data.map((about, index) => {
                    return (
                        <motion.div
                            className="about__item"
                            key={about.type}
                            variants={servicesAnimations}
                            animate={controls}
                            transition={{
                                delay: 0.3,
                                type: "tween",
                                duration: 0.8,
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <div className="about__item__image">
                                <img src={about.image} alt="aaa" />
                            </div>
                            <div className="about__item__title">
                                <span>0{index + 1}</span>
                                <h2>{about.type}</h2>
                            </div>
                            <p className="about__item__description">{about.text}</p>
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    );
}

export default About;