import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconCode } from "@tabler/icons-react";

const Info={
    name:"Aditya Kumar",
    stack:["Software Developer", "Full Stack Developer", "Problem solver", "Coder", "MERN stack Developer"],
    bio: "I'm a passionate full stack developer(MERN) currently persuing B.tech in CS specialization in AI from Techno India University , Kolkata . This is my Portfolio where you can check my latest Work. Let's connect and create something amazing together!              "
}


const ProjectInfo = [
    {
        title: "StudyNotion Ed-tech App",
        desc: "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. StudyNotion aims to provide: A seamless and interactive learning experience for students, making education more accessible and engaging. A platform for instructors to showcase their expertise and connect with learners across the globe",
        image: "StudyNotion.png",
        live: true,
        technologies: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB",],
        link: "https://study-notion-mega-project-seven.vercel.app/",
        github: "https://github.com/Adityakumar03/StudyNotion-Mega-project"
    },
    {
        title: "Hirrd - Job Portal",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Hirrd.png",
        live: true,
        technologies: ["ReactJS", "Tailwind CSS", "Supabase", "Clerk Authentication", "Shadcn UI"],
        link: "https://hirrd.vercel.app/",
        github: "https://github.com/Adityakumar03/Hirrd"
    },
    {
        title: "Klimate - Weather App",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Klimate.png",
        live: true,
        technologies: ["ReactJS", "Tailwind CSS", "Tanstack Query", "Typescript", "Recharts", "Openweather API", "Shadcn UI"],
        link: "https://klimate-seven.vercel.app/",
        github: "https://github.com/Adityakumar03/Klimate"
    },
    {
        title: "To-do React App",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Todo.png",
        live: false,
        technologies: ["Javascript", "ReactJS", "Redux"],
        link: "https://react-to-do-blond.vercel.app/",
        github: "https://github.com/Adityakumar03/React-to-do"
    },
    {
        title: "Password Generator",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "PWGenerator.png",
        live: false,
        technologies: ["HTML", "CSS", "Javascript",],
        link: "https://password-generator-app-delta.vercel.app/",
        github: "https://github.com/Adityakumar03/Password-generator-app"
    },
    
    {
        title: "Calculator",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Calculator.png",
        live: false,
        technologies: ["HTML", "CSS", "Javascript",],
        link: "https://calculator-sigma-gray-99.vercel.app/",
        github: "https://github.com/Adityakumar03/Calculator"
    },
    
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Python", "JavaScript", "SQL"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Npm"]
    }
]

const socialLinks = [
    { link: "https://github.com/Adityakumar03", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/itsmeadityakumar/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/imaditya.shandilya/", icon: IconBrandInstagram }, 
    { link: "https://www.geeksforgeeks.org/user/adityakumar03/", icon: IconCode },
    { link: " https://t.me/Imaditya_shandilya", icon: IconBrandTelegram }
];

const ExperienceInfo = [
    {
        role: "React JS Developer",
        company: "Celebal Technologies",
        date: "May 2024 - July 2024",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Vercel"]
    }
]

const Slugs = [
    "typescript",
    "javascript",
    "react",
    "angular",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export {Info , ProjectInfo ,socialLinks, SkillInfo , ExperienceInfo, Slugs}