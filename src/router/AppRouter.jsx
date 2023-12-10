import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../ui/components/Navbar";

import { Login } from "../auth/pages/Login";
import { DC } from "../heroes/pages/DC";
import { Marvel } from "../heroes/pages/Marvel";

export const AppRouter = () => {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path="marvel" element={<Marvel />} />
              <Route path="dc" element={<DC />} />

              <Route path="login" element={<Login />} />

              <Route path="/" element={<Navigate to="/marvel" />} />
          </Routes>
      </>
  )
}
