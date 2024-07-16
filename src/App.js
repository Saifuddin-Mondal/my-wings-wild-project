import {Route,Routes} from "react-router-dom"
import './App.css';
import Home from "../src/Component/Pages/Home1"
import Contact from "../src/Component/Pages/Contact"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
