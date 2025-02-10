import React from "react";

const PriText = (props) => {
  return <props.as className={props.className}>${props.text}</props.as>;
};

export default PriText;
