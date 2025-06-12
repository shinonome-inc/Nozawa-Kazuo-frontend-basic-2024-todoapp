import React from "react";
import { Alert } from "./index";
import { AlertHandlerProvider } from "../../contexts/alert_handler"

export default {
  title: "Components/Atoms/Alert",
  component: Alert,
};

export const Default = () => (
  <AlertHandlerProvider>
    <Alert />
  </AlertHandlerProvider>
);
