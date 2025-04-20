import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";
import { AuthContextProvider } from "./Contexts/AuthContext.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
);
