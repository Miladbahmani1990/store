import React from "react";

const Products=()=>{
    return(
        
       <div>
            <h1 style={{textAlign:"center"}}>محصولات mini-store</h1>
            <table>
                <tr>
                    <th >
                       <img src={require('../pic/mobile.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"50px",marginTop:"80px"}} />
                       <h3 style={{marginLeft:"40px"}}>موبایل</h3>
                    </th>
                    <th>
                        <img src={require('../pic/camera.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                        <h3 style={{marginLeft:"80px"}}>دوربین</h3>
                    </th>
                    <th>
                        <img src={require('../pic/lap-top.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                        <h3 style={{marginLeft:"90px"}}>لپ تاپ</h3>
                    </th>
                    <th>
                         <img src={require('../pic/watch.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                         <h3 style={{marginLeft:"90px"}}>ساعت مچی</h3>
                    </th>
                    <th>
                        <img src={require('../pic/printer.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                        <h3 style={{marginLeft:"80px"}}>پرینتر</h3>
                    </th>
                </tr>
                <tr>
                    <th>
                        <img src={require('../pic/paly-consols.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                        <h3 style={{marginLeft:"40px"}}>کنسول بازی</h3>
                    </th>
                    <th>
                        <img src={require('../pic/tablet.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                        <h3 style={{marginLeft:"100px"}}>تبلت</h3>
                    </th>
                    <th>
                        <img src={require('../pic/flash.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                        <h3 style={{marginLeft:"80px"}}>فلش</h3>
                    </th>
                    <th>
                        <img src={require('../pic/service-internet.jpg')} alt="oooops!!!" style={{width:"150px" , hight:"150px",marginLeft:"100px",marginTop:"80px"}}/>
                        <h3 style={{marginLeft:"100px"}}>سرویس اینترنتی</h3>
                    </th>
                    
                </tr>
            </table>
              
        </div>


        
    )
}

export default Products;