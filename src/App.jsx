import "./App.css";
import { JournalItem } from "./components/JournalItem/JournalItem";
import { CardButton } from "./components/CardButton/CardButton";
import { LeftPanel } from "./Layout/LeftPanel/LeftPanel";
import { Body } from "./Layout/Body/Body";
import { Header } from "./components/Header/Header";
import { JournalList } from "./components/JournalList/JournalList";
import { JournaAddButton } from "./components/JournalAddButton/JournalAddButton";
import { JournalForm } from "./components/JournalForm/JournalForm";
import { useState } from "react";

function App() {
  const INITIAL_DATA = [
    {
      id: 1,
      title: "Подготовка к работе",
      text: "Работа интересна",
      date: new Date(),
    },
    {
      id: 2,
      title: "Поход в горы",
      text: "Горные проходы открывают удивительные природные ландшафты",
      date: new Date(),
    },
  ];

  const [items, setItems] = useState(INITIAL_DATA);

  const addJournalItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: Math.max(...(oldItems.map((i) => i.id) + 1)),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournaAddButton />
        <JournalList>
          {items.map((e) => (
            <CardButton key={e.id}>
              <JournalItem title={e.title} date={e.date} text={e.text} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm addJournalItem={addJournalItem} />
      </Body>
    </div>
  );
}

export default App;
