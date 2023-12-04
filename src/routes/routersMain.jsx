import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/loginPage"
import { RegisterPage } from "../pages/registerpage"
import { HomePage } from "../pages/homePage"

export const RouterMain = () =>{
    return(
        <Routes>
           <Route path="/" element={<LoginPage/>}/>
           <Route path="register" element={<RegisterPage/>}/>
           <Route>
            <Route path="homepage" element={<HomePage/>}/>
           </Route>
        </Routes>
    )
}