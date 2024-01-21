import { FC } from "react";
import "./Button.css";
import { ButtonPropsType } from "../../comman/types";

export const Button: FC<ButtonPropsType> = ({ text, onClick }) => {
  return (
    <button className="button accent" onClick={onClick}>
      {text}
    </button>
  );
};
