import React from "react";
import { motion } from "framer-motion";
import "./MiniCards.scss";

const MiniCards = ({ question, answer }) => {
  // Variants property needed for the MiniCards Animation.
  // We need to set the Individual Variants so that the cards have their own animation and it's adequate delay

  const MiniCardsVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
  return (
    <motion.details variants={MiniCardsVariants}>
      {/* 
      The Structure of the MiniCards.js is as such (mentioned thru classnames / elements):
          -> details element
            -> summary element
              -> Title of Accordion with a orange circle image
            -> div containing the content of Accordion
      */}
      <summary className="accordion-title">
        <img
          alt="orange-dot"
          className="accordion-icon"
          src="https://img.icons8.com/ios/16/f97514/filled-circle.png"
        />
        {question}
      </summary>
      <div className="accordion-content">{answer}</div>
    </motion.details>
  );
};

export default MiniCards;
