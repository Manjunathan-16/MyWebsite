import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Link to ="/" />
        <Link to ="/AboutUs" />
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/AboutUs" element ={<AboutUs/>}/>
        </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
