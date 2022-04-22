import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { contactAnimations } from "../animation";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

const Section = styled.section`
  min-height: 80vh;
  
  .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    &__title {
      margin: 3rem 0 3rem;
      p {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2.5rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 2.0rem;
        }
        p {
          font-size: 1.2rem;
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.23rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          letter-spacing: 0.2rem;
          padding-bottom: 0.7rem;
          font-size: 1.2rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea {
          font-size: 1.2rem;
          width: 100% !important;
          height: 50%;
          resize: none;
        }
        button {
          width: 50%;
          font-size: 1.5rem;
          background-color: transparent;
          border: 0.23rem solid var(--secondary-color);
          height: 3.5rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

const Contact = () => {
    const [element, controls] = useScroll();
    return (
        <Section id="contact" ref={element}>
            <Title value="contact" />
            <motion.div
                className="contact"
                animate={controls}
                variants={contactAnimations}
                transition={{
                    delay: 0.3,
                    type: "tween",
                    duration: 0.8,
                }}
            >
                <div className="contact__title">
                    <p>Get in touch!</p>
                    <h2>Thanks for taking a look!</h2>
                </div>
                <div className="contact__data">
                    <div className="contact__data__description">
                        <h4>Contact me using the form below!</h4>
                        <p>
                            I would love to hear from anyone with questions, critiques, or just to say hi!
                        </p>
                        <p>
                            You can also reach out to me using the social media links found on this page.
                        </p>
                        <div>
                            <p>
                                <strong>Location</strong> Utah, USA
                            </p>
                            <p>
                                <strong>Email:</strong> ryjhelm@gmail.com
                            </p>
                            <p>
                                <strong>Website:</strong> ryjhelm.com
                            </p>
                        </div>
                    </div>
                    <div className="contact__data__form">
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                        <textarea placeholder="message"></textarea>
                        <button>Send Message</button>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}

export default Contact;