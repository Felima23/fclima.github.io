import React, {useState} from "react";
import "./index.css"
import {H2, IMG, LI, P, PP, Title } from "./styles";
import graficopizza from "../../assets/IMG/graficopizza.jpg"
import saopaulo from "../../assets/IMG/saopaulo.jpg"
import formado from "../../assets/IMG/formado.jpg"

function Quemsoueu(){
    return(
        <>
            <section>
                <div className="main-container">

                    <div className="container-aboutme">
                        <Title>Sobre mim<span>.</span></Title>
                        <P> Sou <span>desenvolvedor</span> e <span>estudante</span> de <span>Análise e Desenvolvimento de Sistemas</span> na FECAP, atualmente no 3º semestre. Desde que entrei nesse mundo, me apaixonei pela criação de interfaces e experiências front-end. Gosto de focar em design, usabilidade e performance, sempre buscando equilíbrio entre funcionalidade e criatividade.</P>
                    </div>{/* Final div ( container-aboutme ) */}


                    <div className="scroll-indicator">
                        <span>SCROLL</span>
                        <div className="line"></div>
                    </div>{/* Final div ( scrool-indicator ) */}


                    <div className="container-historia">
                        <div className="div-p">
                            <H2>Minha história<span>.</span></H2>
                            <PP><span>São Paulo</span> pode ser uma cidade caótica, mas também é onde tudo acontece — um lugar onde <span>ideias</span>, <span>culturas</span> e <span>oportunidades</span> se encontram o tempo todo. Crescer nesse ambiente me ensinou a buscar caminhos em meio ao movimento, sempre com vontade de evoluir e construir meu espaço.</PP>
                            <PP>Comecei cedo, vendendo doces aos 12 anos para comprar meu primeiro videogame. De lá pra cá, já trabalhei em <span>loja de roupas</span>, <span>corretora de seguros</span>, <span>transportadora</span>, <span>assistência de TI</span>, <span>Mercado Livre</span> e até <span>distribuidoras no CEASA (CEAGESP -SP)</span>. Foi no suporte de TI que descobri a programação — estudando por conta própria, encontrei no <span>front-end</span> e no <span>design</span> uma paixão que cresce a cada dia.</PP>
                            <PP>Hoje sou estudante de <span>Análise e Desenvolvimento de Sistemas</span> na <span>FECAP</span>, e sigo focado em criar soluções que unam funcionalidade e estética. Levo uma vida simples, sou apaixonado por natureza e esportes como surfe, futebol e skate. Comunicativo, espontâneo e de bem com a vida — esse sou eu.</PP>
                        </div>
                        <div className="div-imgg">
                            <img src={saopaulo} alt="Cidade de São Paulo" />
                        </div>
                    </div>

                    <div className="container-formacao">
                        <div className="div-imgg">
                            <img src={formado} alt="Graduação/Graduation" />
                        </div>
                        <div className="div-formacaoinfo">
                            <H2>Minha formação<span>.</span></H2>
                            <PP>Minha vida escolar sempre foi tranquila — daquele aluno que conversa, brinca, mas mantém o <span>respeito</span> com todos. Sempre me dei bem com os outros alunos e com os professores também. Tive facilidade com algumas matérias, como <span>História</span>, <span>Biologia</span> e <span>Geografia</span>. <span>Matemática</span> / <span>Química</span> dava trabalho, mas com esforço ia pra frente.</PP>
                            <PP>Estudei em escolas particulares até o 9º ano e finalizei o ensino médio na escola estadual <span>Manoel Ciridião Buarque</span>. Quando me formei, bateu a famosa dúvida: <span>“que faculdade fazer?”</span> Nada parecia fazer tanto sentido... então continuei trabalhando, buscando meu caminho com calma.</PP>
                            <PP>Foi aí que descobri a programação — e tudo começou a fazer sentido. Hoje, sou estudante de <span>Análise e Desenvolvimento de Sistemas</span> na <span>FECAP</span>, algo que realmente gosto e me motiva de verdade.</PP>
                            <PP>Sigo buscando aprender sempre, pois acredito que conhecimento é o que nos torna menos ignorantes. Por isso, estou sempre aberto a novas <span>experiências</span>, <span>ideias</span> e <span>aprendizados</span> que me ajudem a crescer como pessoa e profissional.</PP>
                        </div>
                    </div>

                    <div className="skills-container">
                        <div className="skill-column">
                            <H2>Parte designer</H2>
                            <ul>
                                <LI>Figma</LI>
                                <LI>Canva</LI>
                                <LI>Noções de UI</LI>
                                <LI>Protótipos simples</LI>
                                <LI>Interações de design</LI>
                            </ul>
                        </div>

                        <div className="skill-grafico">
                            <IMG src={graficopizza} alt="Grafico pizza" />
                        </div>

                        <div className="skill-column">
                            <H2>Parte programador</H2>
                            <ul>
                                <LI>HTML / CSS</LI>
                                <LI>React.js</LI>
                                <LI>JavaScript</LI>
                                <LI>C#</LI>
                                <LI>SQL</LI>
                            </ul>
                        </div>
                    </div>{/* Final div ( skills-container ) */}


                </div>{/* Final div Main-container */}
            </section>{/* Final MAIN*/}
        </>
    )
}

export default Quemsoueu;