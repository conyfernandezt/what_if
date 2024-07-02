import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Tweets from './components/tweets';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
