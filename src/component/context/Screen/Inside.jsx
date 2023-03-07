import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Nav/Navbar';
import Card from '../Card';
const Inside = () => {

  const [vertical,setvertivcal] = useState([])
  const [useris,setuseris] = useState({fName:""})
    const server ='http://localhost:5000/api';
    const Navigate = useNavigate();

    useEffect(()=>{
        async function get(){
            const response = await fetch(
                `${server}/inside`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                  },
                }
              );
            //  const y = localStorage.getItem("auth-token")
            //  console.log("je");
            //  console.log(y);
               const res = await response.json()
               setvertivcal(res.data)
               setuseris(res.user)
              console.log(res);
        }
        get()  
    },[])
  function handlecourse(e){
     const verticalid = e.target.id; 
     Navigate(`/inside/vertical/${verticalid}/course`)
  }
  return (
    <>
     <Navbar/> 
    <div className='container'>
        {useris.fName}
        {console.log(useris)}
      </div> 
 
{vertical.map((d)=>{
  return(
    <>
    <Card vertical_id={d._id} cardtitle={d.name} carddesc={d.description} onClick={handlecourse}/>
    </>
  )
})}
      {/* {vertical[0].name} */}
    </>
  )
}

export default Inside