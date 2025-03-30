import img from "../../assets/Perfil.png"
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import { SiQuarkus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";





function Landing (){
     
    return(
        
        <section >
        <div className=" items-center py-15 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className=" gap-4 ">
                <img className="w-65/100 rounded-lg" src={img} alt="foto de perfil"/>
                
        </div>
            <div className="font-light  text-sky-950 sm:text-lg text-left">
            <p className="text-xl">Olá meu nome Caique, e eu sou</p>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-sky-950 ">Desenvolvedor Full Stack Web</h2>
                <p className="mb-4 text-xl">Com experiencia em Tecnologias como: <b className="text-red-600">Javascript, HTML, CSS, React, Node, Java e Quarkus<b/></b> </p>
                <div className="text-4xl  flex space-x-4">
                    
                    <FaHtml5 className="text-orange-600"/>
                    <FaCss3Alt className="text-blue-700"/>
                    <FaNodeJs className="text-lime-500"/>
                    <FaReact className="text-cyan-400"/>
                    <FaJava />
                    <SiQuarkus className="text-blue-500"/>
                </div>
            </div>
            
        </div>
    </section>
    )
}
export default Landing;