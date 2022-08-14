import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
    //이게 cleanup function - > 거의 안씀
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onClick2 = () => setShowing((prev) => !prev);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
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
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      <div>
        <Button text={"Continue"} />
      </div>
    </div>
  );
}

export default App;
