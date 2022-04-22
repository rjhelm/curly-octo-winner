import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithubAlt } from "react-icons/fa";
import { useScroll } from "./useScroll";
import { footerLogoAnimations, footerTextAnimations } from "../animation";
import { motion } from "framer-motion";

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 2.0rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  },
  .footer__logo {
    font-size: 2.0rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Footer = () => {
    const [element, controls] = useScroll();

    return (
        <Foot ref={element}>
            <motion.span
                className="footer__logo"
                animate={controls}
                variants={footerTextAnimations}
                transition={{
                    delay: 0.2,
                    type: "tween",
                    duration: 0.8,
                }}
            >
                RyanJDev
            </motion.span>
            <motion.div
                className="footer__social__icons"
                animate={controls}
                variants={footerLogoAnimations}
                transition={{
                    delay: 0.2,
                    type: "tween",
                    duration: 0.8,
                }}
            >
                <FaLinkedinIn />
                <FaTwitter />
                <FaGithubAlt />
                <FaInstagram />
            </motion.div>
        </Foot>
    )
}

export default Footer;