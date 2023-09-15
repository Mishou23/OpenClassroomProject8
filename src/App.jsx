import './App.css';
import Home from './Pages/Home/index';
import About from './Pages/About/index';
import CardDetails from './components/Cards/CardsDetails/CardsDetails'
import Error from './Pages/ErrorPage/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<CardDetails />} /> {/* New route for card details */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
