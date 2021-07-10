import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Modal.scss";

const Modal = (props) => {

  // Function to make sure the Modal closes when someone presses the Escape key
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  // Variants parameter for the Text in the header of Modal, to individually apply animations
  const textTagVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  // Variants parameter for the background color change from White to Orange+white mixture
  const variants = {
    open: {
      opacity: 1,
      background: "#f97514",

      transition: { ease: "linear", delay: 0.5 },
    },
    closed: {
      opacity: 0,
      background: "white",
    },
  };
  // Variants to apply on the Container having the tags h2, h3 and p in the Modal Header
  const textVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { ease: "linear", staggerChildren: 0.2, delayChildren: 1 },
    },
    closed: {
      y: -30,
      opacity: 0,
      transition: { staggerChildren: 0.5, staggerDirection: -1 },
    },
  };

  // UseEffect written to make sure the Escape Key function runs everytime
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  // Destructuring the props 
  const { title, children, show } = props;
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={props.onClose}>
      {/* 
      The Structure of the Modal.js is as such (mentioned thru classnames / elements):
          -> modal container
            -> modal content div
              -> div 1 and div 2 set for the background to be set accordingly
              -> modal header class
                -> h2 tag with Title
                -> h3 with some text
                -> 2 p tags for some more text
              -> modal body class
                -> props children will be accomodated
              -> modal footer
                -> close button
      */}      
      <motion.div
        transition={{ staggerChildren: 1, delayChildren: 1 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ opacity: 0 }}
          variants={variants}
          animate={show ? "open" : "closed"}
          className="modal-content-bg1"
        />

        <div className="modal-content-bg2" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? "open" : "closed"}
          variants={textVariants}
          className="modal-header"
        >
          <motion.h2 variants={textTagVariants} className="modal-title">
            {title}
          </motion.h2>
          <motion.h3 variants={textTagVariants}>Hello 👋</motion.h3>
          <motion.p variants={textTagVariants}>
            I am Iris, a Virtual Assistant
          </motion.p>
          <motion.p variants={textTagVariants}>How may I help you?</motion.p>
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", delay: 3, duration: 1 }}
          className="modal-body"
        >
          {children}
        </motion.div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-close-button" />
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
