import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Teamdata from "./Apidata/Teamdata";
import Data from "./Apidata/Data";
import Player from "./Player";
import { useNavigate, useLocation } from "react-router-dom";
const Team = ({ searchdata }) => {
  const [IplTeamdata, setIplTeamdata] = useState();
  const [Iplmachedplayer, setIplmachedplayer] = useState();
  const [Addedteamdata, setAddedteamdata] = useState();
  const [Filterdteamdata, setFilterdteamdata] = useState();
  const [map, setMap] = useState(true);
  const [Addbtn, setAddbtn] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let addedteamdata = JSON.parse(localStorage.getItem("Newteamdata"));
    console.log("asdas", addedteamdata);
    setAddedteamdata(addedteamdata);
  }, []);
  const clickTeam = (teamData) => {
    let teamplayermatch = Data?.filter(
      (rr) => rr.playerTeam.toLowerCase() === teamData.teamname.toLowerCase()
    );
    setIplmachedplayer(teamplayermatch);
    setMap(false);
    setAddbtn(false);
  };
  const addteamdata = () => {
    if (Filterdteamdata) {
      return Filterdteamdata;
    } else if (!Filterdteamdata) {
      return Addedteamdata;
    }
  };

  useEffect(() => {
    setIplTeamdata(Teamdata);
  }, []);
  const changeHandler = (val) => {
    let filterteamdata = Addedteamdata?.filter((zz) =>
      zz.teamname.toLowerCase().includes(val.toLowerCase())
    );
    setFilterdteamdata(filterteamdata);
  };
  return (
    <>
      <Navbar changeHandler={changeHandler} />
      {Addbtn ? (
        <button
          type="button"
          class="btn btn-success"
          onClick={() => navigate("/addteam")}
          style={{ marginLeft: "406px",position:"sticky",zIndex:"1",top:"40px" }}
        >
          AddTeam
        </button>
      ) : (
        <p></p>
      )}
      {Addbtn ? (
        <button
          type="button"
          class="btn btn-success"
          onClick={() => navigate("/player")}
          style={{ marginLeft: "461px", marginTop: "1px" ,position:"sticky",zIndex:"1",top:"40px"}}
        >
          AllPlayer
        </button>
      ) : (
        <p></p>
      )}
      {Addbtn ? (
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          style={{ marginLeft: "340px", marginTop: "1px",position:"sticky",zIndex:"1", left:"400px", top:"80px" }}
        >
          LogOut
        </button>
      ) : (
        <p></p>
      )}
      
      {map ? (
        <div
          className="hgg"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: "150px",
          }}
        >
          {addteamdata()?.map((teamData, index) => {
            return (
              <>
                <div
                  class="card mb-3"
                  style={{ width: "500px", height: "500px" }}
                  onClick={() => {
                    clickTeam(teamData);
                  }}
                  key={index}
                >
                  <img
                    src={teamData.img}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "auto", height: "300px" }}
                  />

                  <div class="card-body">
                    <h5 class="card-title">{teamData.teamname}</h5>
                    <p class="card-text">{teamData.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <Player team={true} Iplmachedplayer={Iplmachedplayer} />
      )}
    </>
  );
};
export default Team;
