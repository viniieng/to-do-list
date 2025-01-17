import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { ListTasks } from "../pages/ListTasks";
import { Register } from "../pages/Register";
import { PrivateRoute } from "../auth/PrivateRoutes";
import { AuthProvider } from "../contexts/authContext";

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tasks"
            element={<PrivateRoute component={ListTasks} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
