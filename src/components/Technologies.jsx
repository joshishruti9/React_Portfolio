import React from "react";
import { FaReact } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa"
import { SiApachejmeter, SiDocker, SiKubernetes } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiCypress } from "react-icons/si";
import { SiRabbitmq, SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";


const Technologies = () => {
  return (
    <div id = "technologies" className="border-b border-neutral-800 pb-24 pt-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl " />
          <p className="text-lg font-medium text-neutral-300 text-center">Java</p>
        </div>
         
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">Python</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className="text-7xl text-green-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">Spring Boot</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
          <p className="text-lg font-medium text-neutral-300 text-center">React</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">JavaScript</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-orange-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">AWS</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-red-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">Git</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachekafka className="text-7xl text-green-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">Apache Kafka</p>
        </div>
  
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-sky-600" />
          <p className="text-lg font-medium text-neutral-300 text-center">MySQL</p>
        </div>

      
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-400" />
          <p className="text-lg font-medium text-neutral-300 text-center">Express.js</p>
        </div>
       
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
          <p className="text-lg font-medium text-neutral-300 text-center">HTML5</p>
        </div>
       
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-600" />
          <p className="text-lg font-medium text-neutral-300 text-center">CSS3</p>
        </div>
        
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRabbitmq className="text-7xl text-orange-600" />
          <p className="text-lg font-medium text-neutral-300 text-center">RabbitMQ</p>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-sky-700" />
          <p className="text-lg font-medium text-neutral-300 text-center">PostgreSQL</p>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">MongoDB</p>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCypress className="text-7xl text-teal-400" />
          <p className="text-lg font-medium text-neutral-300 text-center">Cypress</p>
        </div>
  
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachejmeter className="text-7xl text-red-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">JMeter</p>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-7xl text-sky-500" />
          <p className="text-lg font-medium text-neutral-300 text-center">Docker</p>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKubernetes className="text-7xl text-blue-600" />
          <p className="text-lg font-medium text-neutral-300 text-center">Kubernetes</p>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCssdeck className="text-7xl text-purple-600" />
          <p className="text-lg font-medium text-neutral-300 text-center">C#, ASP.NET</p>
        </div>

         

        
      </div>
    </div>
  );
};

export default Technologies;
