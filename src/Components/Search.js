// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import Data from "./Apidata/Data";
// const Search = () => {
//   const [Searched, setSearcheddata] = useState();
//   let Location = useLocation();
//   const [Allapi, setAllapi] = useState();
  
//     useEffect(()=>{
//     setAllapi(Data);
// },[])
//   useEffect(()=>{
//   let sercheddata = Location.state.matcheddata;
//    console.log("vvv",sercheddata);
//    setSearcheddata(sercheddata);
//   },[])
  
  
//   return (
//     <>
//       <Navbar />
//       {Searched?.map((exx) => {
//         return (
//           <>
//              <div className="maaa">
//               <div className="card" style={{ width: "300px", height: "450px" }}>
//                 <img src={exx.playerImage} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">{exx.playerName}</h5>
//                   <div
//                     className="info"
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "flex-start",
//                       gap: "90px",
//                       marginTop: "20px",
//                     }}
//                   >
//                     <span>{exx.totalMatches}</span>
//                     <span>{exx.totalRuns}</span>
//                     <span>{exx.totalWickets}</span>
//                   </div>
//                   <div
//                     className="list"
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "flex-start",
//                       gap: "40px",
//                       marginTop: "20px",
//                     }}
//                   >
//                     <span>Matches</span>
//                     <span>Runs</span>
//                     <span>wickets</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default Search;
