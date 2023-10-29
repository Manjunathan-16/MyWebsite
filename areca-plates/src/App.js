import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Register from './Components/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Link to ="/" />
        <Link to ="/AboutUs" />
        <Link to = "/Register" />
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/AboutUs" element ={<AboutUs/>}/>
          <Route path = "/Register" element={<Register/>}/>
        </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
