import { Route, Routes } from "react-router-dom";
import Products from "./product-file/product";
import Question from "./question-ask/question-ask";
import Sidebar from "./sidebar";
import Users from "./users/users";


const Contexts=()=>{
    return(
        <Routes>

                <Route path="/sidebar" element={<Sidebar/>} />
                <Route path="/product" element={<Products/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/question" element={<Question/>} />


        </Routes>
    )
}

export default Contexts;