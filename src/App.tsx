import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
    </>
  );
}

export default App;
