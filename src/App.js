import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Connect from './Connect';
import Layout from './Layout';

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route element = {<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/connect" element={<Connect />} />  
          </Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
