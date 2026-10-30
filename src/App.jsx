import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Details from "./pages/Details";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
