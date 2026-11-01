import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LocalData from './pages/LocalData';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: '#222', padding: '15px', textAlign: 'center' }}>
          <Link to="/" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Platos Internacionales</Link>
          <Link to="/local" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Platos Regionales</Link>
          <Link to="/contact" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local" element={<LocalData />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;