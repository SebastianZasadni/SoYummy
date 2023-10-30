import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
