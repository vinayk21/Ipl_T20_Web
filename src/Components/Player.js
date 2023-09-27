import * as React from "react";
import { useState, useEffect } from "react";
import Data from "./Apidata/Data";
import Navbar from "./Navbar";
const Player =({team,Iplmachedplayer,data}) =>{
  const [Searchdata,setSearchdata] =useState();
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    setApidata(Data);
  }, []);

  const searchHandler =() =>{
    if(Searchdata){
      return Searchdata;
    }
    if(Iplmachedplayer){
      return Iplmachedplayer;
    }
    else{
      return Apidata;
    }
  }
  const changeHandler =(vdata) =>{
    let matcheddata = Apidata?.filter((ex)=>(ex.playerName.toLowerCase().includes((vdata).toLowerCase()))) 
      setSearchdata(matcheddata);
  }

   
  return (
    <>
    {!team||!Iplmachedplayer&&<Navbar  changeHandler={changeHandler} searchdata={Searchdata}/>}
     <div className="hello">
      {searchHandler()?.map((ex) => (
            <div className="card" style={{ width: "300px", height: "450px" }}>
              <img src={ex.playerImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ex.playerName}</h5>
                <div
                  className="info"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    gap: "90px",
                    marginTop: "20px",
                  }}
                >
                  <span>{ex.totalMatches}</span>
                  <span>{ex.totalRuns}</span>
                  <span>{ex.totalWickets}</span>
                </div>
                <div
                  className="list"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    gap: "40px",
                    marginTop: "20px",
                  }}
                >
                  <span>Matches</span>
                  <span>Runs</span>
                  <span>wickets</span>
                </div>
              </div>
            </div>
          
          
      ))}
      </div>
    </>
  );
}
export default Player;