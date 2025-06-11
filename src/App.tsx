import NavBar from "./components/Navbar";
import Benefits from "./pages/Benefits";
import Partners from "./pages/Partners";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex min-h-screen theme-bg">
      <NavBar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Navigate to="/benefits" replace />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;