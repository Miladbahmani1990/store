import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Products=()=>{

   const navigate=useNavigate()
 

   const[Save1,setSave1]=useState([])
   
       return(
           
           <div>
            <h1 style={{textAlign:"center"}}>محصولات mini-store</h1>
            <div dir="rtl">
              <input type="text" placeholder='جست و جو' value={Save1} onChange={(e)=>setSave1(e.target.value)} style={{height:"25px" , width:"200px" , marginBottom:"10px"}} />
              <button style={{height:"30px" , width:"50px" , marginBottom:"10px" , marginRight:"5px"}} >select</button>
            </div>
            <table>
                <tbody>
                <tr>
                    <th >
                       <img src={require('../pic/mobile.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"50px",marginTop:"80px"  , border:Save1=="موبایل" ? "3px solid blue" : ""}} />
                       <h3 style={{marginLeft:"40px"}} >موبایل</h3>
                    </th>
                    <th>
                        <img src={require('../pic/camera.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="دوربین" ? "3px solid blue" : ""}}/>
                        <h3 style={{marginLeft:"80px"}}>دوربین</h3>
                    </th>
                    <th>
                        <img src={require('../pic/lap-top.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="لپ تاپ" ? "3px solid blue" : ""}}/>
                        <h3 style={{marginLeft:"90px"}}>لپ تاپ</h3>
                    </th>
                    <th>
                         <img src={require('../pic/watch.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="ساعت مچی" ? "3px solid blue" : ""}}/>
                         <h3 style={{marginLeft:"90px"}}>ساعت مچی</h3>
                    </th>
                    <th>
                        <img src={require('../pic/printer.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="پرینتر" ? "3px solid blue" : ""}}/>
                        <h3 style={{marginLeft:"80px"}}>پرینتر</h3>
                    </th>
                </tr>
                <tr>
                    <th>
                        <img src={require('../pic/paly-consols.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="کنسول بازی" ? "3px solid blue" : ""}}/>
                        <h3 style={{marginLeft:"40px"}}>کنسول بازی</h3>
                    </th>
                    <th>
                        <img src={require('../pic/tablet.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="تبلت" ? "3px solid blue" : ""}}/>
                        <h3 style={{marginLeft:"100px"}}>تبلت</h3>
                    </th>
                    <th>
                        <img src={require('../pic/flash.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="فلش" ? "3px solid blue" : ""}}/>
                        <h3 style={{marginLeft:"80px"}}>فلش</h3>
                    </th>
                    <th>
                        <img src={require('../pic/service-internet.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"  , border:Save1=="سرویس اینترنتی" ? "3px solid blue" : ""}}/>
                        <h3 style={{marginLeft:"100px"}}>سرویس اینترنتی</h3>
                    </th>
                    
                </tr>
                </tbody>
            </table>
            <button style={{fontSize:"25px" , color:"red" , marginTop:"15px"}} onClick={()=>navigate(-1)} >بازگشت</button>
        </div>


        
    )
}

export default Products;