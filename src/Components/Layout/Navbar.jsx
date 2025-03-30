import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,ThemeProvider  } from "flowbite-react";
import { RiCodeView } from "react-icons/ri";
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import { useState } from "react";


function NavBar({curriculuRef, projectsRef, aboutRef }) {
  const [Linkcurriculu,setcurriculu]=useState(false)
  const [Linkprojects,setLinkprojects]=useState(false)
  const [Linkabout,setLinkabout]=useState(false)
  function HandleRef(ref,tipo){
    window.scrollTo({top:ref.current.offsetTop-90,behavior: "smooth"});
    if(tipo==="curriculu"){
      setcurriculu(true)
      setLinkprojects(false)
      setLinkabout(false)
    }
    if(tipo==="projects"){
      setcurriculu(false)
      setLinkprojects(true)
      setLinkabout(false)
    }
    if(tipo==="about"){
      setcurriculu(false)
      setLinkprojects(false)
      setLinkabout(true)
    }
  } 
  
  
  const customTheme = {
    navbar: {
      link: {
        
        base: "text-lg font-semibold ",
        active: {
          on: "text-red-500 ",
          off: "text-gray-300  hover:text-white-400",
        },
      },
    },
  };
  return (
    <ThemeProvider theme={customTheme}>
    <Navbar rounded className="mb-7 bg-gray-900 p-5 sticky top-1 z-2 mt-1 rounded-xl">
    <RiCodeView className="mr-3 size-8 text-emerald-200"/>
      <NavbarBrand href="#" >
        
        <span className="self-center whitespace-nowrap text-2xl cursor-pointer text-gray-300 font-sans font-semibold dark:text-white">Caique_Gargel.Dev</span>
      </NavbarBrand>
      <NavbarToggle />
      
      <NavbarCollapse className="mx-auto text-xl" >
     
        <NavbarLink active={Linkabout} className="cursor-pointer"    onClick={()=>HandleRef(aboutRef,"about")}>Sobre Mim</NavbarLink>
        <NavbarLink active={Linkprojects} className="cursor-pointer"  onClick={()=>HandleRef(projectsRef,"projects")}>Projetos</NavbarLink>
        <NavbarLink active={Linkcurriculu} className="cursor-pointer" onClick={()=>HandleRef(curriculuRef,"curriculu")} >Curriculo</NavbarLink>
     
      </NavbarCollapse>
      <NavbarCollapse >
        <NavbarLink   href="https://www.linkedin.com/in/caique-cesar-gargel-de-oliveira-615511220"><FaLinkedin className="text-2xl"/></NavbarLink>
        <NavbarLink href="https://github.com/Caique-Gargel"><FaGithub className="text-2xl"/></NavbarLink>
        <NavbarLink href="https://x.com/CesarGargel"><FaTwitter className="text-2xl"/></NavbarLink>
      </NavbarCollapse>
      
    </Navbar>
    </ThemeProvider>
  );
}
export default NavBar
