import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/pages/website/home/Home";
import DashboardHome from "./components/pages/developer/home/DashboardHome";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="*" element ={<h1>404 - Not Found</h1>}/>
        <Route path="/" element ={<Home/>}/>
        <Route path="/dashboard" element ={<DashboardHome/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
