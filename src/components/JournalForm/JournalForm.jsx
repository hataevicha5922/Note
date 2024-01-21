import { useState } from "react";
import "./JournalForm.css";
import { Button } from "../Button/Button";

export const JournalForm = ({ addJournalItem }) => {
  const [inputData, setInputData] = useState("");
  const [formValidState, setFormValidState] = useState({
    title: true,
    post: true,
    date: true,
  });

  const inputChange = (e) => {
    setInputData(e.target.value);
  };

  const addJournalIten = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;

    if (!formProps.title.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.post.trim().length) {
      setFormValidState((state) => ({ ...state, post: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, post: true }));
    }
    if (!formProps.date) {
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, date: true }));
    }
    if (!isFormValid) {
      return;
    }
    addJournalItem(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalIten}>
      <input
        type="text"
        name="title"
        style={{ border: formValidState.title ? null : "1px solid red" }}
      />
      <input
        type="date"
        name="date"
        style={{ border: formValidState.date ? null : "1px solid red" }}
      />
      <input type="text" name="tag" onChange={inputChange} value={inputData} />
      <textarea
        name="post"
        id=""
        cols={30}
        rows={10}
        style={{ border: formValidState.post ? null : "1px solid red" }}
      ></textarea>
      <Button text="save" onClick={() => console.log("Save")} />
    </form>
  );
};
