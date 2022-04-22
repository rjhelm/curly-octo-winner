import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimations } from "../animation";
import myart from "../assets/myart.png";

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .decoration {
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
  }
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 22rem;
        background-color: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 2rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        span {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .decoration {
      display: none;
    }
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

const Blog = () => {
    const [element, controls] = useScroll();
    const blogsData = [
        {
            title: "React UI Managment Tool",
            type: "Programming",
            description:
                "My thoughts on project that I completed to create a UI Management tool for React Components. This project was interesting and let me dive in to some tools that I hadn't used before. The convenience of reuasable components that can be used across projects made this a very worthwhile project.",
            image: "https://github.com/rjhelm/crispy-system/blob/main/frontend/assets/Screenshot%202022-04-22%20135343.png?raw=true"
        },
        {
            title: "Anime",
            type: "My Interests",
            description:
                "This blog post goes over my favorite anime. I talk about what I like and don't like about some of the most popular anime. I talk about one of my favorite mange, Tokyo Ghoul, and why I feel that the anime should have stayed true to the source material. Included is some personal artwork from Tokyo Ghoul.",
                image: myart
        },
        {
            title: "Python/Django CMS Project",
            type: "Programming",
            description: "I talk about creating a personal CMS and blogging website for myslef using python and Django. The experience while creating the project and the end product that I would like to continue improving and personalizing. I also talk about some of the things I learned about developing with Python along the way and my feeling on Django after using it for the first time in this project",
            image: "https://github.com/rjhelm/py-cms/blob/main/flackoblog/assets/python-blog.png?raw=true"
        },
    ];
    return (
        <Section id='blog' ref={element}>
            <Title value="Blog" />
            <div className="decoration"></div>
            <div className="blogs">
                {blogsData.map(({ title, type, description, image }) => {
                    return (
                        <motion.div
                            className="blog"
                            key={title}
                            variants={blogsAnimations}
                            animate={controls}
                            transition={{
                                delay: 0.3,
                                type: "tween",
                                duration: 0.8,
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <div className="image"  >
                                <img height="300px" width="300px" loading="lazy" src={image} alt="blog posts" />
                            </div>
                            <div className="title">
                                <h3>{title}</h3>
                            </div>
                            <span className="type">{type}</span>
                            <div className="description">
                                <p>{description}</p>
                            </div>
                            <div className="more">
                                <img src={" "} alt="play" />
                                <span>Read more</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    )
}

export default Blog;