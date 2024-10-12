import { useState } from "react";
import Button from "./Button.jsx";
import InputBox from "./InputBox.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputBox />

      <Button />
    </>
  );
}

export default App;
