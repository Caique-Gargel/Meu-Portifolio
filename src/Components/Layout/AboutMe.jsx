function AboutMe({aboutRef}){
    return(
        <div ref={aboutRef} className=" items-center py-15 px-4 mx-auto max-w-screen-xl ">
            <div className="font-light  text-sky-950 ">
                
                <h2 className=" text-4xl pl-10 tracking-tight font-extrabold text-sky-950 text-left">Sobre Mim</h2>
                <div className="pl-25 pt-8 pr-25 text-xl text-justify">
                    <p className="mb-4 ">Sou um <b className="text-orange-600">Desenvolvedor Web Full Stack</b> formado em <b className="text-orange-600">Ciência da Computação</b>, 
                    apaixonado por criar soluções tecnológicas e sempre em busca de aprimorar minhas habilidades para enfrentar 
                    novos desafios na programação. </p>
                    <p className="mb-4">Me formei em Ciência da Computação pela Universidade Unoeste em 2022, adquirindo uma base sólida 
                    em algoritmos, estruturas de dados, programação orientada a objetos e desenvolvimento de software. Durante a graduação, 
                    participei de projetos acadêmicos que me permitiram aplicar os conhecimentos teóricos na prática.</p>
                    <p className="mb-4">Atualmente, trabalho como <b className="text-orange-600">Desenvolvedor Java Backend</b> na <b className="text-orange-600">Caixa Econômica Federal</b>, 
                    atuando na comunidade de loterias. Minha principal função envolve a construção de microsserviços com <b className="text-orange-600">Quarkus</b> e a 
                    realização de testes com <b className="text-orange-600">JUnit.</b> Além disso, dedico parte do meu tempo a projetos pessoais utilizando diversas 
                    tecnologias.</p>
                    <p className="mb-6"><b >Estou em busca de um trabalho complementar como PJ ou oportunidades como freelancer. </b> 
                    Esta página foi criada para apresentar alguns dos meus projetos pessoais.</p>
                    <h2 className="mb-4 font-extrabold">Habilidades</h2>
                    <ul className="list-disc pl-10 text-lg">
                        <li className="mb-2"><b className="font-bold">Linguagens de programação:</b> JavaScript e Java.</li>
                        <li className="mb-2"><b className="font-bold">Desenvolvimento front-end:</b> HTML, CSS e frameworks como Tailwind, Bootstrap e React.js.</li>
                        <li className="mb-2"><b className="font-bold">Back-end:</b> Experiência com Quarkus e testes com JUnit.</li>
                        <li className="mb-2"><b className="font-bold">Banco de dados:</b> Noções de SQL e bancos de dados relacionais.</li>
                        <li className="mb-2"><b className="font-bold">Controle de versão:</b> Uso de Git e plataformas como GitHub e GitLab.</li>
                        <li className="mb-2"><b className="font-bold">Metodologias ágeis:</b> Familiaridade com desenvolvimento ágil e colaboração em equipe.</li>
                    </ul>
                </div>
            </div>
        </div>

        
    )
}
export default AboutMe