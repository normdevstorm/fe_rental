import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { ContainerProvider } from "brandi-react";
import "./i18n";
import { container } from "./common/di/container";
const queryClient = new QueryClient();

ReactDOM.hydrateRoot(
  document,
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ContainerProvider container={container}>
        <HydratedRouter />
      </ContainerProvider>
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode>
);
