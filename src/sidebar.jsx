import React from "react";

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
            <a href="/product">محصولات</a>
          </h2>

          <h2>
            <a href="/">کاربران</a>
          </h2>

          <h2>
            <a href="/">سوال و جواب</a>
          </h2>
          
          <h2>
            <a href="/">گالری</a>
          </h2>

        </div>
      </div>
  )
}

export default Sidebar;