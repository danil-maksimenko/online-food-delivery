import { Outlet } from "react-router";
import styles from "./AuthLayout.module.css";

export function AuthLayout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["logo"]}>
        <img src="/logo.svg" alt="Логотип компании" />
      </div>

      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
