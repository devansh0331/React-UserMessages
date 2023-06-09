
import './App.css';

import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"
import Home from "./components/home/Home"
import {BrowserRouter as  Router , Routes , Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Router >
    {/* <h1>Hello World</h1> */}
    {/* <Signup/> */}
    <Routes>

      <Route exact path="/" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>

      </Routes>

    </Router>
    </div>
  );
}

export default App;
