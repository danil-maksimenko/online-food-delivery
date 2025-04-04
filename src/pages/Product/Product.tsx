import { useLoaderData } from "react-router";
import { ProductInt } from "../../interfaces/product.interface";

export function Product() {
  const data = useLoaderData() as ProductInt;

  return <>Product - {data.name}</>;
}
