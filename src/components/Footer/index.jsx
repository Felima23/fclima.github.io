import "./index.css"
import { A, P } from "./styles";
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <>
            <footer>
                <div className="footer-container">
                    <P as={Link} to="/">© 2025 Felipe Lima</P>
                    <ul className="footer-nav">
                        <li><A as={Link} to="/projetos">projetos</A></li>
                        <li><A as={Link} to="/sobre">sobre</A></li>
                        <li><A href="mailto:felipedecastroelima669@gmail.com?subject=Contato via site&body=Olá Felipe, gostaria de falar com você." target="_blank" rel="noopener noreferrer">contato</A></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;