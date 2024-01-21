import { ChangeEvent } from "react";

import "./App.css";
import { JournalItem } from "./components/JournalItem/JournalItem";
import { CardButton } from "./components/CardButton/CardButton";
import { LeftPanel } from "./Layout/LeftPanel/LeftPanel";
import { Body } from "./Layout/Body/Body";
import { Header } from "./components/Header/Header";
import { JournalList } from "./components/JournalList/JournalList";
import { JournaAddButton } from "./components/JournalAddButton/JournalAddButton";

function App() {
  const data = [
    {
      title: "Подготовка к работе",
      text: "Работа интересна",
      date: new Date(),
    },
    {
      title: "Поход в горы",
      text: "Горные проходы открывают удивительные природные ландшафты",
      date: new Date(),
    },
  ];

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournaAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              date={data[0].date}
              text={data[0].text}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              date={data[1].date}
              text={data[1].text}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <input type="text" onChange={inputChange} />
      </Body>
    </div>
  );
}

export default App;
