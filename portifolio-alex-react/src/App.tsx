import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SpinUpCase from "./pages/spinup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spinup" element={<SpinUpCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
