import React, { PropsWithChildren } from "react";
import "./JournalList.css";

interface JournalListChildrenProps extends PropsWithChildren {}

export const JournalList: React.FunctionComponent<JournalListChildrenProps> = ({
  children,
}) => {
  return <div className="joournal-list">{children}</div>;
};
