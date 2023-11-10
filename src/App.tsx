import { Route, Routes } from "react-router";
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
// import { SharedLayout } from "./components/SharedLayout/SharedLayout";
// import { Footer } from "./components/Footer/Footer";
// import { ChooseYourBreakfast } from "./components/ChooseYourBreakfast/ChooseYourBreakfast";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<WelcomePage />} />
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
        <Route index path="/main" element={<MainPage />} />
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
