export type JournalItemPropsType = {
  title: string;
  date: Date;
  text: string;
};

export type ButtonPropsType = {
  text: string;
  onClick: () => void;
};

export type JournalFormPropsType = {
  addJournalItem: (item: FormDataEntryValue) => void;
};
