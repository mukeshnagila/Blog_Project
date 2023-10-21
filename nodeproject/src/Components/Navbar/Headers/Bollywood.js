////////////////////// DAta By Using API //////////////////////

import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../ContextStore/ContextStore";
import { NavLink } from "react-router-dom";

const Bollywood = () => {
    const [cdata] = useContext(store);
    // console.log(cdata);
    const [bollywoodData, setBollywoodData] = useState([]);
    const [topBollywoodMainData, setTopBollywoodMainData] = useState([]);
    const [TopBollywoodSmallData, setTopBollywoodSmallData] = useState([]);
    const [South_GossipData, setSouth_GossipData] = useState([]);

    useEffect(() => {
        // This is the API URL
        const apiUrl = "http://localhost:2003/api/data";
        // Fetch data from the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item.category === "Bollywood");
                setBollywoodData(filteredData);

                const topBollywoodMainItems = data.filter((item) => item.category === "TopBollywoodMain");
                setTopBollywoodMainData(topBollywoodMainItems);

                const TopBollywoodSmallItems = data.filter((item) => item.category === "TopBollywoodSmall");
                setTopBollywoodSmallData(TopBollywoodSmallItems);

                const South_GossipDataItems = data.filter((item) => item.category === "South_Gossip");
                setSouth_GossipData(South_GossipDataItems);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []); 

    var num = 0;
    var num2 = 0;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="startslider">
                <div className="container">
                    <div className="box1">
                        <h1 className="theh1"> Bollywood </h1>
                        {bollywoodData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="inlinediv">
                                        <div className="forimg">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <img className="img" src={item.image} alt="bollywood img"></img>
                                            </NavLink>
                                        </div>
                                        <div className="forcontent">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <h2 className="name">{item.name}</h2>
                                            </NavLink>
                                            <p className="description">{item.description ? item.description.slice(0, 250) : ""}......</p>
                                            <h3 className="category">{item.category} : </h3>
                                            <p className="date">{item.date}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}

                    </div>
                    <div className="box2">
                    <h1 className="theh1"> Top_Posts </h1><br/>
                                <div className="toppost">
                                {topBollywoodMainData.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                                <div className="TopContainer">
                                                    <div className="TCpart1">
                                                        <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                            <h2 className="Topname">{item.name}</h2>
                                                        </NavLink>
                                                        <h3 className="category">TopBollywood : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                    <div className="TCpart2">
                                                        <p className="TCpart2p">{num = num + 1}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div><br/><hr/>
                                    {TopBollywoodSmallData.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <div className="smalltopblog">
                                                    <div className="smalltopimg">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                    </NavLink>    
                                                    </div>
                                                    <div className="smalltoptext">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <h2 className="smalltopname">{item.name}</h2>
                                                    </NavLink>    
                                                        <h3 className="category">TopBollywood : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                        <p className="smalltopp">{num = num + 1}</p>
                                                </div><hr/>
                                            </div>
                                        )
                                    })}

                                <div className="foradvertisement">
                                        {cdata.filter((item) => item.category === 'BollyImg1').map((item, index) => {
                                            return(
                                                <p className="advertisementP2" key={index}>
                                                        <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                                </p>
                                            )
                                        })}
                                </div>

                                <h1 className="theh1"> South_Gossip- </h1><br/>
                                {South_GossipData.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <div className="smalltopblog">
                                                    <div className="smalltopimg">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                        </NavLink>    
                                                    </div>
                                                    <div className="smalltoptext">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}><h2 className="smalltopname">{item.name}</h2></NavLink>
                                                        <h3 className="category">TopBollywood : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                        <p className="smalltopp">{num2 = num2 + 1}</p>
                                                </div><hr/>
                                            </div>
                                        )
                                    })}


                                <div className="foradvertisement">
                                        {cdata.filter((item) => item.category === 'BollyImg2').map((item, index) => {
                                            return(
                                                <p className="advertisementP2" key={index}>
                                                        <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                                </p>
                                            )
                                        })}
                                </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bollywood;



////////////////// Data By Using Context Store //////////////////////////


// import React, { useContext } from "react";
// import { store } from "../../../ContextStore/ContextStore";
// import { NavLink } from "react-router-dom";

// const Bollywood = () => {
//     const [cdata] = useContext(store);
//     console.log(cdata);

//     var num = 0;
//     var num2 = 0;

//     const scrollToTop = () => {
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth", 
//         });
//     };

//     return(
//         <>
//             <div className="startslider">
//                 <div className="container">
//                     <div className="box1">
//                         <h1 className="theh1"> Bollywood </h1>
//                             {cdata.filter((item) => item.category === "Bollywood").map((item, index) => {
//                                 return(
//                                     <div key={index}>
//                                                 <div className="inlinediv">
//                                                     <div className="forimg">
//                                                         <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
//                                                             <img className="img" src={item.image} alt="bollywood img"></img>
//                                                         </NavLink>    
//                                                     </div>
//                                                     <div className="forcontent">
//                                                     <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}><h2 className="name">{item.name}</h2></NavLink>
//                                                         <p className="description">{item.description.slice(0, 250)}......</p>
//                                                         <h3 className="category">{item.category} : </h3>
//                                                         <p className="date">{item.date}</p>
//                                                     </div>
//                                                 </div><hr/>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                         <div className="box2">
                                // <h1 className="theh1"> Top_Posts </h1><br/>
                                // <div className="toppost">
                                //     {cdata.filter((item) => item.category === 'TopBollywoodMain').map((item, index) => {
                                //         return(
                                //             <div key={index}>
                                //                 <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                //                 <div className="TopContainer">
                                //                     <div className="TCpart1">
                                //                         <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                //                                 <h2 className="Topname">{item.name}</h2>
                                //                         </NavLink>
                                //                         <h3 className="category">TopBollywood : <span className="date">{item.date}</span></h3>
                                //                     </div>
                                //                     <div className="TCpart2">
                                //                         <p className="TCpart2p">{num = num + 1}</p>
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //         )
                                //     })}
                                // </div><br/><hr/>
                                //     {cdata.filter((item) => item.category === "TopBollywoodSmall").map((item, index) => {
                                //         return(
                                //             <div key={index}>
                                //                 <div className="smalltopblog">
                                //                     <div className="smalltopimg">
                                //                     <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                //                         <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                //                     </NavLink>    
                                //                     </div>
                                //                     <div className="smalltoptext">
                                //                     <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                //                         <h2 className="smalltopname">{item.name}</h2>
                                //                     </NavLink>    
                                //                         <h3 className="category">TopBollywood : <span className="date">{item.date}</span></h3>
                                //                     </div>
                                //                         <p className="smalltopp">{num = num + 1}</p>
                                //                 </div><hr/>
                                //             </div>
                                //         )
                                //     })}

                                // <div className="foradvertisement">
                                //         {cdata.filter((item) => item.category === 'BollyImg1').map((item, index) => {
                                //             return(
                                //                 <p className="advertisementP2" key={index}>
                                //                         <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                //                 </p>
                                //             )
                                //         })}
                                // </div>

                                // <h1 className="theh1"> South_Gossip- </h1><br/>
                                // {cdata.filter((item) => item.category === "South_Gossip").map((item, index) => {
                                //         return(
                                //             <div key={index}>
                                //                 <div className="smalltopblog">
                                //                     <div className="smalltopimg">
                                //                         <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                //                             <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                //                         </NavLink>    
                                //                     </div>
                                //                     <div className="smalltoptext">
                                //                         <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}><h2 className="smalltopname">{item.name}</h2></NavLink>
                                //                         <h3 className="category">TopBollywood : <span className="date">{item.date}</span></h3>
                                //                     </div>
                                //                         <p className="smalltopp">{num2 = num2 + 1}</p>
                                //                 </div><hr/>
                                //             </div>
                                //         )
                                //     })}


                                // <div className="foradvertisement">
                                //         {cdata.filter((item) => item.category === 'BollyImg2').map((item, index) => {
                                //             return(
                                //                 <p className="advertisementP2" key={index}>
                                //                         <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                //                 </p>
                                //             )
                                //         })}
                                // </div>
                                
                                    
//                         </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Bollywood;
