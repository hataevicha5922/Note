import React, { PropsWithChildren } from "react";
import "./Body.css";

interface BodyChildrenProps extends PropsWithChildren {}

export const Body: React.FunctionComponent<BodyChildrenProps> = ({
  children,
}) => {
  return <div className="body">{children}</div>;
};
