const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ message: "Accès refusé, token requis !" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token invalide ou expiré" });
        }

        req.user = decoded; // Ajout des infos de l'utilisateur à `req`
        next();
    });
};