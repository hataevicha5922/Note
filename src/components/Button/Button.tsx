import { useState } from "react";
import "./Button.css";

export const Button = () => {
  const [text, setText] = useState("Save");
  const cliked = () => {
    if (text === "Save") {
      setText("Close");
    } else {
      setText("Save");
    }

    console.log("Hello");
  };
  return (
    <button className="button accent" onClick={cliked}>
      {text}
    </button>
  );
};
