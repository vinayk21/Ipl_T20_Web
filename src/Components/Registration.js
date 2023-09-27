import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'
const Registration = () => {
  const navigate = useNavigate();
  const [Storagedata, setStoragedata] = useState();
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [MobileNo, setMobileno] = useState();
  const [Password, setPassword] = useState();
  useEffect(()=>{
     let dddd = JSON.parse(localStorage.getItem("rgdata"))
     setStoragedata(dddd)
  },[])
  const submiHandler = () => {
    let Rgdata = { Name, Email, MobileNo, Password };
    console.log(Storagedata);
    
    if (!Storagedata?.length && !Storagedata) {
      localStorage.setItem("rgdata",JSON.stringify([Rgdata]))
      setEmail("");
      setName("");
      setMobileno("");
      setPassword("");
      navigate("/");
    } else {
      localStorage.setItem("rgdata",JSON.stringify([...Storagedata, Rgdata]))
      setEmail("");
      setName("");
      setMobileno("");
      setPassword("");
      navigate("/");
    }
  };;

  return (
    <>
    <div className="rgpage">
      <h3 style={{marginLeft: "700px", color: "blue" }}>
        Registration
      </h3>
    
      <div className="rgmain">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: "1px 560px", width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ margin: "10px 560px" }}
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="MobileNo"
            variant="outlined"
            style={{ margin: "10px 560px" }}
            value={MobileNo}
            onChange={(e) => {
              setMobileno(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ margin: "10px 560px" }}
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            variant="contained"
            style={{ margin: "10px 730px", width: "100px" }}
            onClick={() => submiHandler()}
          >
            Submit
          </Button>
        </Box>
      </div>
      </div>
    </>
  );
};

export default Registration;
