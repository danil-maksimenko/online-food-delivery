import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
