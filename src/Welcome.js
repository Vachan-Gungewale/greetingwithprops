import React from "react";

const Welcome = (props) =>{
  return(
    <div>
      <h1>Hey! {props.name.studentName}</h1>
      <h2>{props.name.welcome}</h2>
    </div>
  );
}

export default Welcome;