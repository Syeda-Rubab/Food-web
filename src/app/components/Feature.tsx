import React from "react";
import Dash from "./Dash";
import Image from "next/image";


const Feature = () => {
  return (
    <div className="container pt-40 ">
        <h2 className="text-6xl font-bold pl-10">Our</h2>
        <h2 className="text-6xl font-bold pt-2 pl-10">
            Featured <span className="text-accent">Food</span>
        </h2>

        <p className="maw-w-[550px] pt-10 pl-10 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>
            Illum, nisi dolores. Exercitationem amet voluptatibus minima pariatur dicta, tenetur,<br/>
            at blanditiis totam reprehenderit vitae sint ipsa fugiat ut. Necessitatibus, dicta maxime.
        </p>
        <Dash />
        <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16">
            <div className="w-fit mx-auto self-end">
                <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                 src="/grid_1.png" 
                 height={500}
                 width={300} 
                alt="grid_image" />
                <div className="space-y-4">
                   <Dash />
                   <h2 className="font-medium text-xl">Shrimp Salad</h2>
                   <p className="text-gray-700 text-[14px] xl:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis facere explicabo maxime nihil magn.
                   </p>
                </div>
            </div>

            <div className="w-fit mx-auto">
                <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                 src="/grid_2.png" 
                 height={800}
                 width={500} 
                alt="grid_image" />
                <div className="space-y-4">
                   <Dash />
                   <h2 className="font-medium text-xl">Baked Apples</h2>
                   <p className="text-gray-700 text-[14px] xl:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis facere explicabo maxime nihil magn.
                   </p>
                </div>
            </div>

            <div className="w-fit mx-auto self-end">
                <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                 src="/grid_3.png" 
                 height={500}
                 width={300} 
                alt="grid_image" />
                <div className="space-y-4">
                   <Dash />
                   <h2 className="font-medium text-xl">Cherries Chicken</h2>
                   <p className="text-gray-700 text-[14px] xl:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis facere explicabo maxime nihil magn.
                   </p>
                </div>
            </div>





        </div>
      
    </div>
  )
}

export default Feature
