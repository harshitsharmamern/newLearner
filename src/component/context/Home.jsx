// import React from 'react'
import React, { useEffect, useState, useRef } from "react";

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
  <div>Home</div>
  <p>
  {/* {data_val[0].fName} <br />
  {data_val[0].hobbie[0].game}
  {data_val[0].hobbie.game}  */}

  {data_val.map((d)=>{
    return(<>
    {d.fName} <br />
    {d.hobbie.map((da)=>{
      return(<>
      {da.game} <br />
      {da.books}
      {da.education}
      </>)
    })}
    
    </>)
  })}

    </p>
  </>
    )
}

export default Home