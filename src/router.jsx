import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/create_account",
      //   element: <CreateAccount />,
      // },
    ],
  },
]);

export default router;
