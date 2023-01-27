
import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandPage from "./pages/landingPage/components/landPage";
import Home from './pages/home/components/Home';
import LogIn from "./pages/logIn/components/logIn";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<LandPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/log-in" element={<LogIn/>}/>
      </Routes>

    </div>
  );
}

export default App;


