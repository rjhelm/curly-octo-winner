import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimation } from "../animation";
import loadmore from "../assets/more.png";
import { FaGithubSquare } from "react-icons/fa";

const Section = styled.section`
    min-height: 120vh;
    padding: 2rem 0;
    background-color: var(--secondary-color);
    .background {
        position: relative;
        .design1 {
            position: absolute;
            z-index: 1;
            right: 5%;
            top: 0;
        }
        .design2 {
            position: absolute;
            z-index: 1;
            left: 0;
            top: 30rem;
            height: 40rem;
        }
    }
    .sideTitle {
        z-index: 2;
        h1 {
            color: white;
        }
    }
    .portfolio__title {
        margin: 6rem 15rem;
        p {
            color: var(--tertiary-color);
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
        h2 {
            color: white;
            font-size: 2rem;
        }
    }
    .grid {
        padding: 0 15rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 
            "one one two two"
            "one one three four"
            "five six seven seven"
            "eight six seven seven";
        .grid-box {
            height: 15rem;
            width: 100%;
            background-color: var(--primary-color);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                transition: 0.4s ease-in-out;
                width: 100%;
                height: 100%;
            }
            &:hover {
                img {
                    transform: scale(1.2);
                }
            }
            &:nth-of-type(1) {
                grid-area: one;
                height: 100%;
                background-color: #8860e66a;
                z-index: 10;
            }
            &:nth-of-type(2) {
                z-index: 10;
                grid-area: two;
                background-color: #662d91ca;
            }
            &:nth-of-type(3) {
                grid-area: three;
                ackground-color: #8860e6b0;
            }
            &:nth-of-type(4) {
                grid-area: four;
            }
            &:nth-of-type(5) {
                z-index: 10;
                grid-area: five;
                background-color: #8860e6b0;
            }
            &:nth-of-type(6) {
                grid-area: six;
                height: 100%;
                background-color: #662d91ca;
            }
            &:nth-of-type(7) {
                grid-area: seven;
                background-color: #8860e66a;
                height: 100%;
            }
            &:nth-of-type(8) {
                z-index: 10;
                grid-area: eight;
            }
        }
    }
    .portfolio-more {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 4rem 0;
        span {
            color: white;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .background {
            display: none;
        }
        .portfolio__title { {
            margin: 0;
            padding: 0 2rem;
            text-align: center;
            h2 {
                font-size: 1.5rem;
            }
        }
        .grid {
            padding: 2rem 4rem;
            grid-template-columns: 1fr;
            grid-template-areas:
                "one"
                "two"
                "three"
                "four"
                "five"
                "six"
                "seven"
                "eight"
                "two";
            .grid-box {
                height: 10rem !important;
            }
        }
    }
`;

const Portfolio = () => {
    const [element, controls] = useScroll();
    return (
        <Section id="portfolio" ref={element} >
            <Title value="portfolio" />
            <div className="background">
                {/* design elements not being used but may be implemented at another time */}
            </div>
            <div className="portfolio__title">
                <p>My Work</p>
                <h2>Personal, School, and Work Projects</h2>
                ${'' /* <NavLink to="https://github.com/rjhelm" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare size="2.5rem" />
                </NavLink> */}
            </div>
            <div className="grid">
                <motion.div
                    className="child-one grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        type: "tween",
                        duration: 0.8,
                    }}
                    whileInView={{ opacity: 1 }}
                >

                    <img src="https://github.com/rjhelm/dlrn-app/blob/main/dlrn-frontend/src/assets/images/screenshot.png?raw=true" alt="DLRN ICO" />
                </motion.div>
                <motion.div
                    className="child-two grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >

                    <img src="https://github.com/rjhelm/mtg-social/raw/main/assets/homepage.PNG?raw=true" alt="MTG Social Site" />
                </motion.div>
                <motion.div
                    className="child-three grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <img src="https://github.com/rjhelm/python-newsfeed/blob/main/assets/home.png?raw=true" alt="DiscusionBoard Python app" />
                </motion.div>
                <motion.div
                    className="child-four grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <img src="https://github.com/rjhelm/tech-blog/blob/main/assets/images/tech-blog.PNG?raw=true" alt="Blog App w/ Node | Express" />
                </motion.div>
                <motion.div
                    className="child-five grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <img src="https://github.com/rjhelm/note-taking-app/raw/main/public/assets/images/notes-shot.PNG?raw=true" alt="Note Taking App" />
                </motion.div>
                <motion.div
                    className="child-six grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <img src="https://github.com/rjhelm/weather-dashboard/raw/main/assets/imgs/weather.PNG" alt="Weather App JS | HTML" />
                </motion.div>
                <motion.div
                    className="child-seven grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <img src="https://user-images.githubusercontent.com/77085453/164585920-3b40f8f2-4259-4fd8-9ba2-22e4d25f514f.png" alt="CMS\Blog Python" />
                </motion.div>
                <motion.div
                    className="child-eight grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <img src="https://github.com/rjhelm/pickle-rick/raw/main/ricky-wiki/assets/imgs/homepage.png?raw=true" alt="Rick and Morty Wiki" />
                </motion.div>
                <motion.div
                    className="child-eight grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.03,
                        type: "tween",
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <img src="https://github.com/rjhelm/snek-game/raw/main/assets/images/screenshot.PNG" alt="Snake Game JavaScript" />
                </motion.div>
                <motion.div
                    className="child-eight grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        type: "tween",
                        duration: 0.8,
                    }}
                    whileInView={{ opacity: 1 }}
                >

                    <img src="https://github.com/rjhelm/dlrn-app/blob/main/dlrn-frontend/src/assets/images/screenshot.png?raw=true" alt="DLRN ICO" />
                </motion.div>
                <motion.div
                    className="child-one grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        type: "tween",
                        duration: 0.8,
                    }}
                    whileInView={{ opacity: 1 }}
                >

                    <img src="https://github.com/rjhelm/dlrn-app/blob/main/dlrn-frontend/src/assets/images/screenshot.png?raw=true" alt="DLRN ICO" />
                </motion.div>
                <motion.div
                    className="child-one grid-box"
                    variants={portfolioAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        type: "tween",
                        duration: 0.8,
                    }}
                    whileInView={{ opacity: 1 }}
                >

                    <img src="https://github.com/rjhelm/dlrn-app/blob/main/dlrn-frontend/src/assets/images/screenshot.png?raw=true" alt="DLRN ICO" />
                </motion.div>
            </div>
            <div className="portfolio-more">
                <span>Load More</span>
                <img src={loadmore} alt="Load More" />
            </div>
        </Section>
    );
}

export default Portfolio;