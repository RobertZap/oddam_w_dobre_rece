import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CreateAccount from "./components/CreateAccount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/create_account", element: <CreateAccount /> },
]);

export default router;
