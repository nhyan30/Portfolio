export const projects = [
  {
    id: "vistra",
    title: "Facial Expression Detection",
    description: "Deep learning-based Facial Expression Recognition system that detects and classifies emotions in real time.",
    image: "https://images.unsplash.com/photo-1695902173528-0b15104c4554",
    tags: ["AI", "Deep Learning", "CNN"],
    emoji: "👁️",
    duration: "4 months",
    teamSize: 3,
    role: "AI Engineer & Team Lead",
    features: [
      "Adaptive emotion-aware interface",
      "Real-time expression analysis",
      "Raw data modeling",
      "Smart analytics dashboard",
      "Emotion analytics dashboard",
      "Ethical surveillance module"
    ],
    technologies: [
      {
        name: "Python",
        description: "Backend development and data processing"
      },
      {
        name: "TensorFlow",
        description: "Building and training CNN for emotion detection"
      },
      {
        name: "OpenCV",
        description: "Face detection and real-time video processing"
      },
    ],
    challenges: [
      "Achieving high accuracy with a custom CNN model",
      "Handling low-resolution and imbalanced data",
      "Ensuring real-time inference with limited resources",
      "Developing a robust system that generalizes across diverse faces"
    ],
    solutions: [
      "Built custom CNN achieving ~60% emotion detection accuracy",
      "Applied data augmentation for balanced, robust training",
      "Optimized pipelines for low-latency, real-time inference",
      "Used regularization techniques for improved model generalization"
    ],
    stats: [
      "95% Prediction Accuracy",
      "99% Faster Analysis",
      "60% Risk Reduction",
      "100% Operational Efficiency Boost"
    ],
    testimonial: {
      quote: "Vistra has transformed how we handle future analysis. What used to take weeks now happens in minutes.",
      author: "Senior Government Official",
      role: "Dubai Customs"
    },
    github: "https://github.com/nhyan30/Facial-Expression-Detection-Real-Time",
  },
  {
    id: "banders-potato-app",
    title: "PascalAdvisor App",
    description:
      "Smart recycling assistant mobile app that helps users recycle, upcycle, and locate nearby recycling centers.",
    image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4",
    tags: ["Flutter", "Firebase", "Google Maps API"],
    emoji: "♻️",
    duration: "6 months",
    teamSize: 1,
    role: "Lead Mobile Developer",
    features: [
      "Material recognition engine for smart recycling suggestions",
      "Real-time recycling center finder with map integration",
      "Personalized DIY tutorial generator for sustainable reuse",
      "In-app item manager for adding, viewing, and categorizing waste",
      "Integrated support and ticketing system for user inquiries",
      "Robust role-based access for guests, users, moderators, and admins"
    ],
    technologies: [
      { 
        name: "Flutter", 
        description: "Cross-platform development framework" },
      {
        name: "Firebase",
        description: "Cloud-based backend platform for data sync"
      },
      {
        name: "Google Maps API",
        description: "Enables location-based recycling center services"
      }
    ],
    challenges: [
      "Achieving accurate on-device material recognition",
      "Ensuring seamless recycling center data integration",
      "Maintaining secure authentication and user data privacy"
    ],
    solutions: [
      "Utilized TensorFlow Lite for on-device material detection",
      "Integrated role-based access with Firebase Authentication rules",
      "Built REST APIs for seamless recycling center data access"
    ],
    github: "https://github.com/nhyan30/PascalAdvisor"
  },
  {
    id: "automated-review-system",
    title: "Parking Detection System",
    description:
      "Smart parking detection web app using Convolutional Neural Networks (CNNs) to improve parking management in urban areas",
    image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb",
    tags: ["Python", "Flask", "TensorFlow"],
    emoji: "🚗",
    duration: "4 months",
    teamSize: 2,
    role: "AI Engineer & Team Lead",
    features: [
      "Automated parking slot classification with CNN",
      "Confidence-based prediction display for each slot",
      "Interactive results dashboard with comparative model metrics",
      "Batch processing for large parking lot images"
    ],
    technologies: [
      { 
        name: "Python",
        description: "Model training and pipeline integration" },
      { 
        name: "Flask",
        description: "Backend framework for serving prediction APIs" },
      {
        name: "TensorFlow", 
        description: "Framework for building deep learning models"
      }
    ],
    challenges: [
      "Handling varying lighting conditions in parking images",
      "Achieving high accuracy across diverse parking scenarios",
      "Processing large image datasets efficiently"
    ],
    solutions: [
      "Optimized model inference for real-time performance",
      "Utilized data augmentation to handle varied lighting conditions",
      "Built a user-friendly dashboard for quick result analysis"
    ], 
    github: "https://github.com/nhyan30/Parking-Occupancy-Detection"
  },
  {
    id: "malware-detection-cnn",
    title: "Desert Reckless Adventure",
    description:
      "3D animation that follows the transformative journey of an Emirati man as he escapes the structured confines of a city parking lot and plunges into the wild freedom of the desert.",
    image: "https://images.unsplash.com/photo-1648812374781-52ab0572571f",
    tags: ["Autodesk 3ds Max", "Craft Director Studio"],
    emoji: "🎥",
    duration: "5 months",
    teamSize: 2,
    role: "3D Modeler",
    features: [
      "3D rigged car with realistic motion dynamics",
      "High-fidelity dust and smoke simulations",
      "Integrated Craft Director Studio for car physics",
      "Cinematic camera angles and depth of field"
    ],
    technologies: [
      { name: "Autodesk 3ds Max", description: "3D modeling, rigging, and animation" },
      { name: "Craft Director Studio", description: "Realistic car dynamics and motion" }
    ],
    challenges: [
      "Achieving realistic car dynamics across terrains",
      "Seamless transition between urban and desert scenes",
      "Optimizing rendering for high-quality, complex environments"
    ],
    solutions: [
      "Utilized Craft Director Studio for precise car physics",
      "Blended animations for smooth scene transitions",
      "Leveraged VRay and Phoenix FD for realistic effects"
    ],
    github: "https://github.com/nhyan30/Desert-Reckless-Adventure-3D"
  },
  {
    id: "kitchensync-app",
    title: "Red Light, Green Light Game",
    description:
      "Unity project is a reimagined, high-intensity version of the iconic “Red Light, Green Light” game inspired by Squid Game.",
    image: "https://images.unsplash.com/photo-1665041982909-8a86864a1e49",
    tags: ["Unity Engine", "C#"],
    emoji: "🎮",
    duration: "3 months",
    teamSize: 3,
    role: "Lead Game Developer",
    features: [
      "Realistic physics-based movement mechanics",
      "Dynamic AI-driven NPC behavior",
      "Increasing difficulty with escalating tempo",
      "Time-sensitive Red Light / Green Light mechanics"
    ],
    technologies: [
      {
        name: "Unity Engine",
        description: "Core game development and physics simulation"
      },
      {
        name: "C#",
        description: "Gameplay logic and character controls"
      }
    ],
    challenges: [
      "Achieving precise character stopping mechanics",
      "Balancing NPC behavior and player difficulty",
      "Synchronizing animation and sound effects reliably"
    ],
    solutions: [
      "Utilized Rigidbody physics for precise stopping control",
      "Developed AI-driven NPCs with adjustable difficulty settings",
      "Synced animations and sound cues via Unity’s Timeline"
    ],
    github: "https://github.com/nhyan30/RedLightGreenLight-Unity",
    link: "https://nhyan30.itch.io/squid-game"
  },
  {
    id: "edumentor",
    title: "Finance Tracker App",
    description:
      "A user-friendly finance tracking app to help users monitor and manage expenses effectively.",
    image:
      "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6",
    tags: ["Flutter", "AI", "Firebase"],
    emoji: "📚",
    duration: "6 months",
    teamSize: 1,
    role: "AI Developer & Mobile App Developer",
    features: [
      "Customized quiz generation using GPT",
      "Tracking scores and progress by chapter",
      "Targeted exercises for weak areas",
      "Dynamic UI tailored for Health and Nutrition students"
    ],
    technologies: [
      {
        name: "Flutter",
        description: "Framework for cross-platform app development"
      },
      { name: "Firebase", description: "Backend for user data and analytics" },
      { name: "GPT-based Engine", description: "For AI-generated questions" }
    ],
    challenges: [
      "Building dynamic GPT-based question generation",
      "Ensuring a personalized experience for each student",
      "Integrating real-time updates for student progress"
    ],
    solutions: [
      "Designed an AI-driven system for tailored quizzes",
      "Used Firebase to synchronize data in real-time",
      "Developed intuitive analytics dashboards for users"
    ],
  },
  {
    id: "sejda-space",
    title: "Midi Composer App",
    description:
      "Music composition app, enabling users to create, edit, and share their musical pieces effortlessly.",
    image:
      "https://images.unsplash.com/photo-1641994245114-38cb2df59881",
    tags: ["Flutter", "Firebase"],
    emoji: "🎧",
    duration: "4 months",
    teamSize: 1,
    role: "Full Stack Developer",
    features: [
      "Offline Quran reading",
      "Audio recitation with multiple Qaris",
      "Qibla locator using GPS and compass",
      "Comprehensive Hadith collection",
      "Multilingual support for diverse users"
    ],
    technologies: [
      { name: "Flutter", description: "Framework for mobile app development" },
      { name: "Firebase", description: "Backend for storage and analytics" }
    ],
    challenges: [
      "Ensuring offline-first functionality for the Quran",
      "Accurate Qibla direction integration",
      "Supporting multiple languages seamlessly"
    ],
    solutions: [
      "Utilized local storage for offline content access",
      "Integrated compass and GPS APIs for precise Qibla directions",
      "Implemented an i18n solution for multilingual support"
    ]
  },
  {
    id: "medical-center-dbms",
    title: "Active Recall System",
    description:
      "AI test maker aiming to imporve active recall by progressing user through the different levels of bloomstaxonomy.",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7",
    tags: ["Python", "Database"],
    emoji: "🏥",
    duration: "2 months",
    teamSize: 4,
    role: "AI Engineer",
    features: [
      "Patient record management",
      "Appointment scheduling system",
      "Doctor and staff database",
      "Reporting system for operations analytics"
    ],
    technologies: [
      {
        name: "SQL",
        description: "Structured Query Language for managing databases"
      }
    ],
    challenges: [
      "Designing a scalable database schema",
      "Ensuring data integrity and security",
      "Optimizing queries for performance"
    ],
    solutions: [
      "Developed a normalized schema to minimize redundancy",
      "Implemented role-based access control for security",
      "Optimized SQL queries for faster data retrieval"
    ],
    github: "https://github.com/WahabBasa/BloomAI"
  },
  {
    id: "wheel-of-balance",
    title: "Flappy Bird Game",
    description: "A comprehensive life management and personal development web application helping users track and enhance different aspects of their lives through visual goal tracking and progress monitoring.",
    image: "https://images.unsplash.com/photo-1632765743329-3b257fe779a6",
    tags: ["Unity", "Tailwind", "Firebase"],
    emoji: "🎮",
    duration: "2 weeks",
    teamSize: 1,
    role: "Lead Game Developer",
    features: [
      "Interactive life wheel visualization",
      "Goal setting and tracking system",
      "Progress analytics dashboard",
      "Personalized action plans",
      "Real-time data synchronization",
      "Mobile-responsive design"
    ],
    technologies: [
      {
        name: "React",
        description: "Frontend framework for building the user interface"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for styling"
      },
      {
        name: "Firebase",
        description: "Backend platform for authentication and data storage"
      }
    ],
    challenges: [
      "Creating an intuitive visualization for life balance metrics",
      "Implementing real-time progress tracking",
      "Ensuring smooth mobile responsiveness",
      "Building an engaging user experience"
    ],
    solutions: [
      "Developed a dynamic radar chart for life wheel visualization",
      "Utilized Firebase Realtime Database for instant updates",
      "Implemented responsive design patterns using Tailwind CSS",
      "Created an intuitive and clean user interface"
    ],
    github: "https://github.com/zeck00/GoalRadar",
    link: "https://wheelofbalance.org"
  },
  {
    id: "dar-al-maha",
    title: "Samir Al Bahr",
    description: "2D animation project that brings to life an adventurous and curious sea creature with a heartfelt mission.",
    image: "https://images.unsplash.com/photo-1628494391268-c9935bc384d5",
    tags: ["React", "Bilingual", "Web Design"],
    emoji: "📚",
    duration: "1 week",
    teamSize: 1,
    role: "Frontend Developer",
    features: [
      "Bilingual content management",
      "Responsive book showcase gallery",
      "Contact form integration",
      "Smooth page transitions",
      "Publication catalog system",
      "Modern minimalist design"
    ],
    technologies: [
      {
        name: "React",
        description: "Frontend library for building the user interface"
      },
      {
        name: "i18next",
        description: "Internationalization framework for bilingual support"
      },
      {
        name: "Framer Motion",
        description: "Animation library for smooth transitions"
      }
    ],
    challenges: [
      "Implementing seamless language switching",
      "Maintaining consistent RTL/LTR layouts",
      "Optimizing performance with image-heavy content",
      "Creating a cohesive bilingual user experience"
    ],
    solutions: [
      "Built a robust i18n system for language management",
      "Developed flexible layouts that work in both directions",
      "Implemented lazy loading and image optimization",
      "Created a unified design system for both languages"
    ],
    github: "https://github.com/zeck00/daralmaha",
    link: "https://daralmaha.netlify.app/"
  },
]

export const experiences = [
  {
    title: "Full Stack Mobile App Developer",
    company: "Bander's Potato",
    period: "Aug 2024 – Present",
    description:
      "Leading mobile app development and implementing innovative features like loyalty points and branch mapping.",
    companyUrl: "https://www.banderspotato.com"
  },
  {
    title: "President",
    company: "UOS ACM Student Chapter",
    period: "Aug 2024 – Present",
    description:
      "Driving innovation through technical initiatives and organizing developer-centric events.",
    companyUrl: "https://www.sharjah.ac.ae/en/Academics/CI/ACM-Student-Chapter"
  },
  {
    title: "Technical Operations Manager",
    company: "Esaal",
    period: "Jan 2024 – Jun 2024",
    description:
      "Managed technical operations and led seamless app integrations and feature launches.",
    companyUrl: "https://www.esaal.co"
  },
  {
    title: "Flutter Developer",
    company: "Esaal",
    period: "Jun 2023 – Jun 2024",
    description: "Designed and maintained cross-platform mobile applications.",
    companyUrl: "https://www.esaal.co"
  },
  {
    title: "AI & DL Engineer",
    company: "University of Sharjah",
    period: "May 2023 – Jan 2024",
    description:
      "Developed AI models for urban research, focusing on NLP and machine learning.",
    companyUrl: "https://www.sharjah.ac.ae"
  },
  {
    title: "AI & DL Mentor",
    company: "University of Sharjah",
    period: "Nov 2022 – Mar 2023",
    description:
      "Guided students through advanced deep learning projects, contributing to academic excellence.",
    companyUrl: "https://www.sharjah.ac.ae"
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Freelance",
    period: "Aug 2024 – Present",
    description:
      "Delivered tailored web and mobile app solutions for diverse clients.",
    companyUrl: "#"
  },
  {
    title: "AI NLP Researcher",
    company: "Private Work",
    period: "2024",
    description:
      "Engineered sentiment analysis models for urban development decision-making.",
    companyUrl: "#"
  },
  {
    title: "CNN Researcher",
    company: "Malware Detection Project",
    period: "2024",
    description:
      "Developed a CNN-based system achieving 95% accuracy for malware classification.",
    companyUrl: "https://sharjah.ac.ae"
  }
]

export const skills = [
  {
    name: "React",
    level: "Expert",
    category: "frontend",
    emoji: "💻"
  },
  {
    name: "Docker",
    level: "Expert",
    category: "backend",
    emoji: "🐳"
  },
  {
    name: "AWS",
    level: "Advanced",
    category: "backend",
    emoji: "🌐"
  },
  {
    name: "Flutter",
    level: "Expert",
    category: "frontend",
    emoji: "📱"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "frontend",
    emoji: "📘"
  },
  {
    name: "CSS",
    level: "Advanced",
    category: "frontend",
    emoji: "🎨"
  },
  {
    name: "HTML",
    level: "Advanced",
    category: "frontend",
    emoji: "🌐"
  },
  {
    name: "Flutter",
    level: "Expert",
    category: "mobile",
    emoji: "📱"
  },
  {
    name: "iOS Development",
    level: "Advanced",
    category: "mobile",
    emoji: "🍎"
  },
  {
    name: "Android Development",
    level: "Advanced",
    category: "mobile",
    emoji: "🤖"
  },
  {
    name: "Mobile UI/UX",
    level: "Expert",
    category: "mobile",
    emoji: "🎯"
  },
  {
    name: "Machine Learning",
    level: "Expert",
    category: "ai",
    emoji: "🧠"
  },
  {
    name: "Deep Learning",
    level: "Expert",
    category: "ai",
    emoji: "🧠"
  },
  {
    name: "Natural Language Processing",
    level: "Expert",
    category: "ai",
    emoji: "📝"
  },
  {
    name: "Computer Vision",
    level: "Intermediate",
    category: "ai",
    emoji: "👁️"
  },
  {
    name: "TensorFlow & PyTorch",
    level: "Advanced",
    category: "ai",
    emoji: "📊"
  },
  {
    name: "Firebase",
    level: "Expert",
    category: "backend",
    emoji: "🔥"
  },
  {
    name: "RESTful APIs",
    level: "Expert",
    category: "backend",
    emoji: "🔌"
  },
  {
    name: "SQL",
    level: "Advanced",
    category: "backend",
    emoji: "💾"
  },
  {
    name: "Git",
    level: "Advanced",
    category: "backend",
    emoji: "🔄"
  },
]

export const certifications = [
  {
    name: "From Code to Creation: Mastering Game Programming",
    issuer: "HP & edX",
    date: "2025",
    link: "https://courses.edx.org/certificates/b0c42f736a22445894d31c73e1feff3a"
  },
  {
    name: "Unity Essentials Pathway Certificate",
    issuer: "Unity",
    date: "2025",
    link: "https://www.credly.com/badges/34d08b1b-1cdc-4431-b829-86e363a5cea0/linked_in_profile"
  },
  {
    name: "Fundamentals of Deep Learning Certificate",
    issuer: "NVIDIA",
    date: "2025",
    link: "https://drive.google.com/file/d/1Uc0QinkaKo4PM2GCj0i8QqVcTna1chEA/view?usp=sharing"
  },
  {
    name: "Interactive Phishing Awareness Workshop",
    issuer: "EXPLOIT3RS",
    date: "2025",
    link: "https://drive.google.com/file/d/1OliWz2hFmhThlEqHmoi92mcAscnZ0U3P/view?usp=sharing"
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "https://www.credly.com/badges/d4292b7e-2265-4632-8b8a-c9dd52fd722b/print"
  },
  {
    name: "Applications of AI for Anamoly Detection Certificate",
    issuer: "NVIDIA",
    date: "2024",
    link:
      "https://drive.google.com/file/d/1A9jMF1UkUKUk6LlPUZXU71Eguq0wLyzN/view?usp=sharing"
  },
  {
    name: "Cybersecurity Awareness Workshop",
    issuer: "University of Sharjah",
    date: "2024",
    link:
      "https://drive.google.com/file/d/1C4c_Cs_D_xaUsnhRRaB11GrDsswkSZUe/view?usp=sharing"
  },
  {
    name: "Robotics Programming Workshop",
    issuer: "University of Sharjah",
    date: "2024",
    link:
      "https://drive.google.com/file/d/1gepgt53aKLVkQ0743rbrCszL1VVsu-z4/view?usp=sharing"
  },
  {
    name: "Huawei Certified ICT Associate: Datacom",
    issuer: "Huawei",
    date: "2024",
    link:
      "https://drive.google.com/file/d/1At36TZ-0sw0-rWmfLHZAIuQ-a1wQSoBU/view?usp=sharing"
  },
  {
    name: "Riding the Generative AI Wave Certicate",
    issuer: "NVIDIA & University of Sharjah",
    date: "2023",
    link:
      "https://drive.google.com/file/d/1dcSxkDdyaXPxMrFfeOcXlBp3aQ7NT_pS/view?usp=sharing"
  },
]
