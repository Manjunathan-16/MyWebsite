import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Link to ="/" />
        <Routes>
          <Route path = "/" element ={<Home/>}/>
        </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
