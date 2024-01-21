import React, { PropsWithChildren } from "react";
import "./LeftPanel.css";

interface LeftPanelChildrenProps extends PropsWithChildren {}

export const LeftPanel: React.FunctionComponent<LeftPanelChildrenProps> = ({
  children,
}) => {
  return <div className="left-panel">{children}</div>;
};
