//import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/Chatbot.jpg";
import project3 from "../assets/projects/project-3.png";
//import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/cybersecurity.png";
import project7 from "../assets/projects/project-7.png";


export const HERO_CONTENT = `Dedicated Full Stack Developer with over 3.5+ years of experience in building robust, scalable web applications. Skilled in front-end technologies like React.js, HTML5/CSS3, as well as back-end development with Java, Spring Boot, Node.js. Proficient in database management using MySQL and MongoDB, with experience in cloud computing and AWS services. Passionate about leveraging technology to develop innovative solutions that drive business growth and enhance user experiences.`

export const ABOUT_TEXT = `Hello! I’m Shruti Joshi from Seattle, USA, currently pursuing MS in Computer Science at Seattle University (GPA: 3.85). I hold a Bachelor's in Information Technology from Pune University.

I have experience as a Full-Stack Developer at Mastercard and a Associate Software Engineer at Accenture, where I worked on REST APIs, microservices, test automation. My expertise includes Java, React, Spring Boot, system design, Microservice architeture, REST APIs and CI/CD. Collaborated with solution architects, Product Managers in discussions on domain-driven design and software architecture.

Outside of work, I enjoy cooking, badminton and bollywood dancing. I’m currently seeking a Software Engineer internship or co-op, with a focus on full-stack or cloud development. Let’s connect!`;

export const EXPERIENCES = [
  {
    year: "Aug 2022 – Jun 2024",
    role: "Software Development Engineer I",
    company: "Mastercard (Pune, India)",
        description: `At Mastercard, I worked in the Loyalty and Benefits team, developing user-facing applications using Java, React, and Spring Boot. I leveraged SQL and the Axon Framework to build event-driven microservices, processing over 20,000 daily events with high scalability and performance, leading to a 20% boost in customer engagement. I automated tests for four microservices with the Karate framework, achieving 98% regression test coverage and improving testing efficiency, which enhanced service resiliency by 30%. My experience with cloud technologies, particularly AWS, ensured seamless deployment and scalability. Additionally, I contributed to CI/CD pipeline automation using XLR for artifact publishing, streamlining release processes. Collaborating with solution architects, I explored domain-driven design, expanding my expertise in system architecture. This role sharpened my skills in full-stack development, event sourcing, cloud technologies, and continuous integration.`,
        technologies: ["Java", "Spring Boot","Microservices", "React", "Karate Framework", "Axon Framework", "Agile", "AWS", "Cypress", "Jmeter"],
},

  {
    year: "Dec 2020 - Jul 2022",
    role: "Associate Software Engineer",
    company: "Accenture (Pune, India)",
      description: `At Accenture, I worked on migration of SOAP APIs to RESTful microservices for AT&T’s core services for US marketplace, improving performance and achieving 99.999% service availability. I developed an OTP-based authentication system using Java, RabbitMQ, SQL, Docker, and Kubernetes, enhancing security for US customers. I improved the UST tool with additional parameters, increasing data integrity by 25%. By using Elasticsearch and Kibana, I reduced P2/P3 ticket resolution time by 20%. I also automated sanity testing for APIs with Python, cutting manual testing by 90%, and boosting operational efficiency.`,
    technologies: ["Java", "Microservices", "Spring Boot", "Oracle SQL Dev", "Agile", "Putty", "Docker", "Kubernetes"],
  },
  {
    year: "Jan 2019 - Jun 2019",
      role: "L0 Trainee Engineer Intern",
      company: "Hewlett Packard Enterprise (Seattle, WA)",
      description: `Underwent extensive training offered by HPE, strengthening my expertise in data engineering and scalable computing.Worked in a three-member team to develop a Movie Recommendation System, performing data cleaning on the IMDb dataset and applying collaborative filtering techniques for improved recommendation accuracy. Gained hands-on experience with big data technologies like Hadoop, HDFS, Hive, and Apache Spark to efficiently process large datasets.`,
    technologies: ["Hadoop","HDFS", "HIVE","Apache Spark","JSP","Java"],
  },

];

export const PROJECTS = [
  {
    title: "Academic Chatbot: ",
    image: project2,  // Replace with the appropriate image variable or URL
    description:
      "Developed a specialized academic chatbot using Seq2Seq encoder-decoder model in Python, achieving 63% accuracy in query handling serving over 1000+ students.Implemented NLP techniques like stop-word removal and Jaro-Winkler for query matching. Published research on academic chatbots in the International Journal of VLSI Design and Technology.",
        technologies: ["TensorFlow", "Seq2Seq Encoder-Decoder Model", "Flask", "NLTK", "Python"]
},
{
  title: "Fake News Detection",
  image: project7,  // Replace with the appropriate image variable or URL
  description:
    "Developed a fake news classifier in Java using WEKA for machine learning-based detection.Extracted bigrams, trigrams, TF-IDF, ARI, and Jaccard similarity features to enhance classification accuracy.",
    technologies: ["Java", "WEKA", "TF-IDF", "ARI (Automated Readability Index)", "Jaccard Similarity", "Trigrams"],
  timeframe: "01/24 – 03/24"
    },
 {
   title: "Vacation Planner",
   image: project5,
   description:
      "Developed the vacation planner website using C# and .Net Framework features city search, likes, comments, travel tips, sorting, and filtering, with Google Maps API integration to enhance user experience. The project followed Agile methodology, with continuous iterations based on user feedback. Key metrics include 100% unit testing coverage, ensuring robustness and reliability, and deployment on Microsoft Azure, supporting scalability for multiple users. Multi-tab operations were implemented, ensuring updates in one window reflected instantly in others, and performance optimizations resulted in fast load times and smooth interactions.",
   technologies: ["C#", ".NET Framework", "JavaScript", "JSON", "HTML/CSS","Azure"],
  },
  /*{
    title: "AWS Cloud Computing: Cloud Native HR Management SAAS Application",
    image: project1,
    description:
      "I built a cloud-native SAAS application with REST APIs using EC2 instances, AWS S3, and DynamoDB. As part of this project, I developed microservices for employee profile and photo management, securing the APIs with OAuth 2.0 authorization. Additionally, I implemented automated deployment pipelines using Jenkins, which enhanced the CI/CD processes and reduced deployment time by 30%.",
    technologies: ["AWS", "REST API", "OAuth 2.0", "Jenkins", "CI/CD"],
  },*/
  {
    title: "Cybersecurity Awareness Website",
    image: project6,
    description:
      "Developed as a solo project, the cybersecurity website was created using HTML, CSS, and JavaScript, featuring a chat screen to answer cybersecurity-related questions in real-time. The Llama2 model was integrated through Ollama to generate accurate and relevant responses to user queries. Express was used for the frontend to handle dynamic content, while Node.js powered the backend to efficiently manage requests and ensure smooth communication between the frontend and the AI model. This project combined web development skills with AI integration, offering an interactive and informative platform for users interested in cybersecurity.",
      technologies: ["Express.js", "Node.js", "LLM", "Llama2 model", "Prompt Engineering", "Ollama"],
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
/*  {
    title: "EcoFinance: Strategic Financial Management System",
    image: project4,
    description:
      "Developed a full-stack budget management application featuring categorization, tracking, and visualization of periodic expenses. Utilized AngularJS for the frontend, Node.js with Express for the backend, and MySQL for efficient database management. Implemented Single Sign-On (SSO) to enhance security and streamline user authentication across platforms, reducing password-related issues by 40%. Deployed the application with Docker, Kubernetes, and Azure container services, achieving 99.9% uptime and ensuring robust performance.",
    technologies: ["Angular", "Node.js", "TypeScript", "Python", "Docker", "Kubernetes"],
  },*/

];
//
export const CONTACT = {
  address: "12th Ave Seattle, WA 98104 ",
  phoneNo: "+1 (201) 282 1146 ",
  email: "sjoshi2@seattleu.edu"
 };
