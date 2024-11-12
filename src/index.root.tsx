import "@assets/css/global.css"; // Importing global css
import "@assets/css/fonts.css"; // Importing custom fonts

import AppRoutes from "@routes/routes.app";
import { TrpcProvider } from "./trpc";
import NotificationProvider from "@components/NotificationProvider";
import { BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <TrpcProvider>
      <NotificationProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </NotificationProvider>
    </TrpcProvider>
  );
}
