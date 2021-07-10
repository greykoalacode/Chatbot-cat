import { useState } from "react";
import "./App.css";
import Bot from "./static/Bot.png";
import FAQ from "./Components/FAQ/FAQ";
import Modal from "./Components/Modal/Modal";

function App() {
  // state is brought here to store the value of Modal being opened or not.
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* 
        The Structure for App.js is as such, explained thru classnames / elements:
        -> head element
          -> To Store Google Fonts preconnect links
        -> button for Bot Modal to Open
        -> ModalComponent 
          -> FAQ component passed as Children so it can print the contents of FAQ
        
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <button onClick={() => setShow(true)} className="bot-btn-container">
        <img alt="bot" src={Bot} />
      </button>
      <Modal onClose={() => setShow(false)} show={show} title="IRIS">
        <FAQ show={show} />
      </Modal>
    </div>
  );
}

export default App;
