import './App.css';

import Contextstate from './component/context/Contextstate';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Nav/Navbar';
// import Home from './component/Nav/Home';
import Home from './component/context/Home';
import About from './component/Nav/About';
function App() {

  return (
   <>
   <Contextstate>
    <BrowserRouter>
   <Navbar/>

   <Routes>
      
        <Route index element={<Home />} />
      
          <Route path="/about" element={<About text="hello from props" />} />
         
    </Routes>


        </BrowserRouter>

   </Contextstate>
  
   
   </>
  );
}

export default App;
