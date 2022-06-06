import axios from 'axios';
import { useEffect, useState } from 'react';
import style from '../style/style.module.css'
import { MdOutlineEdit} from 'react-icons/md';
import {ImBin} from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate=useNavigate()

  const [saveUser,setSaveuser]=useState([])
  const [Search1,setSearch]=useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
      setSaveuser(res.data)
      setSearch(res.data)
    })
  }, []);

const handleSearch=(e)=>{
  let text=e.target.value
  setSaveuser(Search1.filter(u=>u.name.includes(text.substring(0, 1).toUpperCase())))
}

const handleDelete=(itemId)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`).then(res=>{
    if(res.status==200){
      setSaveuser(saveUser.filter(p=>p.id!=itemId))
    alert("ok")
    }else{
      alert("error")
    }
    })
}

  return (
    <div style={{marginTop:"50px"}}>
      <h1 style={{textAlign:"center"}}>صفحه ی محصولات</h1>
      <div dir="rtl">
      <input type="text" placeholder='جست و جو' onChange={handleSearch} style={{height:"25px"}} />
      </div>
      <br/>      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>نام </th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            
            {/* <th>ادرس</th> */}
          </tr>
        </thead>
        <tbody>
          {saveUser.map(u=>(
        <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username} </td>
            <td>{u.email}</td>
            <td>
              <MdOutlineEdit style={{cursor:"pointer" , marginLeft:"15px" ,color:"green"}} onClick={()=>navigate(`/users/edit/${u.id}`)} />
              <ImBin style={{cursor:"pointer" , color:"red"}} onClick={()=>handleDelete(u.id)}/>
            </td>
            
            {/* <td>{u.}</td> */}
          </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <button style={{fontSize:"25px" , color:"red" , marginTop:"5px"}} onClick={()=>navigate(-1)} >بازگشت</button>
    </div>
  );
};

export default Users;
