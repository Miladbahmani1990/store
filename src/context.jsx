import { Route, Routes } from "react-router-dom";
import Products from "./product-file/product";


const Contexts=()=>{
    return(
        <Routes>
                <Route path="/product" element={<Products/>} />

        </Routes>
    )
}

export default Contexts;