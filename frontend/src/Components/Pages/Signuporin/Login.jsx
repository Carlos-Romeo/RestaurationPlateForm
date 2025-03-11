import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Auth.module.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [mot_de_passe, setMot_de_passe] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { email, mot_de_passe };
        axios.post('http://localhost:5000/api/login', formData)
            .then((response) => {
                console.log(response.data);

                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    response.data.role === "admin" ? navigate("/creatRestaurant") : navigate("/");
                   
                } else {
                    setError("Échec de la connexion. Veuillez réessayer.");
                }
            })
            .catch((error) => {
                console.log(error);
                setError("Email ou mot de passe incorrect. Veuillez réessayer.");
            });
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.formL} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        className={styles.input}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="mot_de_passe">Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        id="password"
                        value={mot_de_passe}
                        onChange={(e) => setMot_de_passe(e.target.value)}
                        required
                    />
                </div>
                
                <p>clicker ici si vous ne vous étiez pas inscris <NavLink to={"/signup"}>signup</NavLink></p>
                <button className={styles.button} type="submit">LOGIN</button>
            </form>
        </div>
    );
};

export default Login;