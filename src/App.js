import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => (setKeyword = event.target.value);
  console.log("I run all the time");

  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>Welcome back!!!</h1>
      <button onClick={onClick}>clcik me</button>
      <h2>{counter}</h2>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
