import { useState } from "react";
import { findLongestWord, countOccurrences, calculateTotalMarks } from "./Ecmascript"; // Import functions
import { Search, addEntry } from "./Ecmascript/Fonction"; // Import search and addEntry functions
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./Components/Hello";
import Form from "./Components/Form";
import { Button } from "react-bootstrap";
//import Form from "./Components/Form";

function App() {
  // const [count, setCount] = useState(0);
  // const [longestWord, setLongestWord] = useState(""); // State for the longest word
  // const [occurrences, setOccurrences] = useState(null); // State for occurrences
  // const [totalMarks, setTotalMarks] = useState(null); // State for total marks
  // const [tab, setTab] = useState([]); // State for the Tab array
  // const [searchId, setSearchId] = useState(""); // State for the search input
  // const [searchResult, setSearchResult] = useState(null); // State for search result

  // // Example words array
  // let wordsArray = ["chat", "éléphant", "lion", "hippopotame"];

  // // Example input array for occurrences
  // const input = [
  //   ["a", "b", "c"],
  //   ["c", "d", "f"],
  //   ["d", "f", "g"],
  // ];

  // // Example students array for marks calculation
  // let students = [
  //   { name: "John", id: 123, marks: 98 },
  //   { name: "Baba", id: 101, marks: 23 },
  //   { name: "John", id: 200, marks: 45 },
  //   { name: "Wick", id: 115, marks: 75 },
  // ];

  // // Handle finding the longest word
  // const handleFindLongestWord = () => {
  //   const result = findLongestWord(wordsArray);
  //   setLongestWord(result);
  // };

  // // Handle counting occurrences
  // const handleCountOccurrences = () => {
  //   const result = countOccurrences(input);
  //   setOccurrences(result);
  // };

  // // Handle calculating total marks
  // const handleCalculateTotalMarks = () => {
  //   const result = calculateTotalMarks(students);
  //   setTotalMarks(result);
  // };

  // // Handle adding a new entry
  // const handleAddEntry = () => {
  //   const newEntry = { name: "Sample", age: 22 };
  //   const updatedEntry = addEntry(tab, newEntry);
  //   setTab([...tab]);
  //   console.log("Added Entry:", updatedEntry);
  // };

  // // Handle searching for an entry
  // const handleSearch = () => {
  //   const result = Search(tab, parseInt(searchId, 10));
  //   setSearchResult(result || "No entry found!");
  // };

  return (
    <>
       {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <button onClick={handleFindLongestWord}>Find Longest Word</button>
      {longestWord && <p>{longestWord}</p>}
      <br />
      <br />

      <button onClick={handleCountOccurrences}>Count Occurrences</button>
      {occurrences && <pre>{JSON.stringify(occurrences, null, 2)}</pre>}
      <br />
      <br />

      <button onClick={handleCalculateTotalMarks}>Calculate Total Marks</button>
      {totalMarks !== null && <p>Total Marks: {totalMarks}</p>}

<br />
<br />

      <button onClick={handleAddEntry}>Add Entry</button>
      <ul>
        {tab.map((item) => (
          <li key={item.ID}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <br />

      <input
        type="number"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          <h3>Search Result:</h3>
          <p>{typeof searchResult === "string" ? searchResult : JSON.stringify(searchResult)}</p>
        </div>
      )}
    */}

    <Hello />
    <Form labelle="firstname" namee="firstname"/>
    <Form labelle="lastname"/>
    <Button />
   </> 
  );
}

export default App;
