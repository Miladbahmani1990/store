import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditUser=()=>{
const {useId}=useParams();
const[edit,setEdit]=useState([])


useEffect(() => {
    console.log(useId);
       axios.get(`https://jsonplaceholder.typicode.com/users/${useId}`).then(res=>{
           console.log(res);
            setEdit({
               name:res.data.name,
               username:res.data.username,
               email:res.data.email,
               address:{
                   street:res.data.address.street,
                   city:res.data.address.city,
                   zipcode:res.data.address.zipcode
               }
           })
       })
    }, []);
    return(
        <div style={{ marginTop:"100px"}} >
            <form style={{ marginLeft:"520px"}}>
            <input type="text" value={edit.name} style={{marginTop:"5px" ,width:"300px" ,height:"30px" ,display:"inline-block" ,textAlign:"right"}} placeholder="نام" /> <br/>
            <input type="text" value={edit.username} style={{marginTop:"5px" ,width:"300px" ,height:"30px" ,display:"inline-block" ,textAlign:"right"}} placeholder="نام کاربری" /> <br/>
            <input type="text" value={edit.email} style={{marginTop:"5px" ,width:"300px" ,height:"30px" ,display:"inline-block" ,textAlign:"right"}} placeholder="ایمیل" /> <br/>
            <h2  style={{marginLeft:"250px"}}><label>:آدرس</label></h2><br/>
            <input type="text" value={edit.address.city} style={{marginTop:"5px" ,width:"300px" ,height:"30px" ,display:"inline-block" ,textAlign:"right"}} placeholder="شهر" /> <br/>
            <input type="text" value={edit.address.street} style={{marginTop:"5px" ,width:"300px" ,height:"30px" ,display:"inline-block" ,textAlign:"right"}} placeholder="خیابان" /> <br/>
            <input type="text" value={edit.address.zipcode} style={{marginTop:"5px" ,width:"300px" ,height:"30px" ,display:"inline-block" ,textAlign:"right"}} placeholder="کدپستی" />  
            </form>        
        </div>
    )
}

export default EditUser
