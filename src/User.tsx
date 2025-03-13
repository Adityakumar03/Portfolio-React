import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconCode } from "@tabler/icons-react";

const Info={
    name:"Aditya Kumar",
    stack:["Software Developer", "Full Stack Developer", "Problem solver", "Coder", "MERN stack Developer"],
    bio: "I'm a passionate Full stack developer (MERN) currently persuing B.tech in Computer science specialization in AI from Techno India University , Kolkata . This is my Portfolio where you can check my latest Work.  "
}


const ProjectInfo = [
    {
        title: "StudyNotion EdTech App",
        desc: "StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. StudyNotion aims to provide: A seamless and interactive learning experience for students, making education more accessible and engaging. A platform for instructors to showcase their expertise and connect with learners across the globe",
        image: "StudyNotion.png",
        live: true,
        technologies: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB",],
        link: "https://studynotion-frontend-kohl-eight.vercel.app/",
        github: "https://github.com/Adityakumar03/StudyNotion-EdTechApp"
    },
    {
        title: "Reflct - Journal App",
        desc: "Reflct is a full stack Journal app built using ReactJs, Tailwind CSS and Shadcn UI that enables user to create , edit and publish Journal . Ability to create entries in Rich-text editor . Features like Analytics Dashboard which gives us the statistics and newline summary of the mood based on journal entries .",
        image: "Reflct.png",
        live: true,
        technologies: ["ReactJS", "Tailwind CSS", "Supabase", "Clerk Authentication", "Shadcn UI"],
        link: "https://reflct-six.vercel.app/",
        github: "https://github.com/Adityakumar03/Reflct"
    },
    {
        title: "Klimate - Weather App",
        desc: "Klimate is a full stack weather app built using React JS with Tailwind CSS, Tanstack Query, Tyoescript, Recharts, Openweather API and Shadcn UI Tutorial . Features like current weather current weather location tracking . A special features like 24-hour graphical forecasts using OpenWeather API and Recharts",
        image: "Klimate.png",
        live: true,
        technologies: ["ReactJS", "Tailwind CSS", "Tanstack Query", "Typescript", "Recharts", "Openweather API", "Shadcn UI"],
        link: "https://klimate-seven.vercel.app/",
        github: "https://github.com/Adityakumar03/Klimate"
    },
    {
        title: "To-do React App",
        desc: "To-do App built using HTML , CSS , Javascript and React JS . User can add task and then edit task as well and if the task get completed , user can  mark task as completed . The task is being saved on Local storage and Browser is fetching data from Local storage ",
        image: "Todo.png",
        live: false,
        technologies: ["Javascript", "ReactJS", "Redux"],
        link: "https://react-to-do-blond.vercel.app/",
        github: "https://github.com/Adityakumar03/React-to-do"
    },
    {
        title: "Password Generator",
        desc: "A website called Password Genertor , which creates random passowrd of length between 1 - 20 . After creaating password , user can copy that password and paste anywhere . The user can have multiple choice to create password of their wish [Includes Upper case , Includes Lower case , Includes numbers , Includes symbol]",
        image: "PWGenerator.png",
        live: false,
        technologies: ["HTML", "CSS", "Javascript",],
        link: "https://password-generator-app-delta.vercel.app/",
        github: "https://github.com/Adityakumar03/Password-generator-app"
    },
    
    {
        title: "Calculator",
        desc: "A simple web based Calculator that has ability to do all the fundamental calculations like add, substract , multiply , divide and more ... ",
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
    { link: "https://www.instagram.com/iamaditya.jha/", icon: IconBrandInstagram }, 
    { link: "https://www.geeksforgeeks.org/user/adityakumar03/", icon: IconCode },
    { link: " https://t.me/iamaditya_jha", icon: IconBrandTelegram }
];

const ExperienceInfo = [
    {
        role: "React JS Developer",
        company: "Celebal Technologies",
        date: "May 2024 - July 2024",
        desc: "I led software development with React JS creating scalable microservices and interfaces. I optimized performance by integrating frontend , and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Vercel"]
    }
]

const Slugs = [
    "typescript",
    "javascript",
    "react",
    "angular",
    "html5",
    "css3",
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
    "sonarqube",
    "figma",
];

export {Info , ProjectInfo ,socialLinks, SkillInfo , ExperienceInfo, Slugs}