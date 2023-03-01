import logo from './logo.svg';
import './App.css';
import A from './component/A';
import B from './component/B';
import C from './component/C';
import Contextstate from './component/context/Contextstate';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Nav/Navbar';
import Home from './component/Nav/Home';
import About from './component/Nav/About';
function App() {

  const b1={
       
  }
  // const [on, off] = useState()


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
