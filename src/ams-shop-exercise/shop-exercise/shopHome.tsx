import { useEffect, useState } from "react";
import { ShopProductComponent } from "./ShopProductComponent";
import { getProductAsyncAwait } from "./shopService";
import { Center, Container, Loader } from "@mantine/core";

export const ShopHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ShopProductComponent[]>([]);

  async function loadProducts() {
    setIsLoading(true);

    const result = await getProductAsyncAwait();
    console.log(result);
    const productsWithId = result.map((product, index) => ({
      ...product,
      id: index + 1
    }));
    setProducts(productsWithId);

    setIsLoading(false);
  }

  useEffect(() => {
    void loadProducts();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Center style={{ flexDirection: "column" }}>
          {products?.map((product) => (
            <ShopProductComponent
              key={product.id}
              id={product.id}
              title={product?.title}
              description={product?.description}
              price={product?.price}
              reviews={product?.reviews}
              thumbnail={product?.thumbnail}
            ></ShopProductComponent>
          ))}
        </Center>
      )}
    </Container>
  );
};
