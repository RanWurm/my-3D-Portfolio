import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  c,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  warrantify,
  fakebook,
  eyal,
  threejs,
  playlistconverter,
  multithread,
  neuralnetwork,
  arkanoid,
  amit,
  tomer,
  roni,
  java
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Low Level Programing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "Ran is one of the smartest student's i ever had the pleasure to work with,",
    name:"Eyal Wurmbrand",
    designation: "employee",
    company: "Intel",
    image: eyal,
  },
  {
    testimonial:
      "Collaborating with you, a talented CS student from another university, has broadened my perspective and enriched my coding journey.",
    name: "Amit Messika",
    designation: "Computer Science Student",
    company: " BGU",
    image: amit,
  },
  {
    testimonial:
    "Your mentorship transformed my CS studies—turning complex topics into accessible challenges and inspiring my academic growth.",
    name: "Tomer pisakov",
    designation: "employee",
    company: "BillRun",
    image: tomer,
  },
  {
  testimonial:
    "Ran is one of the smartest students I've ever had the pleasure of working with, earning his nickname as the human debugger for his uncanny ability to pinpoint even the most elusive bugs.,",
    name:"Roni Jack Vituli",
    designation: "employee",
    company: "Expander",
    image: roni,
  },
];

const projects = [
  {
    name: "Warrantify",
    description:
      "Warrantify is a versatile warranty management platform for electric products. Users can store and track warranties, locate service centers, and receive AI-driven recommendations, all through an intuitive interface. Built with React Native, Node.js, Python, and AWS, Warrantify combines user-friendly design with advanced technology to help users stay organized and informed",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: warrantify,
    source_code_link: "https://github.com/RanWurm/Warrantify",
  },
  {
    name: "FakeBook",
    description:
      "FakeBook is a versatile social media platform available on both web and Android. Users can easily register, log in, and enjoy a range of features, such as interacting with posts, liking, commenting, and switching to a dark mode for improved usability. This innovative platform offers a seamless experience across devices, ensuring engaging social interactions anytime, anywhere.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Html-css",
        color: "pink-text-gradient",
      },
    ],
    image: fakebook,
    source_code_link: "https://github.com/RanWurm/FakeBook-social-media",
  },
  {
    name: "PlayListConverter",
    description:
      "Experience seamless music migration with our Spotify to YouTube Playlist Converter. Transform your favorite Spotify collections into YouTube playlists with just a click. Enjoy cross-platform flexibility, preserve your musical curation, and share your tunes effortlessly. Elevate your music streaming experience – convert your playlists now!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Music",
        color: "green-text-gradient",
      },
      {
        name: "TailWind",
        color: "pink-text-gradient",
      },
    ],
    image: playlistconverter,
    source_code_link: "https://www.playlistconverter.site//",
  },
  {
    name: "Multi Thread News App",
    description:
      "This project implements a robust system simulation, designed to showcase key operating system concepts such as process scheduling, multithreading, synchronization, and inter-process communication (IPC). The system is built in C and leverages advanced concurrency mechanisms to manage resources efficiently while executing multiple tasks in parallel.",
    tags: [
      {
        name: "Multi-Threaded",
        color: "blue-text-gradient",
      },
      {
        name: "Parallel-Programing",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: multithread,
    source_code_link: "https://github.com/RanWurm/Multi-Threaded-News-App",
  },
  {
    name: "Neural-Network",
    description:
      "This project is designed as part of an innovative educational series to enhance understanding of advanced data analysis techniques and methodologies. Assignment 5 delves into complex methods that integrate rigorous statistical analysis, predictive modeling, and insightful data visualization to extract meaningful insights from extensive large datasets.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "Neural-Network",
        color: "pink-text-gradient",
      },
    ],
    image: neuralnetwork,
    source_code_link: "https://github.com/RanWurm/Neural-Network",
  },
  {
    name: "Arkanoid",
    description:
     "This project is a comprehensive Java-based implementation of the timeless Arkanoid game, developed as part of an advanced Object-Oriented Programming (OOP) course curriculum at Bar Ilan University. The engaging game features multiple challenging levels with increasing difficulty, an intricate scoring system, and various exciting power-ups designed to enhance player experience.",
    tags: [
      {
        name: "OOP",
        color: "blue-text-gradient",
      },
      {
        name: "Gaming",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: arkanoid,
    source_code_link: "https://github.com/RanWurm/Arkanoid",
  },
];

export { services, technologies, experiences, testimonials, projects };
