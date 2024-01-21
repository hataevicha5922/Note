import "./JournalAddButton.css";
import { CardButton } from "../CardButton/CardButton";

export const JournaAddButton = () => {
  return (
    <CardButton >
      <div className="journal-add">
      <img src="/public/+.svg" alt="+" className="journal-add-img"/>
      New expirions
      </div>
    </CardButton>
  );
};
