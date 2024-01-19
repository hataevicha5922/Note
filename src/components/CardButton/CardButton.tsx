import React, { PropsWithChildren } from "react";
import "./CardButton.css";

interface CardButtonProps extends PropsWithChildren {}

export const CardButton: React.FunctionComponent<CardButtonProps> = ({
  children,
}) => {
  return <button className="card-button">{children}</button>;
};
