function AboutMe({aboutRef}){
    return(
        <div ref={aboutRef} className=" items-center py-15 px-4 mx-auto max-w-screen-xl ">
            <div className="font-light  text-sky-950 ">
                
                <h2 className=" text-4xl pl-10 tracking-tight font-extrabold text-sky-950 text-left">Sobre Mim</h2>
                <div className="pl-25 pt-8 pr-25 text-xl text-justify">
                <p className="mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in mauris vel ipsum ultricies sollicitudin finibus ac turpis. Etiam non facilisis metus. Proin non mauris purus. Maecenas porttitor orci metus, eu scelerisque purus rhoncus a. Sed vitae felis vitae nisi gravida lobortis. Duis quis ex ut augue sodales fermentum eu nec purus. In vitae eleifend turpis. In posuere erat sit amet imperdiet feugiat. Proin id finibus metus. In ornare augue a leo aliquet, vitae scelerisque nisi efficitur. <b className="text-red-600">Javascript, HTML, CSS, React, Node, Java e Quarkus<b/></b> </p>
                <p className="mb-4">Morbi scelerisque sollicitudin lorem, at fringilla sapien placerat at. Sed vitae pulvinar elit. Pellentesque placerat accumsan malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur pharetra elit velit, vel molestie nisi elementum pulvinar. Duis ac purus accumsan ex tempus sodales. Phasellus non gravida quam. Mauris mollis est vel urna eleifend vulputate vel vitae nisl. Donec facilisis leo id sapien sollicitudin sollicitudin.</p>
                <p className="">Morbi scelerisque sollicitudin lorem, at fringilla sapien placerat at. Sed vitae pulvinar elit. Pellentesque placerat accumsan malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur pharetra elit velit, vel molestie nisi elementum pulvinar. Duis ac purus accumsan ex tempus sodales. Phasellus non gravida quam. Mauris mollis est vel urna eleifend vulputate vel vitae nisl. Donec facilisis leo id sapien sollicitudin sollicitudin.</p>
                </div>
            </div>
        </div>

        
    )
}
export default AboutMe