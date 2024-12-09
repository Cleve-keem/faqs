import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are the chairs assembled?",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur tempora ex minus, optio culpa dicta possimus nostrum voluptate, sapiente doloremque dolores iusto praesentium.",
  },
  {
    title: "Who long to you have to return my chair?",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia assumenda aut quia! Nesciunt ut facere sapiente similique illo molestiae ratione possimus aspernatur placeat, distinctio.",
  },
  {
    title: "Do you ship to countries outside EU?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eum mollitia, accusamus ratione in, officiis quod possimus ad similique fugit harum excepturi",
  },
];

function App() {
  return (
    <div className="app">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return data.map((faq, i) => (
    <AccordionItems
      onOpen={setIsOpen}
      curOpen={curOpen}
      title={faq.title}
      num={i}
      key={i}
    >{faq.message}</AccordionItems>
  ));
}

function AccordionItems({ num, title, onOpen, curOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(num);
  }

  return (
    <div className={`faq ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="faqHeader flex space-between items-center">
        <div className="text flex">
          <div className="num mr">{num <= 9 ? `0${num + 1}` : num}</div>
          <div className="title">{title}</div>
        </div>
        <div className="toggle">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="message">{children}</div>}
    </div>
  );
}

export default App;
