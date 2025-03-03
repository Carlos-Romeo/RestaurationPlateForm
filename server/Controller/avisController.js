
const dataBase = require("../Config/mysql") ;

exports.avis =(req, res)=>{

    let insertIntoAvis = "INSERT INTO avis (note, commentaire, date, id_client, id_restaurant) VALUES (?,?,?,?,?)";
    dataBase.query(
        insertIntoAvis,
        [req.body.note, req.body.commentaire, req.body.date, req.body.id_client, req.body.id_restaurant],
        (error, result)=>{
            if(error){
                res.status(500).json(error)
            }
            res.status(200).json({result , message: "les donnée on bien été envoyer "})
        }
    )
}



exports.avisList = (req, res) => {

    let selectAvisQuery = "SELECT * FROM `avis`";

dataBase.query(
    selectAvisQuery,
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



exports.modificationAvis = (req, res) => {
    let id = req.params.id;

    let updateAvisQuery = `UPDATE avis SET note=?, commentaire=?, date=? id_client=?, id_restaurant=? WHERE id=?`

    

    dataBase.query(
        updateAvisQuery,

        [id, req.body.note, req.body.commentaire, req.body.date, req.body.id_client, req.body.id_restaurant],
        (error, result)=>{

            if(error){
                res.status(500).json(error)
            }
            res.status(200).json(result)
            
        }
    )
}