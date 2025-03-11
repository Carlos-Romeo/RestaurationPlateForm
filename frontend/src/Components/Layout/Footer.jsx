import footerImage from "../Assets/boisson.jpg"



const Footer = () =>{
    return(
        <footer style={{ width : "100%", height : "50vh", display : 'flex', justifyContent : "space-between", alignItems : "center", backgroundColor: "black"}}>
            <div style={{width : "50%", height : "100%", display : 'flex', justifyContent : "center", alignItems : "center" }}>
                <div style ={{width : "90%", height : "90%", borderRadius : "10px", backgroundImage : `url(${footerImage})`, backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize: 'cover'}}>

                </div>
            </div>
            <div style={{ width : "50%", height : "90%",color : "white" ,display : 'flex', flexDirection : "column", alignItems : "center", textAlign : "left", margin :"30px" }}>
                <h3 style={{width: "100%", alignItems : "center"}}>Contact  :  + 228 96 79 49 42</h3>
                <h3 style={{width: "100%", alignItems : "center"}}>Email : www.linkedin.com/in/roméo-carlos-afanvi-40b7a3342</h3>
                <h3>Description : Lorem ipsum dolor sit, amet consectetur adipisicing elit. At magni enim cumque ipsa accusantium doloribus odio! Quos neque ea, molestias quasi et repudiandae aspernatur, dolor officia voluptatem, nisi error libero.</h3>
            </div>
        </footer>
    )
}


export default Footer;