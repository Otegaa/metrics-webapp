import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
