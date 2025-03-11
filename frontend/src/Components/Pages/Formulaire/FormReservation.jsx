const FromReservation = (id_client, id_restaurant) => {


    



    return (
        <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Reservation</h1>
            <form style={{width: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <input type='text' placeholder='Nom' style={{margin: '10px'}}/>
                <input type='text' placeholder='Prenom' style={{margin: '10px'}}/>
                <input type='text' placeholder='Email' style={{margin: '10px'}}/>
                <input type='text' placeholder='Telephone' style={{margin: '10px'}}/>
                <input type='date' placeholder='Date' style={{margin: '10px'}}/>
                <input type='time' placeholder='Heure' style={{margin: '10px'}}/>
                <input type='number' placeholder='Nombre de personnes' style={{margin: '10px'}}/>
                <button style={{margin: '10px'}}>Reserver</button>
            </form>

        </div>
    )
}


export default FromReservation;