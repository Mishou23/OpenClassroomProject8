import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import Card from "./Pages/CardDetails/card";
import Error from "./Pages/ErrorPage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Card />} />
          <Route path="/error" element={<Error /> } />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
