
const dataBase = require("../Config/mysql") ;


exports.reservation = (req, res) => {
    let insertIntoReservation = "INSERT INTO reservation (date, heure, statut, id_client, id_table, id_restaurant) VALUES (?, ?, ?, ?, ?, ?)";
    
    dataBase.query(
        insertIntoReservation,
        [req.body.date, req.body.heure, req.body.statut, req.body.id_client, req.body.idTable, req.body.idRestaurant],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error });
            }

            // Mise à jour de la disponibilité de la table après la réservation
            let updateTableDisponibilite = "UPDATE table_restaurant SET disponibilite = 0 WHERE id = ?";
            
            dataBase.query(
                updateTableDisponibilite,
                [req.body.idTable],
                (err, updateResult) => {
                    if (err) {
                        return res.status(500).json({ error: err });
                    }

                    res.status(200).json({ 
                        message: "Réservation effectuée avec succès et table mise à jour",
                        reservation: result,
                        update: updateResult
                    });
                }
            );
        }
    );
};




exports.reservationByIdTable =(req, res) => {

    const tableId = req.params.tableId

    let reservByIdTable = "SELECT * FROM reservation WHERE id_table = ?"

    dataBase.query(
        reservByIdTable,
        [tableId],
        (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({meesage: "Erreur coté server"})
            }
            res.status(201).json(result)
            
        }
    )

}




exports.reservationList = (req, res) => {

    let selectReservationQuery = "SELECT * FROM `revervation`";

dataBase.query(
    selectReservationQuery,
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



exports.modificationReservation = (req, res) => {
    let id = req.params.id;

    let updateReservationQuery = `UPDATE utilisateur SET date=?, heure=?, statut=?, id_client=? id_table=? WHERE id=?`

    

    dataBase.query(
        updateReservationQuery,

        [id, req.body.date, req.body.heure, req.body.statut, req.body.id_client, req.body.id_table],
        (error, result)=>{

            if(error){
                res.status(500).json(error)
            }
            res.status(200).json(result)
            
        }
    )
}