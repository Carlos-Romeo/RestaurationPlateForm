import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [mot_de_passe, setMot_de_passe] = useState("");
    const [role, setRole] = useState("client");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { nom, email, mot_de_passe, role };
        axios.post('http://localhost:5000/api/utilisateur', formData)
            .then((response) => {
                console.log(response.data);

                if (response.data && response.data.id) {
                    localStorage.setItem('adminId', response.data.id);
                    alert('ID de l\'administrateur stocké dans le localStorage:', response.data.id);
                }else{
                    alert("id non recupérer")
                }

                setNom("");
                setEmail("");
                setMot_de_passe("");
                setRole("client");

                role === "admin" ? navigate("/creatRestaurant") : navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setError("Une erreur est survenue lors de l'inscription. Veuillez réessayer.");
            });
    };

    return (
        <div className={styles.signupContainer}>
            <h2>Sign Up</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.formS} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="nom">Username:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="nom"
                        name="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div><br />
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div><br />
                <div className={styles.formGroup}>
                    <label htmlFor="mot_de_passe">Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        id="mot_de_passe"
                        name="mot_de_passe"
                        value={mot_de_passe}
                        onChange={(e) => setMot_de_passe(e.target.value)}
                        required
                    />
                </div><br />
                <div className={styles.formGroup}>
                    <label htmlFor="role">Role:</label>
                    <h4>Restaurateur = write admin or you are client</h4>
                    <select
                        className={styles.input}
                        id="role"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="client">client</option>
                        <option value="admin">restaurateur</option>
                    </select>
                </div><br />
                <button className={styles.button} type="submit">INSCRIPTION</button>
            </form>
        </div>
    );
};

export default SignUp;