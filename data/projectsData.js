import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [

  {
    id: 7,
    title: "AI-Powered Crypto Trading Platform",
    url: "",
    category: "Java Application /Web Application",
    img: "/images/crypto.jpg",
    ProjectHeader: {
      title: "AI Crypto Trading Platform",
      publishDate: "Apr 30, 2025",
      tags: "AI, Cryptocurrency, Trading Platform",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "AI Crypto Trading Platform",
        img: "/images/crypto.jpg",
      },

    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Full-Stack Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Develop a comprehensive AI-powered cryptocurrency trading platform with features like an AI Chat Bot, buy/sell functionality, portfolio management, advanced wallet features, transaction history, robust security, and a cutting-edge technology stack.",
      Technologies: [
        {
          title: "Backend",
          techs: ["Spring Boot", "MySQL DB", "Spring Security", "Java Mail Sender"],
        },
        {
          title: "Frontend",
          techs: ["React", "Tailwind CSS", "Redux", "Axios", "React-Router-Dom", "Shadcn UI"],
        },
        {
          title: "Payment Gateways",
          techs: ["Razorpay", "Stripe"],
        },
        {
          title: "APIs",
          techs: ["Gemini API", "CoinGecko API"],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Engineered a fully functional cryptocurrency trading platform integrating AI capabilities for user support and real-time market data analysis.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented a user-friendly interface for buying and selling a wide range of cryptocurrencies, coupled with robust portfolio management tools.",
        },
        {
          id: uuidv4(),
          details:
            "Developed advanced wallet functionalities including secure wallet-to-wallet transfers, direct withdrawals to bank accounts, and easy balance top-ups.",
        },
        {
          id: uuidv4(),
          details:
            "Ensured high security with features like secure login/registration and two-factor authentication.",
        },
        {
          id: uuidv4(),
          details:
            "Utilized a modern technology stack including Spring Boot for the backend, React for the frontend, and integrated with Gemini and CoinGecko APIs for real-time data.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 8,
    title: "Journal Management Application Backend",
    url: "",
    category: "Java Application",
    img: "/images/journal.jpg",
    ProjectHeader: {
      title: "Journal Management Backend",
      publishDate: "Apr 30, 2025",
      tags: "Spring Boot, Backend Development",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Journal Management Application",
        img: "/images/journal.jpg",
      },

    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Backend Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Develop a robust and scalable backend for a journal management application, focusing on user authentication, security, and efficient data handling.",
      Technologies: [
        {
          title: "Backend",
          techs: ["Spring Boot", "MongoDB", "Spring Security", "Java Mail Sender", "Kafka"],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Developed the backend infrastructure for a journal management application using Spring Boot, ensuring a secure and efficient system for managing user data and journal entries.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented secure user authentication with Google account integration and Spring Security for robust access control.",
        },
        {
          id: uuidv4(),
          details:
            "Integrated email automation for user notifications, enhancing the overall user experience.",
        },
        {
          id: uuidv4(),
          details:
            "Utilized Kafka for efficient message queuing and MongoDB as the primary database for scalable data storage and retrieval.",
        },
        {
          id: uuidv4(),
          details:
            "Focused on building a secure, efficient, and scalable backend system to handle user data and journal entries effectively.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 9,
    title: "Full-Stack Blogging Application",
    url: "https://stupendous-kringle-826a00.netlify.app/",
    category: " Java Application ",
    img: "/images/blog.jpeg",
    ProjectHeader: {
      title: "Responsive Blogging Platform",
      publishDate: "Apr 30, 2025",
      tags: "React, Full-Stack Development",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Blogging Application - Homepage",
        img: "/images/blog.jpeg",
      },

    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Full-Stack Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://stupendous-kringle-826a00.netlify.app/",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Design and develop a user-friendly and responsive full-stack blogging application with secure authentication and real-time updates.",
      Technologies: [
        {
          title: "Frontend",
          techs: ["React", "Responsive Design"],
        },
        {
          title: "Backend",
          techs: ["Node.js", "Express.js", "MongoDB"],
        },
        {
          title: "Authentication",
          techs: ["JWT Authentication"],
        },
        {
          title: "Realtime",
          techs: ["WebSockets"],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Designed and developed a full-stack blogging application with a strong emphasis on front-end functionality and user experience.",
        },
        {
          id: uuidv4(),
          details:
            "Created a fully responsive and user-friendly interface in React, allowing users to seamlessly create, edit, and delete blog posts.",
        },
        {
          id: uuidv4(),
          details:
            "Integrated secure user authentication to protect user data and ensure only authorized users can manage their content.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented real-time updates to enhance functionality and provide a dynamic user experience.",
        },
        {
          id: uuidv4(),
          details:
            "Demonstrates expertise in front-end development, full-stack application architecture, and delivering responsive, interactive web solutions.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 1,
    title: "Evo: AI Voice Assistant",
    url: "https://github.com/NadafAman/evo-a-voice-assistant.git",
    category: " Python Application",
    img: "/images/web-project-2.jpg",
    ProjectHeader: {
      title: "Evo AI Voice Assistant",
      publishDate: "Jul 26, 2024",
      tags: "AI Development",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Evo AI Voice Assistant",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Evo AI Voice Assistant",
        img: "/images/python.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Solo Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Develop an intelligent voice assistant that leverages cutting-edge AI technologies to provide seamless, context-aware interactions and assistive capabilities.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Python",
            "Speech Recognition",
            "Natural Language Processing",
            "OpenAI GPT",
            "Google Text-to-Speech",
            "Pygame",
            "NLTK",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Evo is an advanced AI-powered voice assistant designed to demonstrate the potential of conversational AI technologies. The project focuses on creating an interactive, intelligent system that can understand and respond to user queries across various domains.",
        },
        {
          id: uuidv4(),
          details:
            "Key features include natural language understanding, context retention, task automation, and the ability to perform complex interactions such as web searches, setting reminders, and providing informative responses.",
        },
        {
          id: uuidv4(),
          details:
            "The development process involved integrating multiple AI and speech technologies, creating a robust algorithm for natural conversation, and implementing error handling and context management.",
        },
        {
          id: uuidv4(),
          details:
            "Challenges included optimizing speech recognition accuracy, managing real-time processing, and creating a seamless user experience that feels natural and intuitive.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 2,
    title: "Virtual Whiteboard for Online Tutoring",
    url: "https://github.com/NadafAman/virtual-Board-for-online-Tutors",
    category: "Python Application",
    img: "/images/virBord.png",
    ProjectHeader: {
      title: "Online Tutoring Whiteboard",
      publishDate: "Jul 26, 2024",
      tags: "Education Technology",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Virtual Whiteboard",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Virtual Whiteboard",
        img: "/images/python.png",
      },
      {
        id: uuidv4(),
        title: "Virtual Whiteboard",
        img: "/images/virBord.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Solo Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Create an interactive online whiteboard that enables seamless remote teaching and learning experiences with real-time collaboration features.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Python",
            "Tkinter",
            "Socket Programming",
            "Pygame",
            "Websockets",
            "Collaborative Drawing",
            "Network Programming",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Developed a collaborative virtual whiteboard platform to address the challenges of remote education, focusing on creating an intuitive and interactive learning environment.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented real-time drawing and annotation features, allowing multiple users to interact simultaneously on a shared canvas with synchronized updates.",
        },
        {
          id: uuidv4(),
          details:
            "Utilized advanced networking techniques to ensure low-latency communication and smooth user experience across different network conditions.",
        },
        {
          id: uuidv4(),
          details:
            "Key challenges included managing concurrent user interactions, maintaining data consistency, and creating an intuitive user interface for diverse technical backgrounds.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 3,
    title: "Recipe Sharing Social Platform",
    url: "https://stupendous-kringle-826a00.netlify.app/",
    category: "Web Application ",
    img: "/images/food1.png",
    ProjectHeader: {
      title: "Recipe Sharing Network",
      publishDate: "Jul 26, 2024",
      tags: "Full-Stack Web Development",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Recipe Sharing Platform",
        img: "/images/food2.png",
      },
      {
        id: uuidv4(),
        title: "Recipe Sharing Platform",
        img: "/images/food2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Full-Stack Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Create a community-driven recipe sharing platform that enables culinary enthusiasts to discover, share, and interact with diverse cooking recipes from around the world.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React.js",
            "Next.js",
            "TailwindCSS",
            "Firebase Authentication",
            "Firestore Database",
            "React Hooks",
            "Responsive Design",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Developed a comprehensive recipe sharing platform that combines social networking features with culinary content management and user interaction.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented advanced features like recipe uploading, tagging, categorization, user profiles, and social interaction mechanisms.",
        },
        {
          id: uuidv4(),
          details:
            "Utilized modern web technologies to create a responsive, mobile-friendly application with smooth user experience and real-time updates.",
        },
        {
          id: uuidv4(),
          details:
            "Focused on creating an intuitive interface that allows users to easily discover, save, and share recipes while maintaining a clean and engaging design.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 4,
    title: "Event Management Web Application",
    url: "",
    category: "Web Application",
    img: "/images/eventApp.png",
    ProjectHeader: {
      title: "Event Management Platform",
      publishDate: "Jul 26, 2024",
      tags: "Web Application Development",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Event Management Platform",
        img: "/images/eventApp.png",
      },
      {
        id: uuidv4(),
        title: "Event Management Platform",
        img: "/images/eventApp2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Full-Stack Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Build a comprehensive event management platform that simplifies event creation, registration, and management for organizers and attendees.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Vue.js",
            "Vuex",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "Stripe Payment Integration",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Created a robust event management web application that streamlines the process of organizing, promoting, and participating in various types of events.",
        },
        {
          id: uuidv4(),
          details:
            "Developed features including event creation, ticketing, user registration, payment processing, and real-time event updates.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented secure authentication and authorization mechanisms to ensure user data protection and platform integrity.",
        },
        {
          id: uuidv4(),
          details:
            "Focused on creating an intuitive, responsive interface that provides a seamless experience for both event organizers and attendees.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 5,
    title: "Police Record Management System",
    url: "",
    category: "Java Application ",
    img: "/images/police2.jpg",
    ProjectHeader: {
      title: "Police Record Management",
      publishDate: "Jul 26, 2024",
      tags: "Java Desktop Application",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Police Record Management",
        img: "/images/police1.jpg",
      },
      {
        id: uuidv4(),
        title: "Police Record Management",
        img: "/images/police2.jpg",
      },
      {
        id: uuidv4(),
        title: "Police Record Management",
        img: "/images/police3.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Solo Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Develop a secure and efficient desktop application for managing police records with advanced search, filtering, and data management capabilities.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Java Swing",
            "MySQL",
            "JDBC",
            "Database Management",
            "Object-Oriented Programming",
            "Data Encryption",
            "User Authentication",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Created a comprehensive desktop application for law enforcement agencies to efficiently manage and track criminal records and case information.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented robust database management features with secure data storage, advanced search functionality, and detailed record tracking.",
        },
        {
          id: uuidv4(),
          details:
            "Developed a user-friendly interface using Java Swing, ensuring intuitive navigation and data interaction for law enforcement personnel.",
        },
        {
          id: uuidv4(),
          details:
            "Focused on data security, implementing encryption and access control mechanisms to protect sensitive information.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },

  {
    id: 6,
    title: "Framer Motion Animation Showcase",
    url: "https://challanges-framer-motion.vercel.app/",
    category: "Web Application",
    img: "/images/web-project-1.jpg",
    ProjectHeader: {
      title: "Advanced Web Animations",
      publishDate: "Jul 26, 2024",
      tags: "Frontend Animation Development",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Animation Showcase",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Animation Showcase",
        img: "/images/web-project-2.jpg",
      },

    ],
    ProjectInfo: {
      ClientHeading: "Personal Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Role",
          details: "Frontend Developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "--",
        },
        {
          id: uuidv4(),
          title: "Contact",
          details: "--",
        },
      ],
      ObjectivesHeading: "Project Objectives",
      ObjectivesDetails:
        "Demonstrate advanced web animation techniques using Framer Motion, showcasing interactive and engaging user interface animations.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React.js",
            "Framer Motion",
            "CSS Animations",
            "Responsive Design",
            "Interactive UI",
            "SVG Animations",
            "Typescript",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Overview",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Created a comprehensive showcase of advanced web animations using Framer Motion, highlighting the potential of modern frontend animation techniques.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented a variety of complex animation patterns, including page transitions, hover effects, scroll-triggered animations, and interactive UI elements.",
        },
        {
          id: uuidv4(),
          details:
            "Explored the capabilities of Framer Motion to create smooth, performant, and visually appealing animations that enhance user experience.",
        },
        {
          id: uuidv4(),
          details:
            "Focused on creating a responsive design that maintains animation quality across different device sizes and screen resolutions.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
];
