// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout";
import Home from "../src/components/pages/HomePage";
import Login from "../src/components/pages/authLogin";
import Register from "../src/components/pages/authRegister";
import Verification from "../src/components/pages/authVerifyEmail";
import Completed from '../src/components/Completed'
import Pending from "./components/Pending";
import Overdue from "./components/Overdue";

function NotFound() {
  return <div className="m-6">404 — Page not found</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-email/:verificationToken" element={<Verification />} />
        <Route path="completed" element={<Completed />} />
        <Route path="pending" element={<Pending />} />
        <Route path="overdue" element={<Overdue />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
