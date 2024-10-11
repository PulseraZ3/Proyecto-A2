import '../estilos/Footer.css'
const data={
    claves:[
        {
            clave:"Soluciones",
            content:["problema 1","problema 2","problema 3", "problema 4"]
        },
        {
            clave:"Soporte",
            content:["problema 1","problema 2","problema 3", "problema 4"]
        },
        {
            clave:"Compañia",
            content:["problema 1","problema 2","problema 3", "problema 4"]
        },        
        {
            clave:"Legal",
            content:["problema 1","problema 2","problema 3"]
        } 
    ]
};
const generarContenido = ({ claves }) =>{
    return(
        <div>
            {claves.map}
        </div>
    );
};
export function Footer() {
    return (
        <div className="footer-contenedor">
            <div className='margin-footer'>
                <div>
                    <h2>Empresa Amarilla</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quidem dolores.
                    </p>
                    <div className='redes-sociales'>
                        <a href="#"><img src="../../public/facebook.png" alt="" /></a>
                        <a href="#"><img src="../../public/linkedin.png" alt="" /></a>
                        <a href="#"><img src="../../public/logotipo-de-instagram.png" alt="" /></a>
                        <a href="#"><img src="../../public/whatsapp.png" alt="" /></a>
                    </div>
                </div>
                
            </div>
            <hr/>
            <div className='copy-footer'> 
                <div>
                    <p>Copyright &#169; 2024 <strong>Website</strong>. All rights reserved.</p>
                </div>
                <div>
                    <a href="">Terminos y Condiciones</a>
                    <a href="">Politica de Privacidad</a>
                </div>
            </div>
        </div>
    );
}