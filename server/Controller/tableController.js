const dataBase = require("../Config/mysql");

exports.table_restaurant = (req, res) => {
    let insertIntoTable_Restaurant = "INSERT INTO table_restaurant (numero, capacite, disponibilite, id_restaurant) VALUES (?,?,?,?)";
    dataBase.query(
        insertIntoTable_Restaurant,
        [req.body.numero, req.body.capacite, req.body.disponibilite, req.body.id_restaurant],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de l'enregistrement des données", details: error });
            }
            res.status(200).json({ result, message: "Les données ont bien été envoyées" });
        }
    );
};

exports.table_restaurantList = (req, res) => {
    let selectTable_RestaurantQuery = "SELECT * FROM `table_restaurant`";
    dataBase.query(
        selectTable_RestaurantQuery,
        (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: "Erreur interne du serveur" });
            }
            res.status(200).json(result);
        }
    );
};

exports.modificationTable_Restaurant = (req, res) => {
    let id = req.params.id;
    let updateTable_RestaurantQuery = "UPDATE table_restaurant SET numero=?, capacite=?, disponibilite=?, id_restaurant=? WHERE id=?";
    dataBase.query(
        updateTable_RestaurantQuery,
        [req.body.numero, req.body.capacite, req.body.disponibilite, req.body.id_restaurant, id],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de la mise à jour des données", details: error });
            }
            res.status(200).json({ result, message: "Les données ont bien été mises à jour" });
        }
    );
};

exports.table_restaurantById = (req, res) => {
    let id = req.params.id;
    let selectTable_RestaurantQuery = "SELECT * FROM table_restaurant WHERE id=?";
    dataBase.query(
        selectTable_RestaurantQuery,
        [id],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de la récupération des données", details: error });
            }
            res.status(200).json(result);
        }
    );
};

exports.table_restaurantByRestaurant = (req, res) => {
    let id = req.params.id;
    let selectTable_RestaurantQuery = "SELECT * FROM table_restaurant WHERE id_restaurant=?";
    dataBase.query(
        selectTable_RestaurantQuery,
        [id],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de la récupération des données", details: error });
            }
            res.status(200).json(result);
        }
    );
};

exports.table_restaurantByDisponibilite = (req, res) => {
    let disponibilite = req.params.disponibilite;
    let selectTable_RestaurantQuery = "SELECT * FROM table_restaurant WHERE disponibilite=?";
    dataBase.query(
        selectTable_RestaurantQuery,
        [disponibilite],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de la récupération des données", details: error });
            }
            res.status(200).json(result);
        }
    );
};

exports.table_restaurantByCapacite = (req, res) => {
    let capacite = req.params.capacite;
    let selectTable_RestaurantQuery = "SELECT * FROM table_restaurant WHERE capacite=?";
    dataBase.query(
        selectTable_RestaurantQuery,
        [capacite],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de la récupération des données", details: error });
            }
            res.status(200).json(result);
        }
    );
};

exports.table_restaurantByNumero = (req, res) => {
    let numero = req.params.numero;
    let selectTable_RestaurantQuery = "SELECT * FROM table_restaurant WHERE numero=?";
    dataBase.query(
        selectTable_RestaurantQuery,
        [numero],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de la récupération des données", details: error });
            }
            res.status(200).json(result);
        }
    );
};

exports.deleteTable_Restaurant = (req, res) => {
    let id = req.params.id;
    let deleteTable_RestaurantQuery = "DELETE FROM table_restaurant WHERE id=?";
    dataBase.query(
        deleteTable_RestaurantQuery,
        [id],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Erreur lors de la suppression des données", details: error });
            }
            res.status(200).json({ result, message: "Les données ont bien été supprimées" });
        }
    );
};