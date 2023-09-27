import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Teamdata from "./Apidata/Teamdata";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
const Addteam = () => {
    let Navigate = useNavigate();
  const [Teamname, setTeamname] = useState();
  const [TeamDescription, setTeamDescription] = useState();
  const [TeamImageUrl, setTeamImageUrl] = useState();
  const [Oldteamdata, setOldteamdata] = useState();
  const [Newteamdata, setNewteamdata] = useState();
  useEffect(()=>{
    setOldteamdata(Teamdata)
},[])
  const clickHandler =() =>{
     let objteam = {"teamname":Teamname,"img":TeamImageUrl,"description":TeamDescription}
     console.log(objteam);
     setOldteamdata([...Oldteamdata,objteam]);
    localStorage.setItem("Newteamdata",JSON.stringify([...Oldteamdata,objteam]));
    Navigate("/team");
    }
    console.log(Newteamdata);


  
  return (
    <>
      <h3 style={{ textAlign: "center", color: "blue", marginTop: "50px" }}>
        Add-Team
      </h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: "1px 550px ", width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="TeamName"
          variant="outlined"
          value={Teamname}
          onChange={(e)=>{setTeamname(e.target.value)}}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          type="text"
          style={{ marginTop: "20px" }}
          value={TeamDescription}
          onChange={(e)=>{setTeamDescription(e.target.value)}}
        />
        <TextField
          id="outlined-basic"
          label="ImageUrl"
          variant="outlined"
          type="url"
          style={{ marginTop: "20px" }}
          value={TeamImageUrl}
          onChange={(e)=>{setTeamImageUrl(e.target.value)}}
        />
        <button
          type="button"
          class="btn btn-success"
          style={{ margin: "20px 670px", width: "200px" }}
          onClick={()=>clickHandler()}
        >
          Add
        </button>
      </Box>
    </>
  );
};

export default Addteam;
