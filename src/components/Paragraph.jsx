import React from "react";

const Paragraph = (props) => {
  return (
    <p
      className={
        "font-dm text-[16px] hover:text-black hover:font-bold text-navHColor "
      }
    >
      {props.text}
    </p>
  );
};
export default Paragraph;
