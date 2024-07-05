import { people01, people02, people03, project1, project2, project3, project4, project5, icon_dribbble, icon_fb_circle, icon_fb, icon_github, icon_linkedin_circle, icon_linkedin, icon_tiktok_circle, icon_tiktok, icon_upwork, portfolio_mockup_b, portfolio_mockup_w, lalimpieza, inprogress } from "../assets";

export const experiences = [
  {
    id: "experience-1",
    company: "Freelance Services",
    position: "Freelance Developer",
    date: "Feb 2024 - Present",
  },
  {
    id: "experience-2",
    company: "Google Developer Student Clubs - CRIMSON",
    position: "Assistant DevOps Technical Officer",
    date: "Aug 2023 - May 2024",
  },
  {
    id: "experience-3",
    company: "Venom Publication",
    position: "Layout Artist",
    date: "Aug 2023 - May 2024",
  },
  {
    id: "experience-4",
    company: "WMSU Youth Peace Mediators - UNESCO Club",
    position: "Multimedia Committee, Head",
    date: "July 2023 - May 2024",
  },
  {
    id: "experience-5",
    company: "Zamboanga City Water District",
    position: "HR Assistant, Intern",
    date: "May 2018",
  },
];


export const otherprojects = [
  {
    id: "otherproject-1",
    content: "After learning React and Tailwind, I decided to find a free web design and develop it from scratch to further enhance my skills in front-end development.",
    name: "Tasker",
    link: "https://tasker-project-management.netlify.app/",
    tools: ["React JS", "Taildwind", "daisyUI"]
  },
  /*{
    id: "otherproject-1",
    content: "I decided to dive into React and Tailwind and stumbled upon a simple tutorial. What started as a learning exercise quickly evolved into this weekend project, this experience helped me learn a lot about React!",
    name: "Hoobank",
    link: "https://bankmodernwebsit3.netlify.app/",
    tools: ["React JS", "Tailwind"]
  },*/
  {
    id: "otherproject-2",
    content: "This is a blog website about our educational tour around Luzon, Philippines on June 2023. This website was part of my academic requirement.",
    name: "Educational Tour Blog",
    link: "https://precious-salmiakki-803f40.netlify.app/",
    tools: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "otherproject-3",
    content: "This was my first personal portfolio I created as part of my academic requirements. Some of the sections are inspired, but hey, I won as the Best Portfolio in my batch and I loved this so much!",
    name: "First Portfolio",
    link: "https://arjaymalaga.netlify.app/",
    tools: ["HTML", "CSS", "JavaScript"]
  },
];


export const projects = [
  {
    id: "project-1",
    content: "The event management system streamlines planning, and executing events. It offers tools for scheduling, attendee registration, and real-time updates, ensuring successful event coordination.",
    name: "Event Management Web Portal",
    tools: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    role: "Backend Developer",
    img: project1,
    link: "https://github.com/JerichoSagdi0/wmsuphsi-main",
    link2: "https://github.com/JerichoSagdi0/wmsuphsi-main",
  },
  {
    id: "project-2",
    content: "A Smart Garbage Bin with Monitoring & Management System using Internet of Things (IoT). This system enhances urban cleanliness and efficiency, setting a new standard for smart city solutions.",
    name: "La Limpieza",
    tools: ["Arduino", "ESP32", "Blynk", "C++"],
    role: "IoT Developer",
    img: lalimpieza,
    link: "https://github.com/ArjayGithub-dev/LaLimpieza",
    link2: "https://drive.google.com/drive/folders/1YecHxalqfPuPZvCvVLEk1E9Sub1kW68e?usp=sharing",
  },
  /*{
    id: "project-3",
    content: "A project management platform that simplifies planning, collaboration, and execution with intuitive tools, real-time updates, and seamless team coordination, ensuring every project is a success.",
    name: "Tasker",
    tools: ["React JS", "Taildwind", "daisyUI"],
    role: "Front-End Developer",
    img: project4,
    link: "https://github.com/ArjayGithub-dev/tasker",
    link2: "https://tasker-project-management.netlify.app/",
  },*/
  {
    id: "project-3",
    content: "A multivendor e-commerce platform that facilitates seamless seller management, and customer engagement. This platform ensures a smooth and efficient shopping experience for all users.",
    name: "Multivendor Ecommerce",
    role: "Fullstack Developer",
    tools: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    img: inprogress,
    link: "https://github.com/ArjayGithub-dev",
    lin2: "https://github.com/ArjayGithub-dev",
  },
  {
    id: "project-4",
    content: "My professional portfolio is a comprehensive showcase of my skills and projects. It highlights my journey in my chosen field, featuring a range of work that demonstrates my expertise and dedication. ",
    name: "Professional Portfolio",
    role: "Front-End Developer, UI/UX Designer",
    tools: ["React JS", "Tailwind"],
    img: portfolio_mockup_b,
    link: "https://github.com/ArjayGithub-dev/arjay_portfolio",
    link2: "https://arjaygithub-dev.github.io/arjay_portfolio/",
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    content: "Arjay's expertise and dedication truly stand out. He took the time to understand our company's vision and delivered a marketing strategy that not only met but exceeded our expectations. Our brand's visibility and engagement have seen a remarkable increase, thanks to his efforts.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "testimonial-2",
    content: "Working with Arjay was a game-changer for our project. His technical skills and innovative approach transformed our ideas into a robust and user-friendly software solution. Arjay's commitment to excellence and attention to detail were evident in every phase of development.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "testimonial-3",
    content: "Arjay's creativity and strategic thinking were instrumental in revitalizing our social media campaigns. He consistently produced engaging content that resonated with our audience and significantly boosted our follower growth. Arjay's work has had a lasting positive impact on our brand's online presence.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const skills = [
  {
    title: "Languages",
    links: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "PHP" },
    ],
  },
  {
    title: "Frameworks",
    links: [
      { name: "Tailwind" },
      /*{ name: "Angular" },
      { name: "Laravel" },*/
      { name: "Bootstrap" },
      { name: "Next.js" },
      { name: "React.js" },
      { name: "jQuery" },
      { name: "Flask" },
    ],
  },
  {
    title: "Tools",
    links: [
      { name: "Google Colab " },
      { name: "Git & GitHub" },
      { name: "VSCode" },
      { name: "MySQL" },
      { name: "Vite" },
    ],
  },
  {
    title: "Design",
    links: [
      { name: "Adobe XD "},
      { name: "Figma "},
      { name: "Canva" },
    ],
  },
  {
    title: "Others",
    links: [
      { name: "Adobe Firefly" },
      { name: "Capcut" },
      /*{ name: "OpenAI" },
      { name: "Gemini" },*/
    ],
  },
];
