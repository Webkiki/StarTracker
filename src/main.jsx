import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import StarPage from "./pages/star/StarPage.jsx";
import ConstellationsPage from "./pages/ConstellationsPage.jsx";
import StarPrivatePage from "./pages/star/StarPrivatePage.jsx";
import { Login } from "./pages/Login.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { LoggedIn } from "./components/LoggedIn.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ConstellationPrivatePage from "./pages/constellations/ConstellationPrivatePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/starpage",
    element: <StarPage />,
  },

  {
    path: "/constellations",
    element: <ConstellationsPage />,
  },

  {
    path: "/starprivate",
    element: (
      <ProtectedRoute>
        <StarPrivatePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <LoggedIn>
        <Login />
      </LoggedIn>
    ),
  },
  {
    path: "/constellationprivate",
    element: (
      <ProtectedRoute>
        <ConstellationPrivatePage />
      </ProtectedRoute>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
