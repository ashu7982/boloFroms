

import { Routes,Route } from "react-router-dom";
import Homepage from "./HomePage";
import Login from "./components/login";
import Important from "./components/main";

export default function Allroutes(){

    return(
            <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/important" element={<Important/>}/>
            </Routes>
    )
}