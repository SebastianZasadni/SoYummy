import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { Header } from "./components/Header/Header";
import { OthersNavigation } from "./components/Navigation/Navigation";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Footer } from "./components/Footer/Footer";
import { ChooseYourBreakfast } from "./components/ChooseYourBreakfast/ChooseYourBreakfast";

function App() {
  return (
    // <Routes>
    //   <Route index path="/" element={<WelcomePage />} />
    //   <Route path="/register" element={<RegisterPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    // </Routes>
    // <Header />
    // <OthersNavigation />
    <SharedLayout/>
    // <Footer />
    // <ChooseYourBreakfast />
  );
}

export default App;
