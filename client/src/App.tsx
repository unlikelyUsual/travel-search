import "./App.css";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
