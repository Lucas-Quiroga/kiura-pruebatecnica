import "./App.css";
import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import ProfileUserPage from "./pages/ProfileUserPage";
import ProfileCardsDetail from "./components/ProfileCardsDetail";
import RegisterProfesionalPage from "./pages/RegisterProfesionalPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="/buscar/:id" element={<ProfileCardsDetail />} />
          <Route
            path="/registro-profesional"
            element={<RegisterProfesionalPage />}
          />
          <Route path="/perfil-usuario" element={<ProfileUserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
