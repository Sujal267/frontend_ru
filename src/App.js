import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./components/main"
import Dil from "./components/dil"
import Thanks from "./components/thanks"
import Ok from "./components/ok"
import Againsry from "./components/againsry"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
           <Route path="dilse" element={<Dil/>}></Route> 
           <Route path="/thanks" element={<Thanks/>}></Route> 
           <Route path="/ok" element={<Ok/>}></Route> 
           <Route path="/againsry" element={<Againsry/>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
