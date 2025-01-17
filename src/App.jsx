import { AuthProvider } from "./contexts/authContext";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};
