import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Import de suas páginas/componentes:
import HomePage from "./pages/HomePage";
import BlogDetailPage from "./pages/BlogDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
