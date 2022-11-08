import { Route, Routes, useNavigate } from "react-router-dom";
import FlowersList from "./components/FlowersList/FlowersList";
import AuthPage from "./Auth/AuthPage/AuthPage";
import TestComponent from "./components/TestComponent/TestComponent";
import LoginForm from "./Auth/AuthPage/LoginSection/LoginForm/LoginForm";
import LoginSection from "./Auth/AuthPage/LoginSection/LoginSection";
import RegistrationSection from "./Auth/AuthPage/RegistrationSection/RegistrationSection";
import PageNotFound from "./PageNotFound";

const AppRoutes = () => {
  // const navigate = useNavigate();

  // const onLoginProcessChange = (state: boolean) => {
  //   rootStore.setShowSpinner(state);
  // };

  // const callbackForLogin = useCallback(
  //   async (loggedUser, error) => {
  //     rootStore.setShowSpinner(true);
  //     try {
  //       navigate("/desktop");
  //     } catch (e) {
  //       if (e) navigate("/error500");
  //     } finally {
  //       rootStore.setShowSpinner(false);
  //     }
  //   },
  //   [navigate, rootStore]
  // );

  return (
    <Routes>
      {/* <Route path="/error500" element={<Error500 />} />
      <Route path="/error_not_responding" element={<ErrorNotResponding />} /> */}
      {/* <Route
        path="/login"
        element={
          <ErrorsBoundary>
            <LoginPage
              onLoginComplete={callbackForLogin}
              onLoginProcessChange={onLoginProcessChange}
              loginUrl={appSettings.urls.login}
              authenticateUrl={appSettings.urls.createToken}
            />
          </ErrorsBoundary>
        }
      /> */}
      <Route
        path="/"
        element={
          // <ErrorsBoundary>
          <TestComponent />
          // </ErrorsBoundary>
        }
      />
      <Route
        path="/flowers"
        element={
          // <ErrorsBoundary>
          <FlowersList />
          // </ErrorsBoundary>
        }
      />
      <Route path="auth" element={<AuthPage />}>
        <Route index element={<LoginSection />} />
        <Route path="login" element={<LoginSection />} />
        <Route path="register" element={<RegistrationSection />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
