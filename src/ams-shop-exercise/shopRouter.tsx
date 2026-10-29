import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ShopFrame } from "./shopFrame";
import { ShopHome } from "./shop-exercise/shopHome";
import { CartProvider } from "./shopCartContext";
import { ShopCartList } from "./shop-exercise/shopCartList";

export function ShopRouter() {
  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <CartProvider>
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route path="/" element={<ShopFrame />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path={"/home"} element={<ShopHome />} />
              <Route path={"/shopping-cart"} element={<ShopCartList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </MantineProvider>
  );
}
