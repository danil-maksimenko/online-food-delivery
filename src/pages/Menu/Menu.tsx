import { Link } from "react-router";

export function Menu() {
  return (
    <>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      Menu
    </>
  );
}
