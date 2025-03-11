import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import imageLogo from "../Assets/Logo.webp"



const Headers = () => {
    let [aset] = useState({ textDecoration : "none", fontWeight : "bold", color : "white"})


    return (
        <header style={{width: "100%",  height : "10vh", position: "fixed", top: '0', display: "flex", justifyContent: "center", alignItems: "center", zIndex : "100", backgroundColor : "rgb(0, 0, 0, 0.5)", backdropFilter : "blur(10px)"}}>
            <nav className="navbar" style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                <div className="logo" style={{display: "flex", justifyContent : "space-around" , alignItems: "center",color: "white", width: "20%", height : "100%"}}>
                    <div style={{borderRadius : "50%", height : "50px", width : "50px", backgroundImage : `url(${imageLogo})`, backgroundSize : "cover", backgroundPosition : "center"}}></div>   
                    <h2> <span style={{color: "red"}}>R</span>eserve<span style={{color: "red"}}>APP</span> </h2>              
                </div>
                <ul className="menu" style={{width: "50%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                    <li style={{ listStyleType : "none", fontSize :"18px"}}><NavLink style={aset} to="/" >Home</NavLink></li>
                    <li style={{ listStyleType : "none", fontSize :"18px"}}><NavLink style={aset} to="/restaurant">restaurant</NavLink></li>
                    <li style={{ listStyleType : "none", fontSize :"18px"}}><a style={aset} href="#services">Services</a></li>
                    <li style={{ listStyleType : "none", fontSize :"18px"}}><a style={aset} href="#contact">Contact</a></li>
                </ul>
                <div style={{ display: 'flex', justifyContent: "space-around", alignItems:  "center", width : '20%', height :" 100%" }}>
                    <NavLink to="/login">
                        <button style={{ width: "40%", height :'60%',   }}>Connexion</button>
                    </NavLink>
                    <NavLink to='/signup'>
                        <button style={{ width: "40%", height : '60%', color: "white", backgroundColor: "red", border : "none", fontWeight :"bold "}}>Inscription</button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Headers;