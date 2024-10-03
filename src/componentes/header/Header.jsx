import '../../estilos/header.css'

function Header() {
    return (
        <div className='contendor-header'>
            <div className='items-contendor'>
                <div className="logo-contendor">
                    <p>Empresa <br/>Amarilla</p>
                </div>
                <div className='nav'>
                    <a href="">catalogo de motos</a>
                    <a href="">accesorios</a>
                    <a href="">financiamiento</a>
                    <a href="">ventas corporativas</a>
                </div>
            </div>
            <input type="button" value="REGISTRATE" />
        </div>
    );
}

export default Header;