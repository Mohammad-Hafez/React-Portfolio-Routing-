import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contacts/Contact";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Portfolio from "./Components/Portfolio/Portfolio";

// *NOTE - Routers (Paths) That User Mapping In It
const routers = createBrowserRouter([
  {
    path: "",element: <Layout />,
    children: [
      { index : true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
// *NOTE - App Function (Main Function)
export default function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}
