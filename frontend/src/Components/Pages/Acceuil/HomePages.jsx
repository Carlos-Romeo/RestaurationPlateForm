import image from "./../../Assets/restaurant.jpg"

import style from "./HomePage.module.css"



const HomePage = () => {
    return(
        <div>
            <header style={{height:  "80vh", width : "100%"}}>
                <section style={{ width : "100%", height: "80%", backgroundImage : `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <section>
{/*                         <h1 style={{fontSize :"30px", padding : "0", margin : "0", position:'relative', left : "10px", color : "white"}}>Faites vos reservations . . .</h1> */}
                    </section>
         {/*            <section style={{position : "relative", height : "90%", width : "400px", backgroundImage : `url(${image2})`, backgroundSize: "cover", backgroundPosition: "center", top : "110px", left : "60px", boxShadow : "12px 2px 100px 12px black", zIndex : "10"}}>

                    </section> */}
                </section>
                <section style={{float: "right", position: "relative", right: "40px", lineHeight: "0.8"}}>
                    <h2 style={{padding : "0", margin : "0", fontWeight: "bold", position: "relative", top : "5px"}}>. . . RESERVER ET PASSEZ UN BON MOMENT . . .</h2>
                    <p>cliquer sur Atout pour apprendre plus sur nous</p>
                </section>
            </header>
            <section style={{ width : "100%", height : "80vh"}}>
                <section style={{justifyContent : "space-between", display : "flex", alignItems : "center",height : "100%"  }}>
                    <section style={{ height : "100%", width : "50%", display : 'flex', justifyContent : "center", alignItems : "center"}}>
                        <div className={style.Logo} style={{height : "50%" , width : "50%" }}></div>
                    </section>
                    <section style={{ height : "100%", width : "50%",  }}>

                    </section>
                </section>
            </section>
        </div>
    )
}


export default HomePage;