import { ShopProductComponent } from "./ShopProductComponent";
import { delay } from "../shopHelper";

export async function getProductAsyncAwait(): Promise<ShopProductComponent[]> {
  const rawResult = await fetch("https://dummyjson.com/products?limit=10");

  await delay(750);

  const JSON = await rawResult.json();

  return JSON.products.map((product: ShopProductComponent) => ({
    title: product.title,
    description: product.description,
    price: product.price,
    reviews: product.reviews,
    thumbnail: product.thumbnail
  }));
}
