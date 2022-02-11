import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Title } from "./Title";
import { useScroll } from "./useScroll";
import { aboutAnimations } from "../animation";

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
          color: var(--secondary-color);
        }
      }
      &__description {
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
            type: "placeholder",
            text: "lore ipsum",
            image: "https://via.placeholder.com/300x300",
        },
        {
            type: "placeholder",
            text: "lore ipsum",
            image: "https://via.placeholder.com/300x300",
        },
        {
            type: "placeholder",
            text: "lore ipsum",
            image: "https://via.placeholder.com/300x300",
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
                            variants={aboutAnimations}
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