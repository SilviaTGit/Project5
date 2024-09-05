import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "/src/pages/Home/App.jsx";
import About from "/src/pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
