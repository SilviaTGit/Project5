import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "/src/pages/Home/Home.jsx";
import About from "/src/pages/About.jsx";
import Apartments from "../pages/Apartments";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apartments/:id",
    element: <Apartments />,
    errorElement: <ErrorPage />,
  },
  {path: "*", element: <ErrorPage />},
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
