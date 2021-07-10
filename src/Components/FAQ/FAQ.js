import React from "react";
import { FAQdata } from "../../static/data";
import Bot from "../../static/Bot.png";
import MiniCards from "../MiniCards/MiniCards";
import { motion } from "framer-motion";
import "./FAQ.scss";

const FAQ = ({ show }) => {
  // Variants Config for the FAQ Container Animation
  const FAQContainerVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { ease: "linear", delay: 3, duration: 1 },
    },
    closed: {
      y: -30,
      opacity: 0,
    },
  };

  // Variants Config for the FAQ Button Animation
  const FAQButtonVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { ease: "linear", delay: 5, duration: 1 },
    },
    closed: {
      y: -30,
      opacity: 0,
    },
  };

  // Variants Config for the FAQ MiniCards Animation
  const variants = {
    open: {
      transition: { staggerChildren: 0.7, delayChildren: 3 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      variants={FAQContainerVariants}
      animate={show ? "open" : "closed"}
      className="FAQ-Container"
    >
      {/* 
      The Structure of the FAQ.js is as such (mentioned thru classnames / elements):
          -> FAQ-Container 
            -> FAQ-top-Container
              -> Bot icon
            -> FAQ Title
            -> Mini Cards Container
              -> Mini Cards (looped with basic js data)
            -> FAQ button (Start Conversation one)
      */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={show ? "open" : "closed"}
        variants={FAQContainerVariants}
        className="FAQ-top-container"
      >
        <img alt="top-bot" className="FAQ-top-icon" src={Bot} />
      </motion.div>
      <h4 className="FAQ-Title">
        Frequently Asked Questions{" "}
        <img
          alt="questionmark"
          className="FAQ-qtnMark"
          src="https://img.icons8.com/bubbles/32/000000/question-mark.png"
        />
      </h4>
      <motion.div
        variants={variants}
        animate={show ? "open" : "closed"}
        className="accordion"
      >
        {FAQdata.map((each) => (
          <MiniCards
            key={each.question.slice(0, 7)}
            question={each.question}
            answer={each.answer}
          />
        ))}
      </motion.div>
      <motion.button
        variants={FAQButtonVariants}
        initial={{ y: -30, opacity: 0 }}
        animate={show ? "open" : "closed"}
        className="FAQ-btn"
      >
        <img
          alt="chat"
          className="FAQ-btn-img"
          src="https://img.icons8.com/ios/25/000000/message-group.png"
        />
        Start a New Conversation
      </motion.button>
    </motion.div>
  );
};

export default FAQ;
