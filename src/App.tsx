import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/index";
import { Register } from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
