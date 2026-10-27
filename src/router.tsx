import { BrowserRouter, Route, Routes } from "react-router";
import { Frame } from "./ui/frame";
import { Component } from "./ui/Component";

export function Router() {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path={"/component"} element={<Component text={"LABEL"} />} />
          <Route path={"/other"} element={<p>OTHER ROUTE</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
