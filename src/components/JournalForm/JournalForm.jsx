import { useState } from "react";
import "./JournalForm.css";
import { Button } from "../Button/Button";

export const JournalForm = ({ addJournalItem }) => {
  const [inputData, setInputData] = useState("");

  const inputChange = (e) => {
    setInputData(e.target.value);
  };

  const addJournalIten = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    addJournalItem(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalIten}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" onChange={inputChange} value={inputData} />
      <textarea name="text" id="" cols={30} rows={10}></textarea>
      <Button text="save" onClick={() => console.log("Save")} />
    </form>
  );
};
