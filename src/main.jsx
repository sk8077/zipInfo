import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ZipCodeProvider } from "./context/ZipCodeContext.jsx";
import HomePage from "./components/HomePage.jsx";
import InfoPage from "./components/InfoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/:zipCode",
        element: <InfoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ZipCodeProvider>
    <RouterProvider router={router} />
  </ZipCodeProvider>
);
