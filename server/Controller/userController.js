const dataBase = require("../Config/mysql");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.utilisateur = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.mot_de_passe, salt);

        let insertIntoUser = "INSERT INTO utilisateur (nom, email, mot_de_passe, role) VALUES (?,?,?,?)";

        dataBase.query(
            insertIntoUser,
            [req.body.nom, req.body.email, hashedPassword, req.body.role],
            (error, result) => {
                if (error) {
                    return res.status(500).json({ error: "Erreur lors de l'inscription", details: error });
                }
                res.status(200).json({ message: "L'utilisateur a bien été enregistré", id : result.insertId });
            }
        );
    } catch (err) {
        res.status(500).json({ error: "Erreur interne", details: err.message });
    }
};

exports.login = (req, res) => {
    let selectUserQuery = "SELECT * FROM utilisateur WHERE email = ?";

    dataBase.query(selectUserQuery, [req.body.email], async (error, results) => {
        if (error) {
            return res.status(500).json(error);
        }

        if (results.length === 0) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(req.body.mot_de_passe, user.mot_de_passe);
        if (!isMatch) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.SECRET_KEY, 
            { expiresIn: "1h" }
        );

        res.status(200).json({ token, id: user.id });
    });
};

exports.utilisateurList = (req, res) => {
    let selectUtilisateurQuery = "SELECT * FROM `utilisateur`";

    dataBase.query(
        selectUtilisateurQuery,
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: "Erreur interne du serveur" });
            } else {
                res.status(201).json(result);
            }
        }
    );
};