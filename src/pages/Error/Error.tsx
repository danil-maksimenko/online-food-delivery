import { Link } from "react-router";

export function Error() {
  return (
    <>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      Error
    </>
  );
}
