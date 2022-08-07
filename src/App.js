import React, { useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");

  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <button onClick={onClick}>clcik me</button>
      <h2>{counter}</h2>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
