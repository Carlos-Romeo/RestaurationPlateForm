const dataBase = require("../Config/mysql");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/"); // Dossier où stocker les images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_image_" + file.originalname); // Renommer le fichier
    },
});

const upload = multer({ storage: storage });

exports.restaurant = (req, res) => {
    upload.single("image")(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors du téléchargement de l'image", details: err });
        }

        if (!req.file) {
            return res.status(400).json({ error: "Aucune image envoyée" });
        }

        const imagePath = req.file.path; // Chemin de l'image sur le serveur

        let insertIntoRestaurant = "INSERT INTO restaurant (nom, adresse, telephone, description, id_admin, image, etoile) VALUES (?,?,?,?,?,?,?)";

        dataBase.query(
            insertIntoRestaurant,
            [req.body.nom, req.body.adresse, req.body.telephone, req.body.description, req.body.id_admin, imagePath, req.body.etoile],
            (err, result) => {
                if (err) {
                    return res.status(500).json({ error: "Erreur lors de l'enregistrement des données", details: err });
                }
                res.status(200).json({ id: result.insertId, message: "Données enregistrées avec succès" });
            }
        );
    });
};









exports.restaurantList = (req, res) => {
    let selectRestaurantQuery = "SELECT * FROM `restaurant`";

    dataBase.query(
        selectRestaurantQuery,
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: "Erreur interne du serveur" });
            } else {
                res.status(200).json(result);
            }
        }
    );
};

exports.restaurantById = (req, res) => {
    let id = req.params.id;

    let selectRestaurantByIdQuery = "SELECT * FROM restaurant WHERE id=?";

    dataBase.query(
        selectRestaurantByIdQuery,
        [id],
        (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(result);
            }
        }
    );
};



exports.getRestaurantByAdmin = (req, res) => {
    const adminId = req.params.adminId;
    const query = 'SELECT * FROM restaurant WHERE id_admin = ?';

    dataBase.query(query, [adminId], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des informations du restaurant' });
        }
        res.status(200).json(results[0]);
    });
};


exports.modificationRestaurant = (req, res) => {
    let id = req.params.id;

    let updateRestaurantQuery = "UPDATE restaurant SET nom=?, adresse=?, telephone=?, description=?, id_admin=? WHERE id=?";

    dataBase.query(
        updateRestaurantQuery,
        [req.body.nom, req.body.adresse, req.body.telephone, req.body.description, req.body.id_admin, id],
        (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(result);
            }
        }
    );
};