import { Route, Routes } from "react-router-dom";
import ChangePassword from "./ChangePassword/ChangePassword";

export function Settings() {
  return (
    <Routes>
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
}
