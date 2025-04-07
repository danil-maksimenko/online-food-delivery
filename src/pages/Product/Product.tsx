import { useLoaderData } from "react-router";
import { ProductInt } from "../../interfaces/product.interface";
import { useEffect, useState } from "react";

export function Product() {
  const data = useLoaderData() as ProductInt;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <>Загружаю...</>;
  }

  return <>Product - {data.name}</>;
}
