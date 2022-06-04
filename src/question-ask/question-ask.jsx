import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineEdit} from 'react-icons/md';
import {ImBin} from 'react-icons/im';
import {BiSearchAlt} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
const Question=()=>{
    const navigate=useNavigate()
    const [questions,setQuestion]=useState([])
    const [search,setSearch]=useState([])
    const [Uid,setUid]=useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then(res=>{
        setQuestion(res.data)
        setSearch(res.data)
        })
    },[])

    const handleSearch=()=>{
      if (Uid>0) setQuestion(search.filter(z=>z.postId==Uid))
      else setQuestion(search)
      
    }

    useEffect(()=>{

      handleSearch()

    },[Uid])

    return(
        <div>
            <div style={{direction:"rtl"}}>
            <input type="number" placeholder=" جست و جوی آیدی پست" style={{width:"250px" , height:"25px"}} value={Uid} onChange={(e)=>setUid(e.target.value)} />
            <BiSearchAlt style={{fontSize:"30px"}}/>
            <button style={{fontSize:"25px" , color:"red" , marginTop:"15px",marginRight:"900px"}} onClick={()=>navigate(-1)} >بازگشت</button>
            </div>
            <br />
        <table>
        <thead>
          <tr>
            <th>#</th>
            <th>شماره ی پست </th>
            <th>موضوع</th>
            <th>توضیحات</th>
            
            {/* <th>ادرس</th> */}
          </tr>
        </thead>
        <tbody>
          {questions.map(u=>(
        <tr key={u.id}>
            <td>{u.id}</td>
            <td onClick={()=>setUid(u.postId)} value={Uid} style={{cursor:"pointer"}} >{u.postId}</td>
            <td>{u.name} </td>
            <td>{u.body}</td>
            <td>
              <MdOutlineEdit style={{cursor:"pointer" , marginLeft:"15px" ,color:"green"  ,fontSize:"20px"}}/>
              <ImBin style={{cursor:"pointer" , color:"red" ,fontSize:"20px"}}/>
            </td>
            
            {/* <td>{u.}</td> */}
          </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
    } 
export default Question