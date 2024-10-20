import { useState } from 'react';
import '../../Estilos/Catalogo.css';
import Items from '../../items-categorias-aside-celulares.json';

function Aside() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="contendor-aside">
            {Items.map((item, index) => (
                <div key={index} className="aside-categorias">
                    {index === 0 && (
                        <div>
                            <h3>{item.first}</h3>
                        </div>
                    )}
                    <button onClick={() => handleButtonClick(index)}>
                        {item.title}
                        <ArrowIcon isOpen={activeIndex === index} />
                    </button>
                    {activeIndex === index && (
                        <div className="menu-desplegable">
                            <div className="menu-items">
                                {item.categoria && (
                                    <li>
                                        <input type="checkbox" id={`checkbox-${index}-1`} />
                                        <a href={item.url}>{item.categoria}</a>
                                    </li>
                                )}
                                {item.categoria2 && (
                                    <li>
                                        <input type="checkbox" id={`checkbox-${index}-2`} />
                                        <a href={item.url}>{item.categoria2}</a>
                                    </li>
                                )}
                                {item.categoria3 && (
                                    <li>
                                        <input type="checkbox" id={`checkbox-${index}-3`} />
                                        <a href={item.url}>{item.categoria3}</a>
                                    </li>
                                )}
                                {item.categoria4 && (
                                    <li>
                                        <input type="checkbox" id={`checkbox-${index}-4`} />
                                        <a href={item.url}>{item.categoria4}</a>
                                    </li>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const ArrowIcon = ({ isOpen }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`arrow-icon ${isOpen ? 'open' : ''}`}
    >
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

export default Aside;
