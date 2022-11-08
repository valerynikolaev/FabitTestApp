import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import TestComponent from "./components/TestComponent/TestComponent";
import AuthPage from "./Auth/AuthPage/AuthPage";
import LoginSection from "./Auth/AuthPage/LoginSection/LoginSection";
import RegistrationSection from "./Auth/AuthPage/RegistrationSection/RegistrationSection";
import PageNotFound from "./PageNotFound";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <TestComponent />
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      {
        path: "login",
        element: <LoginSection />
      },
      {
        path: "register",
        element: <RegistrationSection />
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
