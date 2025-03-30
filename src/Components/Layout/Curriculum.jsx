import {

    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
  } from "flowbite-react";
  import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
  import { useEffect, useRef } from "react";
  import Styles from "./Curriculum.module.css"
function Curriculum({curriculumRef}){
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
        
        <div ref={curriculumRef}>
        <h2 className=" text-4xl pl-10 pt-15  tracking-tight font-extrabold text-sky-950 text-left">Curriculo  Linha do Tempo</h2>
        <Timeline className="text-left m-15 ml-30">
            <section ref={(el) => el && elementsRef.current.push(el)} className={Styles.hidden}>
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent  >
                    <TimelineTime>Junho 2022</TimelineTime>
                    <TimelineTitle className=" text-sky-950">Graduação em Ciencia da Computação Pela Unoeste </TimelineTitle>
                    <TimelineBody className=" text-sky-950">
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                    </TimelineBody>
                    
                    </TimelineContent>
                </TimelineItem>
           
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                    <TimelineTime>Junho 2024 - Dezembro 2024</TimelineTime>
                    <TimelineTitle className=" text-sky-950">Professor e Técnico em Informática no Centro Paula Souza </TimelineTitle>
                    <TimelineBody className=" text-sky-950">
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions
                        even as we update the project.
                    </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
            
            
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                    <TimelineTime>Janeiro 2025 - Atualmente</TimelineTime>
                    <TimelineTitle className=" text-sky-950" >TBN-TI Desenvolvedor Java Backend na Caixa Economica Federal</TimelineTitle>
                    <TimelineBody className=" text-sky-950">
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
            </section>
        </Timeline>
        </div>
        
    )
}
export default Curriculum