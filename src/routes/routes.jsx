import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { ListTasks } from "../pages/ListTasks";
import { Register } from "../pages/Register";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<ListTasks />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
