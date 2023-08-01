import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "/home",
    //     element: <App />,
    //   },
    // ],
  },
]);

export default router;
