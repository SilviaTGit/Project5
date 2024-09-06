import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "/src/pages/Home/Home.jsx";
import About from "/src/pages/About.jsx";
import Apartments from "../pages/Apartments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/apartments",
    element: <Apartments />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
