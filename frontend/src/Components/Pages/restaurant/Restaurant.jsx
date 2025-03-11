import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableDisponible from './TableDisponible';
import style from "./Restaurant.module.css";

import star1 from '../../Assets/star.webp';
import star2 from '../../Assets/2star.webp';
import star3 from '../../Assets/33star.webp';
import star4 from '../../Assets/4star.webp';
import star5 from '../../Assets/Logo.webp';
import background from "../../Assets/backgroundFont.jpg"









const Restaurant = () => {  
    const [restaurant, setRestaurant] = useState([]);
    const [details, setDetails] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const [styleFrontEvent, setStyleFrontEvent] = useState({ width: '100%' });
    const [restoplace/* , setRestoplace */] = useState({ width: '32%', height: '100vh', transition: 'all 0.5s ease-in-out', position: 'fixed', right: '40px', bottom: '0', });
    const [restoListPlace, setRestoListPlace] = useState({ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', width: '100%', marginTop: '12vh' });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/restaurantList/`)
            .then((response) => {
                setRestaurant(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleClickTable = (id) => {
        setSelectedId(id);  
        setShowTable(true); 
    };

    const closeTable = () => {
        setShowTable(false);
    };

    const handleClick = (id) => {
        axios.get(`http://localhost:5000/api/restaurant/${id}`)
            .then((response) => {
                setDetails(response.data);
                console.log(response.data);
                setStyleFrontEvent({ width: '100%', display: 'flex', justifyContent: 'space-between' });
                setRestoListPlace({ width: '65%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getStarImage = (etoile) => {
        switch (etoile) {
            case 1:
                return star1;
            case 2:
                return star2;
            case 3:
                return star3;
            case 4:
                return star4;
            case 5:
                return star5;
            default:
                return null;
        }
    };

    const restaurantList = restaurant.map((restaurant) => (
        <div key={restaurant.id} style={{
            backgroundColor: "#999",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "15px",
            textAlign: "center",
            width: "30%",
            height: "40vh",
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.3)'
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: 'center', height: '80%', width: "100%" }}>
                <div style={{ width: "30%", height: "100%", backgroundImage: `url(${getStarImage(restaurant.etoile)})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                </div>
                <div style={{ width: "70%", height: "100%" }}>
                    <p style={{ margin: "0", padding: "0", display: "flex", flexDirection: 'column', justifyContent: "space-between", alignItems: 'center' }}>NOM : {restaurant.nom}</p> 
                    <p style={{ margin: "0", padding: "0", display: "flex", flexDirection: 'column', justifyContent: "space-between", alignItems: 'center' }}>ADRESSE : {restaurant.adresse}</p>
                    <p style={{ margin: "0", padding: "0", display: "flex", flexDirection: 'column', justifyContent: "space-between", alignItems: 'center' }}>Tel : {restaurant.telephone}</p>
                <div>
                    <span>
                        {"⭐".repeat(restaurant.etoile)}
                    </span>
                </div>
                </div>
            </div>

            <section className={style.button}>
                <button onClick={() => handleClickTable(restaurant.id)} style={{ marginRight: "10px", padding: "10px 15px", backgroundColor: "green", border: "none", color :"white" }}>RESERVER</button>
                <button onClick={() => handleClick(restaurant.id)} style={{ padding: "10px 15px", backgroundColor: "white", border: "none" }}>En savoir plus</button>
            </section>
        </div>
    ));

    const detailsList = details.map((details) => (
        <div key={details.id} style={{
            width: '100%',
            height: '79%',
            backgroundColor: "#999",
            color: "black",
            padding: "20px",
            borderRadius: "8px",
            marginTop :'13vh',

        }}>
            <div style={{ height: '150px', width: '100%', overflow: 'hidden', borderRadius: '8px', backgroundImage: `url(${getStarImage(details.etoile)})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            </div><br />
            <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <button onClick={() => handleClickTable(details.id)} style={{ padding: "10px 15px", backgroundColor: "green", color: "white", borderRadius: "5px", border:"none" }}>RESERVER</button>
            </div>
            <div style={{ overflowX: "auto", overflow: "hidden" }}>
                <h1 style={{ padding: "0", margin: "0", textShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)', color : "darkred" }}>{details.nom}</h1>
                <div>{"⭐".repeat(details.etoile)}</div>
                <h3 style={{ fontWeight : "bold" ,padding: "0", margin: "0" }}>{details.adresse}</h3>
                <p style={{ padding: "0", margin: "0", fontWeight : "bold", color : "blue"}}>Tel : {details.telephone}</p><br />
                <h3 style={{ padding: "0", margin: "0"}}>description</h3>
                <p style={{ padding: "0", margin: "0", textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.3)' }}>{details.description}</p>
            </div>
        </div>
    ));

    return (
        <div style={styleFrontEvent}>
            <div style={restoListPlace}>
            <div style={{ height: "50vh", display : "flex", justifyContent : "center", alignItems : "center", width : "100%", /* backgroundColor : "black", */ marginBottom: '3vh',}}>
                <div style={{backgroundImage : `url(${background})`, backgroundRepeat : 'no-repeat', backgroundSize : "cover", backgroundPosition : "center", width : "90%" , height : "95%", display : "flex", justifyContent : "center", alignItems : "center" }}>
                    <h1 style={{color : "white", textShadow: '0 4px 8px rgba(1, 1, 1, 0.5), 0 6px 20px rgba(1, 1, 1, 0.5)' }}>FAITES VOS RESERVATIONS</h1>
                </div>
            </div>
                {restaurantList}
            </div>
            <div style={restoplace}>
                {detailsList}
            </div>
            {showTable && <TableDisponible id={selectedId} close={closeTable} />}
        </div>
    );
}

export default Restaurant;