import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from "./pages/home";
import Shop from './pages/shop';
import CreateAccount from "./pages/createAccount"
import Login from "./pages/Login"
import  About from './pages/aboutUs'
import Contact from './pages/contact';


function App () {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/createAccount/" element={<CreateAccount/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/aboutUs" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App;