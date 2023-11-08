import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/HomePage'
import LoginPage from "./pages/Login/LoginPage";
import PatientPage from "./pages/Patient/PatientPage";
import SettingPage from "./pages/Setting/SettingPage";

function App() {
  return (
     <Routes>
       <Route exact path="/" element={<HomePage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/patients" element={<PatientPage/>}/>
       <Route path="/settings" element={<SettingPage/>}/>
     </Routes>     
  );
}

export default App;
