import './App.scss';
import Home from './Pages/Home/index';
import About from './Pages/About/index';
import AirBnb from './Pages/Airbnb/airbnb'
import Error from './Pages/ErrorPage/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<AirBnb />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
