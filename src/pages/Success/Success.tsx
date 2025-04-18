import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import styles from "./Success.module.css";

export function Success() {
  const navigate = useNavigate();

  return (
    <div className={styles["success"]}>
      <img src="/pizza.png" alt="Изображение пиццы" />
      <div className={styles["text"]}>Ваш заказ успешно оформлен!</div>
      <Button
        className={styles["button"]}
        appearance="big"
        onClick={() => navigate("/")}
      >
        Сделать новый
      </Button>
    </div>
  );
}
