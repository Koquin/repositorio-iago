import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
  return (
    <Router basename="/repositorio-iago">
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/projetos" replace />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contatos" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
