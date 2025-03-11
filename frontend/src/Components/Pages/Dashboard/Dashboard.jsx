import React, { useState, useEffect } from 'react';
import axios from 'axios';
import star1 from '../../Assets/star.webp';
import star2 from '../../Assets/2star.webp';
import star3 from '../../Assets/33star.webp';
import star4 from '../../Assets/4star.webp';
import star5 from '../../Assets/Logo.webp';

const Dashboard = () => {
    const [utilisateur, setUtilisateur] = useState([]);
    const [restaurant, setRestaurant] = useState(null);
    const [table, setTable] = useState([]);
    const [adminId, setAdminId] = useState(null);
    const [id, setId] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editNom, setEditNom] = useState('');
    const [editAdresse, setEditAdresse] = useState('');
    const [editTelephone, setEditTelephone] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editEtoile, setEditEtoile] = useState(0);

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

    useEffect(() => {
        const storedAdminId = localStorage.getItem('adminId');
        if (storedAdminId) {
            setAdminId(storedAdminId);
            console.log('ID de l\'administrateur récupéré depuis le localStorage:', storedAdminId);
        } else {
            console.log('Aucun ID d\'administrateur trouvé dans le localStorage');
        }
    }, []);

    useEffect(() => {
        if (adminId) {
            axios.get(`http://localhost:5000/api/utilisateur/${adminId}`)
                .then(response => {
                    setUtilisateur(response.data);
                    console.log('donnée de l utilisateur:', response.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des informations de l utilisateur ', error);
                });
        }
    }, [adminId]);

    useEffect(() => {
        if (adminId) {
            axios.get(`http://localhost:5000/api/restaurants/${adminId}`)
                .then(response => {
                    setRestaurant(response.data);
                    console.log('Données du restaurant:', response.data);
                    setId(response.data.id);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des informations du restaurant', error);
                });
        }
    }, [adminId]);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/tableDuResto/${id}`)
                .then(response => {
                    setTable(response.data);
                    console.log('Données des tables:', response.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des réservations', error);
                });
        }
    }, [id]);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedRestaurant = {
            nom: editNom,
            adresse: editAdresse,
            telephone: editTelephone,
            description: editDescription,
            etoile: editEtoile
        };
        axios.put(`http://localhost:5000/api/Modrestaurant/${restaurant.id}`, updatedRestaurant)
            .then(response => {
                setRestaurant(response.data);
                setEditMode(false);
                console.log('Restaurant mis à jour:', response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour du restaurant', error);
            });
    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
            <div style={{ width: "20%", height: "100vh", position: "fixed", top: "0", left: '0', backgroundColor: "#e9e9e9" }}>
                <div style={{ width: "100%", display: "flex", justifyContent: 'space-around', alignItems: "center" }}>
                    <div style={{ height: "40px", width: "40px", backgroundImage: `url(${star5})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center', borderRadius: '50%' }}>
                    </div>
                    <h2>ReservApp</h2>
                </div>

                {utilisateur.length > 0 ? (
                    utilisateur.map((utilisateur, index) => (
                        <div key={index} style={{ width: "100%", display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                            <h2 style={{padding :  "0", margin  : "0"}}>{utilisateur.nom}</h2>
                            <h3 style={{padding :  "0", margin  : "0"}}>{utilisateur.email}</h3>
                        </div>
                    ))
                ) : (
                    <div style={{ width: "100%", display: "flex", justifyContent: 'space-around', alignItems: "center" }}>
                        <h2>Chargement...</h2>
                    </div>
                )}
            </div>
            <div style={{ width: "80%", position: "relative", left: '20%', backgroundColor: "white", height: "100vh" }}>
                <div style={{ width: "100%", height: "10vh", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                    <h1 style={{ margin: "0", padding: '0' }}>DASHBOARD</h1>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <div style={{ width: "40%", height: "300px", backgroundColor: "#e9e9e9", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        {editMode ? (
                            <form onSubmit={handleEditSubmit} style={{ width: '90%' }}>
                                <div>
                                    <label>Nom :</label>
                                    <input type="text" value={editNom} onChange={(e) => setEditNom(e.target.value)} required />
                                </div>
                                <div>
                                    <label>Adresse :</label>
                                    <input type="text" value={editAdresse} onChange={(e) => setEditAdresse(e.target.value)} required />
                                </div>
                                <div>
                                    <label>Téléphone :</label>
                                    <input type="text" value={editTelephone} onChange={(e) => setEditTelephone(e.target.value)} required />
                                </div>
                                <div>
                                    <label>Description :</label>
                                    <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} required />
                                </div>
                                <div>
                                    <label>Note sur 5 :</label>
                                    <input type="number" value={editEtoile} onChange={(e) => setEditEtoile(Number(e.target.value))} required />
                                </div>
                                <button type="submit">Enregistrer</button>
                                <button type="button" onClick={() => setEditMode(false)}>Annuler</button>
                            </form>
                        ) : (
                            <>
                                <div style={{ height: "30%", width: '90%', backgroundImage: `url(${restaurant ? getStarImage(restaurant.etoile) : ''})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "10px" }}>
                                </div>
                                <div style={{ height: "55%", width: '90%' }}>
                                    <h2 style={{ margin: "0", padding: "0" }}>Restaurant : {restaurant ? restaurant.nom : 'Chargement...'}</h2>
                                    <div>
                                        <span>
                                            {restaurant ? "⭐".repeat(restaurant.etoile) : ''}
                                        </span>
                                    </div>
                                    <h4 style={{ margin: "0", padding: "0" }}>Adresse : {restaurant ? restaurant.adresse : ''}</h4>
                                    <h4 style={{ margin: "0", padding: "0" }}>Contact : {restaurant ? restaurant.telephone : ''}</h4>
                                    <h4 style={{ margin: "0", padding: "0", overflow: "auto", height: "60px" }}>Description : {restaurant ? restaurant.description : ''}</h4>
                                </div>
                                <div>
                                    <button style={{ border: "none", backgroundColor: "blue", padding: "5px", color: "white" }} onClick={() => {
                                        setEditMode(true);
                                        setEditNom(restaurant.nom);
                                        setEditAdresse(restaurant.adresse);
                                        setEditTelephone(restaurant.telephone);
                                        setEditDescription(restaurant.description);
                                        setEditEtoile(restaurant.etoile);
                                    }}>Modifiez</button>
                                </div>
                            </>
                        )}
                    </div>
                    <div style={{ width: "55%", height: "300px", backgroundColor: "white", borderRadius: "10px", display: "flex", justifyContent: 'center', alignItems: "center", overflow: "auto", flexDirection: "column" }}>
                        {table.map((table, index) => (
                            <div key={index} style={{ width: '100%', height: "55px", backgroundColor: "#e9e9e9", borderRadius: "10px", display: "flex", justifyContent: 'space-around', alignItems: "center", marginBottom: "10px" }}>
                                <h2>Table : {table.numero}</h2>
                                <h3>Disponible : {table.disponibilite === 1 ? "OUI" : 'NON'}</h3>
                                <div>
                                    <button type="button">Disponible</button>
                                    <button type="button">Refuser</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;