import "./App.css";
import { useState } from "react";
export default function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const SearchWord = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
    { word: "Props", meaning: "Props are immutable and read-only." },
    {
      word: "Hook",
      meaning:
        "Hooks are functions that let you use state and other React features without writing a class.",
    },
  ];
  const handleSearchWord = () => {
    const result = SearchWord.find(
      (item) => item.word.toLowerCase() === word.toLowerCase(),
    );
    if (result) {
      setMeaning(result.meaning);
    } else {
      setMeaning("word not found in dictionary....");
    }
  };
  return (
    <div>
      <h2>Dictionary App</h2>
      <p>Search word in the dictionary</p>
      <input
        type="text"
        placeholder="Enter the word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSearchWord}>Search</button>
      <p>Definition:{meaning}</p>
    </div>
  );
}
