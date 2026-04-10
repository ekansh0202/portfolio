const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const wallpapers = [
  {
    id: 1,
    img: "/images/wallpaper1.png",
  },
  {
    id: 2,
    img: "/images/wallpaper2.png",
  },
  {
    id: 3,
    img: "/images/wallpaper3.png",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Safari",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
];


const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Javascript", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "MaterialUI", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Core Java"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ekansh0202",
  },
  {
    id: 2,
    text: "Github(Other)",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ekansh1602",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ekansh-anand-38a6a2129/",
  },
];

export {
  navLinks,
  navIcons,
  wallpapers,
  dockApps,
  techStack,
  socials,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Spendo",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-110", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Spendo.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack MERN application for tracking income and expenses with real-time data visualization. It features voice-based input integration using Speechly for enhanced accessibility and a fully responsive UI that ensures smooth, intuitive user interaction across devices.",
          ],
        },
        {
          id: 2,
          name: "expensemern",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ekanshexpensemern.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "spendo.png",
          icon: "/images/spendo.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/spendo.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Postnest",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A full-stack blogging platform featuring JWT-based authentication and complete CRUD functionality for post management. It ensures secure and efficient user workflows for creating, editing, and managing content, paired with a responsive, user-friendly interface optimized across devices.",
          ],
        },
        {
          id: 2,
          name: "postnest",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ekanshblog.netlify.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "postnest.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/blog.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A personal developer portfolio showcasing projects, technical skills, and experience in frontend & full stack web development.",
          ],
        },
        {
          id: 2,
          name: "portfolio",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ekanshportfolio.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/portfolio.png",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "School",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[50vh] left-7",
      children: [
        {
          id: 1,
          name: "School.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A freelancing project - School website built using HTML,CSS JavaScript, Reactjs and Emailjs",
          ],
        },
        {
          id: 2,
          name: "school",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://samarthschool.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "school.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/school.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/ekansh.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      image: "/images/ekansh.jpg",
      description: [
        "Hi, I’m Ekansh — a frontend engineer with 5+ years of experience building fast, user-friendly web apps.",
        "I enjoy simplifying complex ideas and creating smooth digital experiences." ,
        "Outside of work, I like exploring new places and unwinding with music or sports.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
