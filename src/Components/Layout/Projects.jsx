import Styles from './Projects.module.css'
import cbloldleImg from "../../assets/CBLOLdle.png"
import cbloldleLogo from "../../assets/CBLOLdle_Logo.png"
import agendaAulaImg from "../../assets/AgendaAula.png"
import agendaAulaLogo from "../../assets/AgendaAula_Logo.png"
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiQuarkus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { useEffect, useRef } from "react";
/*Futuramente tem que componentizar os projetos*/
function Projects({projectsRef}){
    const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add(Styles.show);
        } 
      });
    });

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => {
      elementsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);
    return(
        <div ref={projectsRef}>
            <h2 className=" text-4xl pl-10 pt-15 pb-10 tracking-tight font-extrabold text-sky-950 text-left">Meus Projetos</h2>
            <div className={Styles.ContainerProject}>
            <img src={cbloldleLogo} className={Styles.logo} alt="cbloldlelogo"/>
            <a href="https://cbloldle.vercel.app/" target="_blank" rel="noopener noreferrer">
                <section  > 
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 lg:pt-0">
                        <section ref={(el) => el && elementsRef.current.push(el)} className={Styles.hidden}>
                            <div className="font-light text-sky-950 sm:text-lg text-justify">
                                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-sky-950 ">  Nome: CBLOLdle</h2>
                                <p className="font-bold mb-4">Situação: <span className="text-green-500">Finalizado</span></p>
                                
                                <div className="text-4xl mb-4 flex space-x-4">
                                <p className="font-bold text-xl">Tecnologias: </p>
                                                    <FaHtml5 className="text-orange-600"/>
                                                    <FaCss3Alt className="text-blue-700"/>
                                                    <FaReact className="text-cyan-400"/>
                                                    <RiJavascriptFill className="text-yellow-300"/>
                                                    
                                                    
                                    </div>
                                <p className="mb-2">
                                <b>CBLOLdle</b> é um jogo de adivinhação diário inspirado em jogos como 
                                <b className="text-orange-600"> Wordle, Termo e LOLdle. </b>  
                                Ele presta homenagem ao Campeonato Brasileiro de League of Legends, também conhecido como 
                                <b> CBLOL.</b> </p>

                                <p className="mb-2">O objetivo do CBLOLdle é adivinhar
                                o jogador do dia por meio das dicas fornecidas a cada tentativa. 
                                O jogo conta com um banco de dados contendo todos os jogadores que já 
                                passaram pelo CBLOL.</p>
                                
                                
                            </div>
                        </section>
                        <section ref={(el) => el && elementsRef.current.push(el)} className={Styles.hidden2}>
                            <div className="mt-8">
                                <img className="w-full rounded-lg" src={cbloldleImg} alt="Cbloldle"/>
                            </div>
                        </section>
                    </div>
                </section>
            </a>
            </div>
            <div className={Styles.ContainerProject}>
            <img src={agendaAulaLogo} className={Styles.logo} alt="agendaaulalogo"/>
            <a href="https://agendaaula.vercel.app/" target="_blank" rel="noopener noreferrer">
                <section  >
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 lg:pt-0">
                        <section ref={(el) => el && elementsRef.current.push(el)} className={Styles.hidden}>
                            <div className="font-light text-sky-950 sm:text-lg text-justify">
                                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-sky-950 ">  Nome: AgendaAula</h2>
                                <p className="font-bold mb-4">Situação: <span className="text-yellow-400">Em Construção</span></p>
                                
                                <div className="text-4xl mb-4 flex space-x-4">
                                <p className="font-bold text-xl">Tecnologias: </p>
                                                    <FaHtml5 className="text-orange-600"/>
                                                    <FaCss3Alt className="text-blue-700"/>
                                                    <FaReact className="text-cyan-400"/>
                                                    <RiJavascriptFill className="text-yellow-300"/>
                                                    <SiQuarkus className="text-blue-500"/>
                                                    
                                    </div>
                                <p className="mb-4">O <b>AgendaAula</b> é um software de gerenciamento de agenda para escolas. 
                                Ele permite a criação de <b>Cronogramas Dinâmicos,</b> levando em conta a disponibilidade de 
                                professores, alunos e salas de aula. O frontend é desenvolvido em <b className="text-orange-600">
                                React.js</b>, enquanto o backend consiste em uma <b className="text-orange-600">API REST </b> 
                                 construída com <b className="text-orange-600">Java Quarkus.</b> Observação: 
                                A aplicação ainda está em desenvolvimento.</p>
                                
                            </div>
                        </section>
                        <section ref={(el) => el && elementsRef.current.push(el)} className={Styles.hidden2}>
                            <div class=" mt-8">
                                <img className="w-full rounded-lg" src={agendaAulaImg} alt="AgendaAula"/>
                                
                            </div>
                        </section>
                    </div>
                </section>
            </a>
            
            </div>
        </div>
    )
}
export default Projects