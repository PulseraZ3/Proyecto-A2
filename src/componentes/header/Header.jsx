import '../../estilos/header.css'

function Header() {
    return (
        <div className='items-contendor'>
            <div className='nav'>
                <p>LOGO<br/>AQUI</p>
                <a href="">catálogo de motos</a>
                <a href="">accesorios</a>
                <a href="">financiamiento</a>
                <a href="">ventas corporativas</a>
            </div>
            <div className='input-contenedor'>
                <input type="button" value="INICIAR SESIÓN" />     
            </div>
        </div>
    );
}

export default Header;