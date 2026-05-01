import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
    ],
  },
]);
