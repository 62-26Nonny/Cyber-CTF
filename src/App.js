import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './start';
import First from './first';
import Second from './second';
import Third from './third';
import Fourth from './fourth';
import Fifth from './fifth';
import Sixth from './sixth';
import Seventh from './seventh';
import Eighth from './eighth';
import Ninth from './ninth';
import End from './end';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start></Start>} />
        <Route path="/1" element={<First></First>} />
        <Route path="/on/off" element={<Second></Second>} />
        <Route path="/WTF" element={<Third></Third>} />
        <Route path="/decimal" element={<Fourth></Fourth>} />
        <Route path="/slide" element={<Fifth></Fifth>} />
        <Route path="/combination" element={<Sixth></Sixth>} />
        <Route path="/-" element={<Seventh></Seventh>} />
        <Route path="/assky" element={<Eighth></Eighth>} />
        <Route path="/almost_there" element={<Ninth></Ninth>} />
        <Route path="/END" element={<End></End>} />
      </Routes>
    </Router>

  );
}

export default App;
