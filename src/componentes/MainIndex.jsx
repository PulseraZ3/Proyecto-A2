
import '../estilos/MainIndex.css'
function MainIndex(){
    return(
        <div className='contenedorMain'>
            <div className='contendorContent'>
                <h1>Eligue tu moto ideal</h1>
                <div className='Cards-contend'>
                    <div>
                        <a href='#'>                       
                            <img src="../public/deportivas.jpeg"/>
                        </a>
                        <h2>Deportivas</h2>
                        <button className='comprarButton'>
                            comprar
                        </button>
                    </div>
                    <div>
                        <a href='#'>
                            <img src="../public/urbanas2.webp"/>
                        </a>
                        <h2>Urbano</h2>
                        <button className='comprarButton'>
                            comprar
                        </button>
                    </div>                    
                    <div>
                        <a href='#'>
                            <img src="../public/trabajo.webp"/>
                        </a>
                        <h2>Trabajo</h2>
                        <button className='comprarButton'>
                            comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainIndex;
