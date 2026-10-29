import { createRoot } from "react-dom/client";
import { AcademyRouter } from "./ams-academy/router";
import { ShopRouter } from "./ams-shop-exercise/shopRouter";

createRoot(document.getElementById("root") as HTMLElement).render(
  process.env.APP === "academy" ? <AcademyRouter /> : <ShopRouter />
);
