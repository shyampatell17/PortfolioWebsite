import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
  CertificatesPageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Shyam Patel",
  logo: "/shyam.jpeg",
  email: "shyampatel1707@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Certificates",
    url: "/certificates",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/shyampatell17",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shyam-patel-0575a4155/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:shyampatel1707@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Shyam Patel",
    description:
      "Software Developer passionate about building innovative solutions and learning new technologies.",
    image: identity.logo,
  },
  role: "Software Developer",
  description:
    "I'm Shyam Patel, a software developer passionate about building innovative solutions and learning new technologies. I love creating efficient, scalable, and user-friendly applications.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
  featuredModules: [
    {
      title: "ShiftSmart Project Links",
      description: "Access the project's design resources and documentation.",
      links: [
        {
          title: "Wireframes & Design",
          url: "https://www.figma.com/design/qNMGxyYU0z3mR1Q3DOXkSC/ShiftSmart",
          icon: "mdi:file-document-outline"
        },
        {
          title: "Interactive Mockups",
          url: "https://www.figma.com/design/qNMGxyYU0z3mR1Q3DOXkSC/ShiftSmart?node-id=0-1&p=f",
          icon: "mdi:application"
        },
        {
          title: "Project Repository - Frontend",
          url: "https://github.com/harinreddy30/capstone-frontend",
          icon: "mdi:github"
        },
        {

          title: "Project Repository - Backend",
          url: "https://github.com/meetpatell07/capstone-backend",
          icon: "mdi:github"
        }
      ]
    },
    {
      title: "Project Documentation",
      description: "View detailed documentation and project files.",
      files: [
        {
          title: "Project Summary",
          url: "/files/Project_Summary.docx",
          icon: "mdi:file-document-outline"
        },
        {
          title: "Project Vision",
          url: "/files/Project_Vision.docx",
          icon: "mdi:book-open-outline"
        },
        {
          title: "Project Report",
          url: "/files/PR.docx",
          icon: "mdi:file-chart-outline"
        },
        {
          title: "Project Plan",
          url: "/files/Project_Plan.docx",
          icon: "mdi:file-chart-outline"
        },
        {
          title: "Requirements Analysis & Design",
          url: "/files/Requirements_Analysis_Design.docx",
          icon: "mdi:file-document-outline"
        },
        {
          title: "Status Report",
          url: "/files/Status_Reports.docx",
          icon: "mdi:file-document-outline"
        }
      ]
    }
  ]
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Shyam Patel",
    description: "Software Developer with expertise in full-stack development and modern web technologies.",
    image: identity.logo,
  },
  subtitle: "About Me",
  about: {
    description: `
I am a passionate Software Developer currently pursuing Computer Programming & Analysis at George Brown College. With a strong foundation in full-stack development and a keen interest in emerging technologies, I strive to create efficient, scalable, and user-friendly applications.
<br/><br/>
My technical expertise spans across various modern web technologies, including React, Node.js, TypeScript, and cloud platforms. I'm particularly enthusiastic about building innovative solutions that make a real impact.
<br/><br/>
Beyond coding, I actively engage in the tech community through volunteering and mentoring. I believe in continuous learning and staying updated with the latest industry trends to deliver cutting-edge solutions.`,
    image: {
      url: "/shyam.jpeg",
      alt: "Shyam Patel - Software Developer"
    },
    resume: {
      url: "/Shyam_Resume.pdf",
      label: "View My Resume"
    },
    coverLetter: {
      url: "/Shyam_Cover_Letter.pdf",
      label: "View My Cover Letter"
    }
  },
  work: {
    description: `Here's a glimpse of my professional journey and contributions to various organizations:`,
    items: [
      {
        title: "Software Developer Intern",
        company: {
          name: "Tata Consultancy Services",
          url: "https://www.tcs.com/",
        },
        date: "May 2023 - Aug 2023",
        description: "• Developed and maintained web applications using React.js and Node.js\n• Collaborated with cross-functional teams to implement new features and improve existing functionality\n• Participated in code reviews and contributed to technical documentation"
      },
      {
        title: "Teaching Assistant",
        company: {
          name: "George Brown College",
          url: "https://www.georgebrown.ca/",
        },
        date: "Sep 2023 - Present",
        description: "• Assisted professors in conducting programming labs and tutorials\n• Provided one-on-one guidance to students in Java, Python, and web development\n• Created and reviewed educational materials for programming courses"
      },
      {
        title: "Volunteer Web Developer",
        company: {
          name: "Code for Canada",
          url: "https://codefor.ca/",
        },
        date: "Jan 2023 - Apr 2023",
        description: "• Contributed to open-source projects focused on civic technology\n• Developed responsive web interfaces using modern frameworks\n• Collaborated with other volunteers to improve community websites"
      }
    ],
  },
  connect: {
    description: `I'm always open to new opportunities and collaborations. Whether you want to discuss a project, share ideas, or just connect, feel free to reach out through any of these platforms:`,
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Shyam Patel",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "FileDonutt",
      description: "Peer-to-peer file sharing platform powered by WebTorrent, enabling direct transfers without a server. Supports multiple files and up to 1TB storage.",
      image: "/filedonut.png",
      year: "2024",
      url: "https://github.com/shyampatell17/filedonutt",
    },
    {
      title: "LoFi Study Web",
      description: "A minimalistic lofi music streaming website designed to help users focus while studying or working. Featuring curated playlists of relaxing beats and ambient sounds.",
      image: "/lofi.png",
      year: "2024",
      url: "https://github.com/shyampatell17/LoFi-Study-Web",
    },
    {
      title: "Flappy Bird - Android Game",
      description: "A modern implementation of the classic Flappy Bird game developed for Android using Java, featuring custom physics, progressive difficulty, and local high score tracking.",
      image: "/flappy.avif",
      year: "2023",
      url: "https://github.com/shyampatell17/COMP3074-FinalProject-FlappyBird",
    },
    {
      title: "GBC Travel - Trip Planning Platform",
      description: "A comprehensive travel planning platform built for GBC students, featuring interactive trip planning, real-time weather updates, and collaborative itinerary creation.",
      image: "/travel.jpeg",
      year: "2023",
      url: "https://github.com/shyampatell17/GBC_Travel-Group-113",
    }
  ],
};

// Certificates (/certificates)
export const certificatesPageContent: CertificatesPageContent = {
  seo: {
    title: "Certificates | Shyam Patel",
    description: "My academic achievements and Dean's List recognition.",
    image: identity.logo,
  },
  subtitle: "My academic achievements and Dean's List recognition.",
  certificates: [
    {
      title: "Dean's List - Fall 2024",
      issuer: "George Brown College",
      description: "Recognized for outstanding academic achievement in Computer Programming & Analysis program, maintaining a GPA of 3.5 or higher.",
      date: "Fall 2024",
      url: "https://github.com/shyampatell17/Dean-s-List/blob/main/Dean_letter_101412165-Fall%202024.pdf",
      image: "/certificate.png"
    },
    {
      title: "Dean's List - Fall 2023",
      issuer: "George Brown College",
      description: "Achieved academic excellence in Computer Programming & Analysis program by maintaining a high academic standing.",
      date: "Fall 2023",
      url: "https://github.com/shyampatell17/Dean-s-List/blob/main/Dean_letter_101412165-Fall%202023.pdf",
      image: "/certificate.png"
    },
    {
      title: "Dean's List - Fall 2022",
      issuer: "George Brown College",
      description: "Demonstrated exceptional academic performance in Computer Programming & Analysis program during the semester.",
      date: "Fall 2022",
      url: "https://github.com/shyampatell17/Dean-s-List/blob/main/Dean_letter_101412165-fall%202022.pdf",
      image: "/certificate.png"
    }
  ],
};
