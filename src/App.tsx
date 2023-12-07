import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { refreshUser } from "./redux/auth/operations";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

// import { Header } from "./components/Header/Header";
// import { OthersNavigation } from "./components/Navigation/Navigation";
// import { Search } from "./components/Search/Search";
// import { Footer } from "./components/Footer/Footer";
// import { ChooseYourBreakfast } from "./components/ChooseYourBreakfast/ChooseYourBreakfast";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        index
        path="/welcome"
        element={<RestrictedRoute redirectTo="/" component={<WelcomePage />} />}
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
        }
      />
      <Route
        path="/login"
        element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute redirectTo="/login" component={<SharedLayout />} />
        }
      >
        <Route index path="/" element={<MainPage />} />
      </Route>
    </Routes>
    // <Header />
    // <OthersNavigation />
    // <SharedLayout/>
    // <Search/>
    // <Footer />
    // <ChooseYourBreakfast />
  );
}

export default App;
