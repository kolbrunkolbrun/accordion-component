import React from "react";
// import ReactDom from "react-dom";
import Accordion from "./components/Accordion";
import "./styles.css";

function App() {
  return ( 
  <div className="App">
    <Accordion 
      title="Frequently Asked Question1" 
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    />
    <Accordion 
      title="Frequently Asked Question2" 
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    />
    <Accordion 
      title="Frequently Asked Question3" 
      content="
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      "
    />
  </div>
  );
}

export default App;