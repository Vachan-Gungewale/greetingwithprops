import React from "react";
import "./style.css";
import Welcome from "./Welcome";

export default function App() {
  const greetingMessage = {
      studentName:"Vachan Gungewale",
      welcome:"Welcome to Newton School",
  }
  return (
    <div>
     <Welcome name={greetingMessage}/>
    </div>
  );
}
