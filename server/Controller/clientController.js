
const dataBase = require("../Config/mysql") ;

exports.client =(req, res)=>{

    let insertIntoClient = "INSERT INTO client (preferences, historique_reservations, id_utilisateur) VALUES (?,?,?)";
    dataBase.query(
        insertIntoClient,
        [req.body.preferences, req.body.historique_reservations, req.body.id_utilisateur],
        (error, result)=>{
            if(error){
                res.status(500).json(error)
            }
            res.status(200).json({result , message: "les donnée on bien été envoyer "})
        }
    )
}



exports.clientList = (req, res) => {

    let selectClientQuery = "SELECT * FROM `client`";

dataBase.query(
    selectClientQuery,
    (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        } else {
            res.status(201).json(result);
        }
    }
);


}



exports.modificationClient = (req, res) => {
    let id = req.params.id;

    let updateClientQuery = `UPDATE client SET preferences=?, historique_reservations=?, id_utilisateur=? WHERE id=?`

    

    dataBase.query(
        updateClientQuery,

        [id, req.body.preferences, req.body.historique_reservations, req.body.id_utilisateur],
        (error, result)=>{

            if(error){
                res.status(500).json(error)
            }
            res.status(200).json(result)
            
        }
    )
}