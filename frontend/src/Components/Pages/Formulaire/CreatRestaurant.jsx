import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./CreatRestaurant.module.css";
import axios from 'axios';

const CreatRestaurant = () => {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [description, setDescription] = useState("");
    const [idAdmin, setIdAdmin] = useState(null); // Initialisez à null
    const [image, setImage] = useState(null);
    const [etoile, setEtoile] = useState(0);

    const [newId, setNewId] = useState("");
    const [numero, setNumero] = useState("");
    const [capacite, setCapacite] = useState("");
    const [disponibilite, setDisponibilite] = useState("");

    useEffect(() => {
        // Récupérer l'ID de l'administrateur depuis le localStorage
        const storedAdminId = localStorage.getItem('adminId');
        if (storedAdminId) {
            setIdAdmin(storedAdminId);
        }
    }, []);

    const handleVider = () => {
        setNumero("");
        setCapacite("");
        setDisponibilite("");
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const formData = { numero, capacite, disponibilite, id_restaurant: newId };
        axios.post('http://localhost:5000/api/table', formData)
            .then((response) => { console.log(response.data); 
                if (response.data && response.data.id){
                    localStorage.setItem('id_table', response.data.id)
                }else{
                    console.log("l'id non recupérer")
                }

            })
            .catch((error) => {
                console.error("Erreur lors de la création :", error);
                alert("Une erreur est survenue.");
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nom || !adresse || !telephone || !description || !image || !etoile) {
            alert("Tous les champs sont obligatoires !");
            return;
        }

        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('adresse', adresse);
        formData.append('telephone', telephone);
        formData.append('description', description);
        formData.append('id_admin', idAdmin); // Utilisez l'ID de l'administrateur récupéré
        formData.append('image', image);
        formData.append('etoile', etoile);

        axios.post('http://localhost:5000/api/restaurant', formData)
            .then((response) => {
                console.log(response.data);
                if (response.data && response.data.id) {
                    setNewId(response.data.id);
                    alert("Restaurant créé avec succès !");
                } else {
                    alert("Erreur lors de la création du restaurant. ID non reçu.");
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la création :", error);
                alert("Une erreur est survenue.");
            });
    };

    return (
        <div className={styles.FormRestaurantContainer}>
            <h2>Créer un restaurant</h2>
            <form className={styles.formSR} onSubmit={handleSubmit}>
                <div style={{ width: "100%", height: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "48%" }}>
                        <div className={styles.formGroupR}>
                            <label htmlFor="nom">Nom du restaurant : </label>
                            <input
                                className={styles.inputR}
                                type="text"
                                id="nom"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroupR}>
                            <label htmlFor="adresse">Adresse : </label>
                            <input
                                className={styles.inputR}
                                type="text"
                                id="adresse"
                                value={adresse}
                                onChange={(e) => setAdresse(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroupR}>
                            <label htmlFor="telephone">Numéro de téléphone : </label>
                            <input
                                className={styles.inputR}
                                type="text"
                                id="telephone"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ width: "48%" }}>
                        <div className={styles.formGroupR}>
                            <label htmlFor="description">Description : </label>
                            <h4>Veuillez ne pas écrire trop de texte.</h4>
                            <textarea
                                className={styles.inputR}
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroupR}>
                            <label htmlFor="image">Image : </label>
                            <input
                                className={styles.inputR}
                                type="file"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                        </div>
                        <div className={styles.formGroupR}>
                            <label htmlFor="etoile">Note sur 5 : </label>
                            <input
                                className={styles.inputRT}
                                value={etoile}
                                type="number"
                                id="etoile"
                                onChange={(e) => setEtoile(Number(e.target.value))}
                                required
                            />
                        </div>
{/*                         <div className={styles.formGroupR}>
                            <label htmlFor="idAdmin">idAdmin : </label>
                            <input
                                className={styles.inputR}
                                type="number"
                                id="idAdmin"
                                value={idAdmin}
                                
                                required
                            />
                        </div> */}
                    </div>
                </div>
                <h3>Cliquer sur Créer après avoir rempli les champs précédents le bouton et avant de poursuivre</h3>
                <button className={styles.buttonR} type="submit">Créer</button>
            </form>
            <form action="" onSubmit={handleSubmit2} style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h2>Enregistrer vos tables</h2>
                <div style={{ width: '80%', height: "20vh", display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                    <div className={styles.inputParent}>
                        <label htmlFor="numero">Numéro de table : </label>
                        <input className={styles.inputRT}
                            type="number"
                            id="numero"
                            value={numero}
                            onChange={(e) => setNumero(Number(e.target.value))}
                            required />
                    </div>
                    <div className={styles.inputParent}>
                        <label htmlFor="capacite">Nombre de places : </label>
                        <input className={styles.inputRT}
                            type="number"
                            id="capacite"
                            value={capacite}
                            onChange={(e) => setCapacite(Number(e.target.value))}
                            required />
                    </div>
                    <div className={styles.inputParent}>
                        <label htmlFor="disponibilite">Marquer 1 pour disponible, 0 sinon : </label>
                        <input type="number"
                            className={styles.inputRT}
                            id="disponibilite"
                            value={disponibilite}
                            onChange={(e) => setDisponibilite(Number(e.target.value))}
                            required />
                    </div>
                    <div className={styles.inputParent}>
                        <label htmlFor="id_restaurant">ID : </label>
                        <input type="number"
                            className={styles.inputRT}
                            id="id_restaurant"
                            value={newId}
                            onChange={(e) => setNewId(Number(e.target.value))}
                            required />
                    </div>
                    
                </div>
                <div>
                    <button className={styles.buttonR} type='submit'>Enregistrer</button>
                    <button className={styles.buttonR} type='button' onClick={handleVider}>Vider</button>
                    <button className={styles.buttonR} type='submit' onClick={()=>{navigate("/Dashboard")}}>Terminer</button>
                </div>
            </form>
        </div>
    );
};

export default CreatRestaurant;