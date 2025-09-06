import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import "./i18n";
const queryClient = new QueryClient();

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
            <HydratedRouter/>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
