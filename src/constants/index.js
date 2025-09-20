import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import proj1 from "../assets/projects/uplounchr.png";
import proj2 from "../assets/projects/booky-stay.png";

export const HERO_CONTENT = `I am a passionate Full Stack Web Developer with experience in creating modern, responsive, and user-friendly websites and web applications. I specialize in frontend development using React.js and Tailwind CSS, while leveraging Git for version control and collaborative workflows. I am experienced in building scalable web solutions that follow best practices, maintainable code structure, and clean UI/UX design. Constantly learning new tools, frameworks, and technologies, I aim to deliver seamless, high-quality digital experiences that solve real-world problems`;

export const ABOUT_TEXT = `Hi, I'm Raazi from Sri Lanka — a passionate software developer . I specialize in React.js and modern web development technologies. I completed my Diploma and Higher National Diploma (HND) in Software Development from Pearson University, UK. My main focus is building dynamic, user-friendly web applications. I'm always excited to explore new tools, frameworks, and best practices in the development world. Constant learning and growth are what drive me as a developer.*
`;

export const EXPERIENCES = [
  {
    image: proj1,
    role: "UpLaunchr",
    company: "Google Inc.",
    description: `Uplanchr is a web application I developed and deployed on Vercel. It demonstrates my skills in modern web development, including React.js and Tailwind CSS, focusing on responsive design, user-friendly interface, and seamless functionality. This project showcases my ability to turn ideas into fully functional web applications.`,
    technologies: ["Javascript", "React.js", "TailwindCSS", "FramerMotion"],
    url: "https://uplaunchr.vercel.app"
  },
  {
    image: proj2,
    role: "BookyStay",
    company: "Adobe",
    description: `BookyStay is a hotel booking web application I developed, focusing on a smooth and user-friendly frontend experience. Built with modern web technologies, it allows users to browse hotels, check available rooms, view detailed information, and make bookings efficiently. This project demonstrates my ability to create responsive interfaces, manage dynamic data, and provide an intuitive experience for end users`,
    technologies: ["React.js", "TailwindCSS", "MongoDB", "Javascript"],
    url: "https://booky-stay.vercel.app"
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Sri Lanka ",
  phoneNo: "+94 77 525 8589",
    email: "mohdraazi105@gmail.com"
};
