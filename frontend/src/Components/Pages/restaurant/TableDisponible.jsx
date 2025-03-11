import React, { useState, useEffect } from "react";
import axios from "axios";

const TableDisponible = ({ id, close }) => {  
    const [table, setTable] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState("");
    const [heure, setHeure] = useState("");
    const [statut] = useState("En attente");
    const [id_client] = useState(2);
    const [reservation] = useState('Reserver');
    const [reservationstyle] = useState({ padding: "10px", backgroundColor: "green", color: "white", borderRadius: "5px", border: "none" });

    const [idTable, setIdTable] = useState(null);
    const [idRestaurant, setIdRestaurant] = useState(id);
    const [getReservation, setGetReservation] = useState([]);
    const [tableId, setTableId] = useState(null);

    useEffect(() => {
        if (!id) return; 
        axios.get(`http://localhost:5000/api/tableDuResto/${id}`)
            .then((response) => {
                setTable(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        const storedTableId = localStorage.getItem('id_client');
        if (storedTableId) {
            setTableId(storedTableId);
            console.log("l'id de la table recupérer");
        } else {
            console.log("l'id non recupérer");
        }
    }, []);

    useEffect(() => {
        if (tableId) {
            axios.get(`http://localhost:5000/api/reservationByIdTable/${tableId}`)
                .then(response => {
                    setGetReservation(response.data);
                })
                .catch(error => 
                    console.error('Erreur lors de la recupération des info de reservation ', error)
                );
        }
    }, [tableId]);

    const handleclickReserver = (id) => {
        setIdTable(id);
        setShowForm(true);
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        const formdata = { date, heure, statut, id_client, idTable, idRestaurant };
        axios.post(`http://localhost:5000/api/reservation`, formdata)
            .then((response) => {
                console.log(response.data);
                alert("Reservation effectuée avec succès");

                setTable(prevTables => prevTables.map(table => 
                    table.id === idTable ? { ...table, disponibilite: 0 } : table
                ));

                setShowForm(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            zIndex: 1000,
            overflow: "auto"
        }}>
            <h2>Tables disponibles</h2>
            {table.length > 0 ? (
                table.map((t) => (
                    <div key={t.id} style={{ 
                        height: "50px",
                        display: "flex", 
                        justifyContent: "space-around", 
                        alignItems: "center", 
                        width: "80%", 
                        backgroundColor: "#dcdcdc", 
                        padding: "10px", 
                        marginBottom: "10px", 
                        borderRadius: "8px",
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{width: "18%", height: "80%", backgroundColor: 'black', color: "white", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center"}}>Table {t.numero}</h2>
                        <h2 style={{color: "black"}}>Capacité : {t.capacite}</h2>
                        <h2 style={{color: "green"}}>{t.disponibilite === 0 ? `Occupé` : "Disponible"}</h2>
                        {getReservation.map((Reserv) => (
                            <select key={Reserv.id}>
                                <option>{Reserv.heure}, {Reserv.date}</option>
                            </select>
                        ))}
                        <button onClick={() => handleclickReserver(t.id)} style={reservationstyle}>{reservation}</button>
                    </div>
                ))
            ) : (
                <h2>Aucune table disponible</h2>
            )}
            <button onClick={close} style={{ 
                marginTop: "20px", 
                padding: "10px 20px", 
                borderRadius: "5px"
            }}>Annuler</button>
            {showForm && (
                <div style={{
                    width: "30%",
                    maxHeight: "80%",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    zIndex: 1001,
                    color: "black",
                    overflow: "auto",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.5)'
                }}>
                    <h2>Réserver une table</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "10px", width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center"  }}>
                            <label>Date: </label>
                            <input style={{ width: "20%" }}
                                type="date" 
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                required 
                            />
                        </div>
                        <div style={{ marginBottom: "10px", width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <label>Heure: </label>
                            <input style={{ width: "20%" , height: "50px", border: "none"}}
                                type="time" 
                                value={heure} 
                                onChange={(e) => setHeure(e.target.value)} 
                                required 
                            />
                        </div>                        
                        <div style={{ marginBottom: "10px", width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center"  }}>
                            <label>ID restaurant: </label>
                            <input 
                                style={{ width: "50px", height: "50px", border: "none"}}
                                type="number" 
                                value={idRestaurant} 
                                onInput={(e) => setIdRestaurant(idRestaurant)} 
                                required 
                            />
                        </div>
                        <div style={{ marginBottom: "10px", width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center"  }}>
                            <label>ID table: </label>
                            <input 
                                style={{ width: "50px", height: "50px", border: "none"}}
                                type="number" 
                                value={idTable}
                                onInput={(e) => setIdTable(idTable)}
                                required 
                            />
                        </div>

                        <button type="submit" style={{ padding: "10px", backgroundColor: "green", color: "white", borderRadius: "5px", border: "none" }}>Confirmer</button>
                        <button type="button" onClick={() => setShowForm(false)} style={{ padding: "10px", backgroundColor: "red", color: "white", borderRadius: "5px", marginLeft: "10px", border: "none" }}>Annuler</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default TableDisponible;