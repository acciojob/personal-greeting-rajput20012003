import React from "react";
import "./../styles/App.css";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <br />
      <br />
      <input
        type="text"
        id="name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      <p>{inputValue.length > 0 && `Hello ${inputValue}!`}</p>
    </div>
  );
};

export default App;