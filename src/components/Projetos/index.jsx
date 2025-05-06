import "./index.css"
import { P, Title } from "./styles";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

function Projetos(){
    return(
        <>
            <section className="portfolio">
                <div className="interface">
                    <Title>&lt; PROJETOS /&gt;</Title>
                    <P>Uma seleção dos meus projetos mais recentes.</P>
                    <div className="flex">
                        <div className="img-port">
                            <div className="overlay">
                                <P>Projeto 1</P>
                                <div className="icons">
                                <IoLogoHtml5 size={45} color="#E34F26" />
                                <IoLogoCss3 size={45} color="#1572B6" />
                                <IoLogoJavascript size={45} color="#F7DF1E" />
                                <FaReact size={45} color="#61DAFB" />
                                </div>
                            </div>
                        </div>
                        <div className="img-port img2">
                            <div className="overlay">
                                <P>Projeto 2</P>
                                <div className="icons">
                                <IoLogoHtml5 size={45} color="#E34F26" />
                                <IoLogoCss3 size={45} color="#1572B6" />
                                <IoLogoJavascript size={45} color="#F7DF1E" />
                                <FaReact size={45} color="#61DAFB" />
                                </div>
                            </div>
                        </div>
                        <div className="img-port img3">
                            <div className="overlay">
                                <P>Projeto 3</P>
                                <div className="icons">
                                <IoLogoHtml5 size={45} color="#E34F26" />
                                <IoLogoCss3 size={45} color="#1572B6" />
                                <IoLogoJavascript size={45} color="#F7DF1E" />
                                <FaReact size={45} color="#61DAFB" />
                                </div>
                            </div>
                        </div>
                        <div className="img-port img5">
                            <div className="overlay">
                                <P>Projeto 1</P>
                                <div className="icons">
                                <IoLogoHtml5 size={45} color="#E34F26" />
                                <IoLogoCss3 size={45} color="#1572B6" />
                                <IoLogoJavascript size={45} color="#F7DF1E" />
                                <FaReact size={45} color="#61DAFB" />
                                </div>
                            </div>
                        </div>
                        <div className="img-port img5">
                            <div className="overlay">
                                <P>Projeto 1</P>
                                <div className="icons">
                                <IoLogoHtml5 size={45} color="#E34F26" />
                                <IoLogoCss3 size={45} color="#1572B6" />
                                <IoLogoJavascript size={45} color="#F7DF1E" />
                                <FaReact size={45} color="#61DAFB" />
                                </div>
                            </div>
                        </div>
                        <div className="img-port img5">
                            <div className="overlay">
                                <P>Projeto 1</P>
                                <div className="icons">
                                <IoLogoHtml5 size={45} color="#E34F26" />
                                <IoLogoCss3 size={45} color="#1572B6" />
                                <IoLogoJavascript size={45} color="#F7DF1E" />
                                <FaReact size={45} color="#61DAFB" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Projetos;