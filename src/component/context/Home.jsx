// import React from 'react'
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Nav/Navbar";
import Card from "./Card";
import Carousal from "./Screen/Carousal";
import Footer from "./Screen/Footer";
const Home = () => {
    const [data_val, set_data_val] = useState({});

    useEffect(() => {
    async function add_data(){
        try {
            const server ='http://localhost:5000/api/dummy';
            const response = await fetch(
              server,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                //   "auth-token": localStorage.getItem("token"),
                },
              }
            );
    
            const result = await response.json();
           set_data_val(result)
            console.log(result);
    
          }
          catch(e){
            console.log(e);
          }
        }
    add_data()  
    
    }, [])
    
  return (<>
  
<Navbar/> 
hello this is  my website
<div>
{/* <Carousal/> */}
{/* <Card/>
<Card/>
<Card/> */}
 </div>
   </>)
}

export default Home