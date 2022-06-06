import { Route, Routes } from "react-router-dom";
import EditUser from "./edit-User/edit-User";
import Products from "./product-file/product";
import Question from "./question-ask/question-ask";
import Sidebar from "./sidebar";
import Users from "./users/users";


const Contexts=()=>{
    return(
        <Routes>

                <Route path="/" element={<Sidebar/>} />
                <Route path="/product" element={<Products/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/users/edit" element={<EditUser/>}>
                    <Route path=":useId"/>
                </Route>
                <Route path="/question" element={<Question/>} />


        </Routes>
    )
}

export default Contexts;