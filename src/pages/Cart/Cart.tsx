import { useDispatch, useSelector } from "react-redux";
import Headling from "../../components/Headling/Headling";
import { AppDispatch, RootState } from "../../store/store";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { ProductInt } from "../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../helpers/API";
import styles from "./Cart.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { cartActions } from "../../store/cart.slice";

const DELIVERY_PRICE = 169;

export function Cart() {
  const [cartProducts, setCartProducts] = useState<ProductInt[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);
  const jwt = useSelector((s: RootState) => s.user.jwt);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const total = items
    .map((i) => {
      const product = cartProducts.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  const getItem = async (id: number) => {
    const { data } = await axios.get<ProductInt>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCartProducts(res);
  };

  const checkout = async () => {
    await axios.post(
      `${PREFIX}/order`,
      {
        products: items,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispatch(cartActions.clean());
    navigate("/success");
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <>
      <Headling className={styles["headling"]}>Корзина</Headling>
      {items.map((i) => {
        const product = cartProducts.find((p) => p.id === i.id);
        if (!product) {
          return;
        }
        return <CartItem key={product.id} count={i.count} {...product} />;
      })}
      <div className={styles["line"]}>
        <div className={styles["text"]}>Стоимость</div>
        <div className={styles["price"]}>
          {total}&nbsp;
          <span>₽</span>
        </div>
      </div>

      <hr className={styles["hr"]} />

      <div className={styles["line"]}>
        <div className={styles["text"]}>Доставка</div>
        <div className={styles["price"]}>
          {DELIVERY_PRICE}&nbsp;
          <span>₽</span>
        </div>
      </div>

      <hr className={styles["hr"]} />

      <div className={styles["line"]}>
        <div className={styles["text"]}>
          Итого <span className={styles["total-count"]}>({items.length})</span>
        </div>
        <div className={styles["price"]}>
          {total ? total + DELIVERY_PRICE : 0}&nbsp;
          <span>₽</span>
        </div>
      </div>

      <div className={styles["checkout"]}>
        <Button appearance="big" onClick={checkout}>
          Оформить
        </Button>
      </div>
    </>
  );
}
