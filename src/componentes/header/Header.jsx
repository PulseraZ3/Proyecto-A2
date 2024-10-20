import '../../estilos/header.css'
import { useEffect, useState, useRef } from 'react';
function Header() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const ingresarRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setElevate(prev => !prev);
        }, 900);

        return () => clearInterval(interval);
    }, []); 

    const toggleModal = () => {
        if (!modalVisible && ingresarRef.current) {
            const rect = ingresarRef.current.getBoundingClientRect(); // me devuelve la posicion actual de ingresarref
            setModalPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX - 150 }); // ajustar para que no salga de la pantalla xd
        }
        setModalVisible(!modalVisible);
    };
    return (
        <div className='items-contendor'>
            <div className='nav'>
                <p>LOGO<br/>AQUI</p>
                <a href="../../../catalogo.html">catálogo de motos</a>
            </div>
            <div className='input-contenedor'>
                <a ref={ingresarRef} onClick={toggleModal} >Ingresar</a>
            </div>
            {modalVisible && (//para calcular donde queda el modal, la cosa es que el inicia sesion te lleve a otra pagina, ahi integramos otra pagina, y el carrito de compras otro modal
                // pero que salga carrito vacio
                <div className="modal" style={{ top: modalPosition.top, left: modalPosition.left }} onMouseLeave={toggleModal}>
                    <div className="modal-content">
                        <button className="close" onClick={toggleModal}>×</button>
                        <button className="login-button"><a>Inicia Sesión</a></button>
                        <p>¿No tienes cuenta?</p>
                        <a href="#" className="register-link">Regístrate</a>
                    </div>
                </div>
            )}
        </div>
    );  
}

export default Header;