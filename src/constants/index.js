import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/Chatbot.jpg";
import project3 from "../assets/projects/project-3.png";
//import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/cybersecurity.png";
import project7 from "../assets/projects/project-7.png";


export const HERO_CONTENT = `I’m Shruti, a Full Stack Developer with 3+ years of experience in building scalable, user-centric software systems that drive real-world impact. With expertise in backend development, cloud computing, and API design I thrive in solving complex challenges through technology. Beyond coding, I believe in ethical innovation, ensuring that every solution I build contributes positively to society. Let's create something meaningful together! 🚀`

export const ABOUT_TEXT = `Hello! I’m Shruti Joshi from Seattle, USA, currently pursuing MS in Computer Science at Seattle University (GPA: 3.85). I hold a Bachelor's in Information Technology from Pune University. I am currently working as software engineer intern at Bilimetrix USA LLC. I previously worked at Mastercard, Accenture and Hewlett Packard Enterprise. I have extensive experience on REST APIs, Microservices, test automation. My expertise includes Java, React, Spring Boot, system design, Microservice architeture, REST APIs and CI/CD. I have collaborated with solution architects, Product Managers in discussions on domain-driven design and software architecture.

Outside of work, I enjoy cooking, badminton and bollywood dancing. I’m currently seeking a Software Engineer internship or co-op, with a focus on full-stack or cloud development. Let’s connect!`;

export const EXPERIENCES = [
  {
    year: "June 2025 – Present",
    role: "Software Development Intern",
    company: "Bilimetrix USA LLC(Seattle, USA)",
    description: ["Redesigned the 'Results Page' using C#, Razor Pages, and the .NET stack, adding key functionalities and UI/UX enhancements that ultimately saved doctor’s of interpretation time by ~20%.",
      "Optimized existing workflows by resolving critical bugs across the application, improving performance and user experience using C#.",
      "Ensured 100% unit test coverage using Test-Driven Development (TDD) achieving high-quality, regression-free releases."
    ],
    technologies: ["Java", "Spring Boot","Microservices", "React", "Karate Framework", "Axon Framework", "Agile", "AWS", "Cypress", "Jmeter"],
},
  {
    year: "Aug 2022 – Jun 2024",
    role: "Software Development Engineer I",
    company: "Mastercard (Pune, India)",
    description: ["Designed, developed and tested a workflow using Axon Framework with ReactJS based frontend to efficiently process 20000+ daily events for applying promotional benefits to cardholders which boosted customer engagement by 20%.",
"Improved service resiliency across four team owned services by 30% by achieving 98% regression test coverage with Karate framework for both APIs and events.",
"Implemented a retry strategy using Java and Spring Boot on transiently failed events improving issuer onboarding to the benefits lifecycle and reducing the failure rate by 15%.",
"Collaborated with DXP and BizOps teams to launch Live Chat application for Mastercard cardholders in Canada marketplace.",
"Led end-to-end UI testing and performance testing of Live Chat application across Canada and Latin America marketplaces using Cypress and JMeter, ensuring a seamless user experience."],

    technologies: ["Java", "Spring Boot","Microservices", "React", "Karate Framework", "Axon Framework", "Agile", "AWS", "Cypress", "Jmeter"],
},

  {
    year: "Dec 2020 - Jul 2022",
    role: "Associate Software Engineer",
    company: "Accenture (Pune, India)",
    description: ["Migrated SOAP APIs from legacy monolithic application to RESTful APIs in two microservices for AT&T’s US marketplace which improved performance, scalability and ensured 99.999% service availability.",
        "Developed, tested and deployed authentication mechanism for all US customers using token and OTP based security techniques leveraging Java, RabbitMQ, SQL, Docker and Kubernetes.",
"Enhanced the UST tool by adding six parameters, improving monitoring of upstream and downstream systems using JSP, HTML and CSS and increased data integrity and consistency by 25%.",
"Utilized Elasticsearch with Kibana for in-depth root cause analysis, log monitoring and troubleshooting issues reducing P2, P3 level oncall ticket resolution time by 20%.",
"Automated sanity testing of critical APIs using a Python script, reducing manual testing efforts by 90% and significantly improving operational efficiency."],
    technologies: ["Java", "Microservices", "Spring Boot", "Oracle SQL Dev", "Agile", "Putty", "Docker", "Kubernetes"],
  },
  {
    year: "Jan 2019 - Jun 2019",
    role: "SDE Intern",
    company: "Hewlett Packard Enterprise (Pune, India)",
    description: ["Underwent extensive training offered by HPE, strengthening my expertise in data engineering and scalable computing.","Worked in a three-member team to develop a Movie Recommendation System, performing data cleaning on the IMDb dataset and applying collaborative filtering techniques for improved recommendation accuracy."," Gained hands-on experience with big data technologies like Hadoop, HDFS, Hive, and Apache Spark to efficiently process large datasets."],
    technologies: ["Hadoop","HDFS", "HIVE","Apache Spark","JSP","Java"],
  },

];

export const PROJECTS = [
  {
    title: "NutriSync",
    image: project1,
    description:
      "Developed NutriSync, an GENAI-powered recipe recommendation app that processes recipe datasets, builds vector-based indexes with LlamaIndex, and uses LangChain agents for personalized, context-aware meal suggestions. Also, completed Generative AI with AWS and leveraged the skills to build an end-to-end solution, integrating OpenAI GPT models and implementing semantic search for accurate recipe recommendations.",
    technologies: ["LlamaIndex", "LangChain", "OpenAI  API", "AWS Bedrock", "Python"]
  },
  {
    title: "Cybersecurity Awareness Website",
    image: project6,
    description:
      "Developed as a solo project, the cybersecurity website was created using HTML, CSS, and JavaScript, featuring a chat screen to answer cybersecurity-related questions in real-time. The Llama2 model was integrated through Ollama to generate accurate and relevant responses to user queries. Express was used for the frontend to handle dynamic content, while Node.js powered the backend to efficiently manage requests and ensure smooth communication between the frontend and the AI model. This project combined web development skills with AI integration, offering an interactive and informative platform for users interested in cybersecurity.1234",
      technologies: ["Express.js", "Node.js", "LLM", "Llama2 model", "Prompt Engineering", "Ollama"],
  },
  {
    title: "Academic Chatbot",
    image: project2,
    description:
      "Developed a specialized academic chatbot using Seq2Seq encoder-decoder model in Python, achieving 63% accuracy in query handling serving over 1000+ students.Implemented NLP techniques like stop-word removal and Jaro-Winkler for query matching. Published research on academic chatbots in the International Journal of VLSI Design and Technology.",
        technologies: ["TensorFlow", "Seq2Seq Encoder-Decoder Model", "Flask", "NLTK", "Python"]
},
 {
   title: "Vacation Planner",
   image: project5,
   description:
      "Developed the vacation planner website using C# and .Net Framework features city search, likes, comments, travel tips, sorting, and filtering, with Google Maps API integration to enhance user experience. The project followed Agile methodology, with continuous iterations based on user feedback. Key metrics include 100% unit testing coverage, ensuring robustness and reliability, and deployment on Microsoft Azure, supporting scalability for multiple users. Multi-tab operations were implemented, ensuring updates in one window reflected instantly in others, and performance optimizations resulted in fast load times and smooth interactions.",
   technologies: ["C#", ".NET Framework", "JavaScript", "JSON", "HTML/CSS","Azure"],
  },
{
  title: "Fake News Detection",
  image: project7, 
  description:
    "Developed a fake news classifier in Java using WEKA for machine learning-based detection.Extracted bigrams, trigrams, TF-IDF, ARI, and Jaccard similarity features to enhance classification accuracy.",
    technologies: ["Java", "WEKA", "TF-IDF", "ARI (Automated Readability Index)", "Jaccard Similarity", "Trigrams"]
    },
  {
    title: "InstacartQueryEngine",
    image: project3,
    description:
      "Developed a web application in java that runs on amazon EC2 instance and shows a table of results after querying MySQL database and Amazon RedShift based on instacart data.",
    technologies: [
      "Java",
      "HTML",
      "MySQL",
      "Amazon EC2",
      "Amazon Redshift",
      "Sass"
    ],
  },

];
//
export const CONTACT = {
  address: "12th Ave Seattle, WA 98104 ",
  phoneNo: "+1 (201) 282 1146 ",
  email: "joshishruti009@gmail.com"
 };
