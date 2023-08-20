import "./App.css";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing";

function App() {
  return (
    <Router>
      <div className='App'>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
