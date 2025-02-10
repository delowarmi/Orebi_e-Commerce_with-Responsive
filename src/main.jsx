import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import firebaseConfig from "./firebaseConfig.js";
import { Provider } from "react-redux";
import store from "./store.js";
import { ContextApi } from "./components/ContextApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextApi>
          <App />
        </ContextApi>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
