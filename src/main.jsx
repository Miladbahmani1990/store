import React from "react";
import { BrowserRouter} from "react-router-dom";
import Contexts from "./context";


const Main = () => {
  return (
    // <div>
    // <div style={{ marginTop: "30px" }}>
    //   <button>ثبت نام</button>
    //   <button style={{ marginLeft: "10px" }}>ورود</button>
    // </div>
    // <h1>Mini-Store</h1>

    // <div style={{ textAlign: "right" }}>
    //   <h2>
    //     <a href="/product">محصولات</a>
    //   </h2>

    //   <h2>
    //     <a href="/users">کاربران</a>
    //   </h2>

    //   <h2>
    //     <a href="/question">سوال و جواب</a>
    //   </h2>
      
    //   <h2>
    //     <a href="/">گالری</a>
    //   </h2>
   <div>
      <BrowserRouter>
        <Contexts/>
      </BrowserRouter>
    </div>
  )
}

export default Main;

