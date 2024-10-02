import '../../estilos/header.css'

function Header() {
    return (
        <div className='contendor-header'>
            <div className="logo-contendor">
                <p className='mover'>Empresa <span>Amarilla</span></p>
            </div>
            <input type="button" value="REGISTRATE" />
        </div>
    );
}

export default Header;