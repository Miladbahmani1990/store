import React from "react";
import { Link } from "react-router-dom";

const Sidebar=()=>{
    return(
      <div>
        <div style={{ marginTop: "30px" }}>
          <button>ثبت نام</button>
          <button style={{ marginLeft: "10px" }}>ورود</button>
        </div>
        <h1>Mini-Store</h1>

        <div style={{ textAlign: "right" }}>
          <h2>
            <Link to="/product">محصولات</Link>
       </h2>

          <h2>
            <Link to="/users">کاربران</Link>
       </h2>

          <h2>
            <Link to="/question">سوال و جواب</Link>
       </h2>
          
          <h2>
            <Link to="/">گالری</Link>
       </h2>

        </div>
      </div>
  )
}

export default Sidebar;