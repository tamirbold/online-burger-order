import React from "react";
import "./style.css";

export const MyCoolButton = (props) => {
  const clickHandler = () => alert(props.comment);

  return (
    <div>
      <span style={css}>
        {props.buttonTitle ? props.buttonTitle : "Default button"}
      </span>{" "}
      <br />
      <input
        className="MyCoolButton"
        type="button"
        onClick={clickHandler}
        value={props.buttonName ? props.buttonName : "Default click"}
      />
    </div>
  );
};

const css = {
  color: "red",
};
