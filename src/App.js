import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
import {AuthContextProvider} from "./context/AuthContext"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import MyProfile from "./pages/MyProfile"
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/myprofile' 
                 element= {
                          <ProtectedRoute>
                            <MyProfile/>
                          </ProtectedRoute>
                          }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
