import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store.js";
import { Provider } from "react-redux";
import DarkModeWrapper from "./Features/uiState/DarkModeWrapper.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <DarkModeWrapper>
          <App />
        </DarkModeWrapper>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
);
