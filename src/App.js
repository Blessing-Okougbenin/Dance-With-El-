
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Button from "./pages/home/components/button";
import Home from './pages/services/components/Home';
import LogIn from "./pages/logIn/components/logIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Button/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/log-in" element={<LogIn/>}/>
      </Routes>

    </div>
  );
}

export default App;


