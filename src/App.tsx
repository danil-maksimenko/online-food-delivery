import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Route, Routes } from "react-router";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <Button appearance="small" onClick={addCounter}>
        Кнопка
      </Button>
      <Button appearance="big" onClick={addCounter}>
        Кнопка
      </Button>
      <Input placeholder="Email" />
      <div>
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
