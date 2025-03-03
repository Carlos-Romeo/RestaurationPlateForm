
const dataBase = require("../Config/mysql") ;

exports.paiement =(req, res)=>{

    let insertIntoPaiement = "INSERT INTO paiement (id_utilisateur, montant, date, mode_paiement, id_reservation) VALUES (?,?,?,?,?)";
    dataBase.query(
        insertIntoPaiement,
        [req.body.id_utilisateur, req.body.montant, req.body.date, req.body.mode_paiement, req.body.id_reservation],
        (error, result)=>{
            if(error){
                res.status(500).json(error)
            }
            res.status(200).json({result , message: "les donnée on bien été envoyer "})
        }
    )
}

