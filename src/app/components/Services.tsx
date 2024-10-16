import React from 'react'
import Dash from './Dash';
import ServiceCard from './ServiceCard';

const servicesData =[
    {
        img:"/services_1.png",
        title:"Professional Kitchen",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolar Odio."
    },
    {
        img:"/services_2.png",
        title:"Delivery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolar Odio."
    },
    {
        img:"/services_3.png",
        title:"Wine List",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolar Odio."
    },
    {
        img:"/services_4.png",
        title:"Free Wifi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolar Odio."
    },
    

];


const Services = () => {
  return (
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
                Choose Best <span className="text-accent">Service</span>
            </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/>
                guidem  esse eumanimi?
              </p>
              <div className="w-fit mx-auto">
                <Dash />
              </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
            {servicesData.map((item, index)=>(
                <ServiceCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                />
            ))}
        </div>
      
    </div>
  );
};

export default Services
