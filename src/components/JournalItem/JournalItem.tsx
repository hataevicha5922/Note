import { FC } from "react";
import "./JournalItem.css";
import { JournalItemPropsType } from "../../comman/types";

export const JournalItem: FC<JournalItemPropsType> = ({
  date,
  title,
  text,
}) => {
  const formatedDate = new Intl.DateTimeFormat("ru-Ru").format(date);
  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </>
  );
};
