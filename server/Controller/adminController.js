
const dataBase = require("../Config/mysql") ;

exports.admin =(req, res)=>{

    let insertIntoAdmin = "INSERT INTO administrateur (id_utilisateur) VALUES (?,?,?,?,?)";
    dataBase.query(
        insertIntoAdmin,
        [req.body.id_utilisateur],
        (error, result)=>{
            if(error){
                res.status(500).json(error)
            }
            res.status(200).json({result , message: "les donnée on bien été envoyer "})
        }
    )
}


/* 
exports.adminList = (req, res) => {

    let selectAdminQuery = "SELECT * FROM `administrateur`"; */

/* dataBase.query(
    selectAdminQuery,
    (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        } else {
            res.status(201).json(result);
        }
    }
);

 */
/* } */
/* 


exports.modificationAdmin = (req, res) => {
    let id = req.params.id;

    let updateAdminQuery = `UPDATE administrateur SET nom=?, adresse=?, telephone=? description=?, id_admin=? WHERE id=?`

    

    dataBase.query(
        updateAdminQuery,

        [id, req.body.nom, req.body.adresse, req.body.telephone, req.body.description, req.body.id_admin],
        (error, result)=>{

            if(error){
                res.status(500).json(error)
            }
            res.status(200).json(result)
            
        }
    )
} */