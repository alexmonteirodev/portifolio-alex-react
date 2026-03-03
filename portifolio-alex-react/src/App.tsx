import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SpinUpCase from "./pages/spinup";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spinup" element={<SpinUpCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
