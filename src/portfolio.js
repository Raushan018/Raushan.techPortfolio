/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raushan Kumar",
  title: "Hi all, I'm Raushan",
  subTitle: emoji(
    "A passion-driven Full Stack Developer building scalable, pixel-perfect web applications. Focused on clean architecture, performance, and seamless user experiences."
  ),
  resumeLink:
    "/Raushan_Resume_Oc.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rsn2711",
  linkedin: "https://linkedin.com/in/raushan-kumar-454645261",
  gmail: "kumarraushan2797@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "https://www.instagram.com/raush_n.kr?igsh=NHN2NnV5dXJvZWww",
  unstop: "https://unstop.com/u/roshakum8708",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ARCHITECTING SCALABLE WEB APPS & INTELLIGENT IOT SOLUTIONS",
  skills: [
    emoji(
      "⚡ Building responsive Full Stack applications using React.js, Node.js, and Modern Web Technologies"
    ),
    emoji("⚡ Designing and implementing Real-time IoT Systems with ESP32 and Computer Vision"),
    emoji(
      "⚡ Optimizing performance and scalability of data-driven applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Netaji Subhash Engineering College, Garia",
      logo: require("./assets/images/nsec.jpg"),
      subHeader: "B.Tech in Electronics and Communication",
      duration: "June 2022 – 2026",
      desc: "West Bengal, India",
      descBullets: [
        "Specialized in IoT, Embedded Systems, and Full Stack Development."
      ]
    },
    {
      schoolName: "Jagjiwan College Gaya",
      logo: require("./assets/images/jagjiwan.jpg"),
      subHeader: "Higher Secondary Education",
      duration: "Apr 2019 – Mar 2021",
      desc: "Gaya, Bihar, India",
      descBullets: []
    },
    {
      schoolName: "D.A.V Public School, Sherghati",
      logo: require("./assets/images/dav.jpg"),
      subHeader: "Secondary Education (CBSE Board)",
      duration: "Apr 2018 – Mar 2019",
      desc: "Gaya, Bihar, India",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "IoT & Embedded Systems",
      progressPercentage: "85%"
    },
    {
      Stack: "Algorithms & Data Structures",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Zero To Launch",
      companylogo: require("./assets/images/programmer.svg"),
      date: "1 Month Internship",
      desc: "Work on website frontend and backend both",
      descBullets: [
        "Designed, developed, tested, and maintained scalable web and mobile applications.",
        "Worked across both frontend and backend technologies to deliver end-to-end solutions aligned with project requirements.",
        "Debugged complex issues, optimized application performance, and improved overall system reliability."
      ]
    },
    {
      role: "IoT & Embedded Systems Intern",
      company: "Jadavpur University",
      companylogo: require("./assets/images/ju_logo.jpg"),
      date: "May 2025 – July 2025",
      desc: "Hands-on experience with ESP32/Arduino, sensors, and real-time hardware interfacing",
      descBullets: [
        "Built IoT systems for data acquisition, processing, and cloud connectivity",
        "Developed optimized embedded C/C++ code and worked with UART, I2C, SPI, MQTT",
        "Strengthened skills in debugging, system integration, and hardware–software co-design"
      ]
    },
    {
      role: "Data Science Intern",
      company: "NIELIT Kolkata",
      companylogo: require("./assets/images/nielit_logo.png"),
      date: "Completed",
      desc: "Blockchain, Big Data & Data Science",
      descBullets: [
        "Analyzed large-scale datasets to identify trends and optimize data models.",
        "Implemented foundational Blockchain concepts for secure, decentralized data verification."
      ]
    },
    {
      role: "Coming Soon",
      company: "New Opportunity",
      companylogo: require("./assets/images/skill.svg"),
      date: "Future",
      desc: "Looking forward to new challenges.",
      descBullets: [
        "Expanding skills and exploring new horizons.",
        "Open to innovative projects and collaborations."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "ENGINEERING ROBUST & SCALABLE SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/cinesync.png"),
      projectName: "CineSync – Distributed Real-Time Watch Party",
      projectDesc: "Architected a room-based event broadcasting system using Socket.io for synchronized video playback across clients. Implemented host authority logic for controlled playback management and managed state synchronization with minimal latency using WebRTC.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Raushan018"
        }
      ]
    },
    {
      image: require("./assets/images/smart_lift.png"),
      projectName: "IoT Smart Grid for Elevators",
      projectDesc: "Designed an automated elevator control system integrating Computer Vision for crowd detection, optimizing energy consumption and user wait time.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Raushan018"
        }
      ]
    },
    {
      image: require("./assets/images/resume_ats.png"),
      projectName: "AI-Powered Resume ATS",
      projectDesc: "Engineered a full-stack applicant tracking system (ATS) parser. Implemented RESTful APIs with Node.js to score resumes against job descriptions using keyword matching algorithms.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Raushan018"
        }
      ]
    },
    {
      image: require("./assets/images/underwater.png"),
      projectName: "Adaptive Underwater Image Enhancement",
      projectDesc: "Developed an adaptive system using DSP & Computer Vision to restore underwater image visibility. Achieved ~23% improvement over fixed methods by dynamically estimating depth and adjusting contrast/gamma without deep learning.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Raushan018"
        }
      ]
    },
    {
      image: require("./assets/images/netflix.png"),
      projectName: "Netflix Clone",
      projectDesc: "Built a fully functional Netflix clone using React.js and TMDB API. Features include dynamic movie trailers (react-youtube), real-time data fetching, genre categorization, and a pixel-perfect responsive UI matching the original platform.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Raushan018"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Patent Offer",
      subtitle:
        "Received a patent offer from Jadavpur University for inventing a Smart Lift System.",
      image: require("./assets/images/patent_v2.png"),
      imageAlt: "Patent Offer Logo",
      footerLink: []
    },
    {
      title: "Oracle Certified Foundations Associate",
      subtitle:
        "AI Foundations (OCI 2025)",
      image: require("./assets/images/oracle_v2.png"),
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Hack 4 Bihar 2025",
      subtitle: "Finalist in a state-level hackathon.",
      image: require("./assets/images/hack4bihar.png"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    },
    {
      title: "500+ DSA Problems",
      subtitle: "Solved 500+ Data Structures & Algorithms problems on Leetcode.",
      image: require("./assets/images/leetcode_v2.png"),
      imageAlt: "Leetcode Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "kumarraushan2797@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
