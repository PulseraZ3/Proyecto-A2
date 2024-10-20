import '../estilos/Footer.css'
import React from 'react';
const data = {
    claves: [
        {
            clave: "Soluciones",
            content: [
                { text: "Comercio", url: "comercio.html" },
                { text: "Analiticas", url: "#" }
            ]
        },
        {
            clave: "Soporte",
            content: [
                { text: "Precios", url: "precios.html" },
                { text: "Documentación", url: "documentacion.html" },
                { text: "Guides", url: "#" }
            ]
        },
        {
            clave: "Compañia",
            content: [
                { text: "Nosotros", url: "nosotros.html" },
                { text: "Blog", url: "#" },
                { text: "Trabajos", url: "#" }
            ]
        },
        {
            clave: "Legal",
            content: [
                { text: "Privacidad", url: "Privacidad.html" },
                { text: "Terminos", url: "terminos.html" }
            ]
        }
    ]
};
// funciopn flecha, que retorno un div donde se copia el json claves.map que sirve para copiar y este creara un una funcion flecha la cual nos dara un h2 con el nombre del content 
//lueog otora funcion flecha la cual retornara un a donde tendra el link que es el parametro con . url el cual sera el link del a, dentro del a esta el text o sea problema 1 y eso, se creara los necearios

const RenderContent = ({ claves }) => {
    return (
        <div className='footer-box-contenedor'>
            {claves.map((item, index) => (
                <div key={index} className='footer-content'>
                    <h2>{item.clave}</h2>
                    {item.content.map((link, idx) => (
                        <a key={idx} href={link.url}>
                            {link.text}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
};


function Footer() {
    return (
        <div className="footer-contenedor">
            <div className='margin-footer'>
                <div className='footer-primero'>
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
                <RenderContent claves={data.claves}/>
            </div>
            <hr/>
            <div className='copy-footer'> 
                <div>
                    <p>Copyright &#169; 2024 <strong>LeoDev</strong>. All rights reserved.</p>
                </div>
                <div>
                    <a href="">Terminos y Condiciones</a>
                    <a href="">Politica de Privacidad</a>
                </div>
            </div>
        </div>
    );
}
export default Footer;