import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";
import SnackbarProvider from "./components/SnackbarProvider"; // Adjust the path if needed

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider>
      <App />
      </SnackbarProvider>
    </Provider>
  </StrictMode>
);
