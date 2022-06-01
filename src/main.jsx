import React from "react";
import { BrowserRouter} from "react-router-dom";
import Contexts from "./context";
import Sidebar from "./sidebar";


const Main = () => {
  return (
   <div>
      <BrowserRouter>
        <Sidebar/>
        <Contexts/>
      </BrowserRouter>
    </div>
  )
}

export default Main;

