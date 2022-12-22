import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage"
import Login from "../Pages/Login"
import LoginError from "../Pages/LoginError"
import Register from "../Pages/Register"
import RegisterSuccess from "../Pages/RegisterSuccess"

const AllRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/registersuccess" element={<RegisterSuccess/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/loginerror" element={<LoginError/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes