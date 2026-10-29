import { BrowserRouter, Route, Routes } from "react-router";
import "@mantine/core/styles.css";
import { Frame } from "./frame";
import { Component } from "./component";
import { MantineProvider } from "@mantine/core";
import { ProductExample } from "./product-example/home";

export function AcademyRouter() {
  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route path={"/component"} element={<Component text={"LABEL"} />} />
            <Route path={"/product"} element={<ProductExample />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
