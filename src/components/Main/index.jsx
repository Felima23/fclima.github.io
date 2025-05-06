import "./index.css"
import {IMG, Title, SubTitle, Button, P, SobreMim, Button2} from "./styles"
import foto from "../../assets/IMG/foto.jpg"
import {FaInstagram, FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { Link } from 'react-router-dom'

function Main(){
    return(
        <>
            <main>
                <div className="mainn-containerr">

                    <div className="profile-section">
                        <IMG src={foto} alt="Felipe Lima" />
                        <Title>&lt;FELIPE LIMA&gt;</Title>
                        <SubTitle>Desenvolvedor ( Front-End )</SubTitle>
                        <a href="mailto:felipedecastroelima669@gmail.com?subject=Contato via site&body=Olá Felipe, gostaria de falar com você." target="_blank" rel="noopener noreferrer"><Button>Email</Button></a>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/_felima23/"><FaInstagram size={24} color="#000000" /></a>
                            <a href="#"><FaFacebook size={24} color="#000000" /></a>
                            <a href="https://www.linkedin.com/in/felipe-lima-476b71236/"><FaLinkedin size={24} color="#000000" /></a>
                            <a href="https://github.com/Felima23"><FaGithub size={24} color="000000" /></a>
                        </div>    
                    </div>

                    <div className="about-section">
                        <div className="container-about">
                            <SobreMim>&lt;/Sobre mim&gt;</SobreMim>
                            <P>Sou um desenvolvedor apaixonado por criar interfaces modernas e funcionais. Acredito que a tecnologia pode transformar experiências e estou sempre explorando novas soluções para otimizar projetos.</P>
                            <div className="tech-icons">
                            <a><FaGithub size={45} color="#FFF" /></a>
                            <a><IoLogoHtml5 size={45} color="#E34F26" /></a>
                            <a><IoLogoCss3 size={45} color="#1572B6" /></a>
                            <a><FaReact size={45} color="#FFF" /></a>
                            <a><IoLogoJavascript size={45} color="#F7DF1E" /></a>
                            <a><SiFigma size={45} color="#F24E1E" /></a>        
                            </div>
                            <div className="buttons">
                            <Button2 as={Link} to="/projetos">Projetos</Button2>
                            <Button2 as="a" href="/curriculofelipe.pdf" target="blank" rel="noopener noreferrer">Baixar CV</Button2>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Main;