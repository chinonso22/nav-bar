import react from "react"
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'


import Boostrap from "./Boostrap";
import Home from "./components/Home"
import ContactUs from "./components/ContactUs";
import About from "./components/About"
import PageError from "./components/PageError";
import OurServices from "./components/OurServices"



function App() {
  return (
    <div className="App">
<Boostrap />


<Routes>
 
<Route exact path='/' element={<Home />}></Route>
<Route exact path='/About' element={<About />}></Route>
    <Route exact path='/ContactUs' element={<ContactUs />}></Route>
    <Route exact path='/PageError' element={<OurServices />}></Route>
    <Route path='*' element={<PageError />} />
</Routes>

</div>
);
}

export default App;
