import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
// import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { Link } from "@mui/material";
import { NavLink ,useNavigate } from "react-router-dom";
import Registration from "./Registration";
const Login = () => {
  useEffect(()=>{
    let rgdata = JSON.parse(localStorage.getItem("rgdata"))
    setRrgdata(rgdata);
     },[])
    const navigate =useNavigate()
    const [Rrgdata,setRrgdata] =  useState();
    const [Email,setEmail] =  useState();
    const [Password,setPassword] =  useState();
    const loginHandler =() =>{
      let Data = {Email,Password}
    let  Rgfilterdata = Rrgdata?.filter((ele)=>(ele.Email === Email))
    // console.log("Rgfilterdata",Rgfilterdata);
    // console.log("dss",Rgfilterdata);
    if(!Rgfilterdata?.length){
      alert("can't login")
      navigate("/registrtion")
    }else{
      localStorage.setItem("token",true);
      alert("welcome to deshboard")
      navigate("/team")  
    }   
  }
     
  
  return (
    <>
      <div className="background">
        <div className="mmm" style={{}}>
        <h3 style={{ textAlign: "center"}}>Sign In</h3>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m:"1px 560px ", width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic"  value={Email} label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m:"25px 560px", width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
         <TextField id="outlined-basic" value={Password} label="Password" type="Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
          </Box>
          <Button variant="contained" style={{margin:"1px 700px"}} onClick={()=>loginHandler()}>Sign In</Button> 
          <NavLink to="/registrtion" style={{margin:"1px 640px"}}>Don't have an account?Sign Up</NavLink>  
          
      </div>
      </div>    

    </>
  );
};

export default Login;
