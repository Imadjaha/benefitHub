import NavBar from "./components/Navbar";
import Benefits from "./pages/Benefits";
import Partners from "./pages/Partners";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen theme-bg">
      <NavBar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Benefits />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
