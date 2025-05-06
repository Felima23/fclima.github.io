import "./index.css"
import { Logo, A, Contato } from "./styles";
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
            <header>
                    <div className="header-container">
                            <div className="header-logo">
                                <Logo as={Link} to="/">FCLIMA</Logo>
                            </div>

                            <div className="div-nav">
                                <nav>
                                    <ul>
                                        <li>
                                            <A as={Link} to="/projetos">Projetos</A>
                                        </li>
                                        <li>
                                            <A as={Link} to="/sobre">Sobre</A>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="div-btn-contato">
                                <Contato href="mailto:felipedecastroelima669@gmail.com?subject=Contato via site&body=Olá Felipe, gostaria de falar com você." target="_blank" rel="noopener noreferrer">Contato</Contato>
                            </div>
                    </div>
                </header>
        </>
    )
}

export default Header;