export const projects = [
  {
    id: "ovarian-cancer-detection",
    title: "Ovarian Cancer Detection",
    description: "Aims to detect ovarian cancer and its subtypes using deep learning models applied to histopathology images.",
    image: "https://images.unsplash.com/photo-1713055096023-1a331bdf0974",
    tags: ["Python", "PyTorch", "Google Colab"],
    emoji: "🧬",
    duration: "2 weeks",
    teamSize: 3,
    role: "AI Developer",
    features: [
      "Multiclass classification of ovarian cancer subtypes",
      "Histopathology image-based diagnosis using deep learning",
      "Multiple architectures: baseline CNN and VGG variants",
      "Transfer learning with fine-tuning for improved accuracy",
      "Evaluation with confusion matrix, ROC-AUC, and F1-score",
      "Visual prediction comparison for test images"
    ],
    technologies: [
      {
        name: "Python",
        description: "Core language for processing and scripting"
      },
      {
        name: "Google Colab",
        description: "GPU-enabled training environment"
      },
      {
        name: "PyTorch",
        description: "Deep learning framework for model training"
      }
    ],
    challenges: [
      "Training highly accurate classification models",
      "Handling class imbalance across subtypes",
      "Processing large histopathology image datasets",
      "Avoiding overfitting on limited samples"
    ],
    solutions: [
      "Fine-tuned models based on validation metrics",
      "Visualized predictions for interpretability and trust",
      "Used transfer learning with VGG variants",
      "Applied data augmentation to reduce overfitting"
    ],
    github: "https://github.com/nhyan30/Ovarian-Cancer-Detection",
  },
  {
    id: "kitchensync-app",
    title: "Red Light, Green Light Game",
    description:
      "Unity project is a reimagined, high-intensity version of the iconic “Red Light, Green Light” game inspired by Squid Game.",
    image: "https://images.unsplash.com/photo-1665041982909-8a86864a1e49",
    tags: ["Unity Engine", "C#", "Rigidbody Physics"],
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
      },
      {
        name: "Rigidbody Physics",
        description: "Character state and interaction management"
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
    id: "vistra",
    title: "Facial Expression Detection",
    description: "Deep learning-based Facial Expression Recognition system that detects and classifies emotions in real time.",
    image: "https://images.unsplash.com/photo-1695902173528-0b15104c4554",
    tags: ["Python", "TensorFlow", "OpenCV"],
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
    github: "https://github.com/nhyan30/Desert-Reckless-Adventure-3D",
    link : "https://drive.google.com/file/d/1Ipaqg8d1wWfb8SvL64HzfXtJGUzoWlFw/view?usp=sharing"
  },
  {
    id: "medical-center-dbms",
    title: "Active Recall System",
    description:
      "AI test maker aiming to imporve active recall by progressing user through the different levels of bloomstaxonomy.",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7",
    tags: ["Python", "Azure OpenAI Service", "Vue 3"],
    emoji: "🧠",
    duration: "1 months",
    teamSize: 4,
    role: "AI Engineer",
    features: [
      "Personalized question generation via Azure OpenAI",
      "Dynamic difficulty adjustment using Bloom’s Taxonomy",
      "Continuous performance evaluation and optimization",
      "Progress tracking with analytics dashboards"
    ],
    technologies: [
      {
        name: "Python",
        description: "Backend APIs and performance evaluation logic"
      },
      {
        name: "Azure OpenAI Service",
        description: "Adaptive question generation and NLP capabilities"
      },
      {
        name: "Vue 3",
        description: "Frontend interface and visual components"
      }
    ],
    challenges: [
      "Creating high-quality adaptive question logic",
      "Ensuring real-time difficulty adjustment performance",
      "Designing intuitive, engaging learning interfaces"
    ],
    solutions: [
      "Built AI-powered adaptive question generation engine",
      "Leveraged Azure services for scalable infrastructure",
      "Created responsive, user-friendly learning interface"
    ],
    github: "https://github.com/WahabBasa/BloomAI"
  },
  {
    id: "dar-al-maha",
    title: "Samir Al Bahr",
    description: "2D animation project that brings to life an adventurous and curious sea creature with a heartfelt mission.",
    image: "https://images.unsplash.com/photo-1628494391268-c9935bc384d5",
    tags: ["Krita", "Adobe After Effects", "Miro"],
    emoji: "📚",
    duration: "4 months",
    teamSize: 1,
    role: "2D Character Designer",
    features: [
      "Expressive 2D character animation sequences",
      "Hand-drawn designs crafted in Krita",
      "Three-scene narrative with comedic elements",
      "Rich visual dictionary for world-building",
      "Dynamic storytelling with playful motion",
      "Character-driven exploration and emotional arc"
    ],
    technologies: [
      {
        name: "Krita",
        description: "Digital illustration for character design"
      },
      {
        name: "Adobe After Effects",
        description: "2D animation and scene composition"
      },
      {
        name: "Miro",
        description: "Visual dictionary and concept boards"
      }
    ],
    challenges: [
      "Creating fluid, expressive character animations",
      "Developing a cohesive visual storytelling style",
      "Balancing humor with emotional depth",
      "Designing unique underwater world elements"
    ],
    solutions: [
      "Sketched detailed storyboards for clear direction",
      "Used Krita for consistent visual design",
      "Applied After Effects for smooth animation",
      "Created a Miro board to organize references"
    ],
    github: "https://github.com/nhyan30/Samir-2d-animation",
    link: "https://drive.google.com/file/d/1S0w-KoXIyypQpLRQmVc_cNqDGGbKMDiR/view"
  },
  {
    id: "edumentor",
    title: "Finance Tracker App",
    description:
      "A user-friendly finance tracking app to help users monitor and manage expenses effectively.",
    image:
      "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6",
    tags: ["Java 8", "Android SDK", "SQLite"],
    emoji: "📊",
    duration: "6 months",
    teamSize: 1,
    role: "Mobile App Developer",
    features: [
      "Personal finance tracking across multiple accounts",
      "Offline-first data handling with SQLite",
      "Scalable MVVM architecture",
      "Interactive statistics dashboard"
    ],
    technologies: [
      {
        name: "Java 8",
        description: "Primary language for Android app development"
      },
      { name: "Android SDK", description: "Toolkit for building Android mobile applications" },
      { name: "SQLite", description: "Local database for offline data storage" }
    ],
    challenges: [
      "Designing a clean, accessible user interface",
      "Ensuring accurate transaction categorization",
      "Managing local data consistency and integrity"
    ],
    solutions: [
      "Designed clean UI for easy navigation",
      "Built custom input forms for transactions",
      "Implemented MVVM for maintainable architecture structure"
    ],
  },
  {
    id: "sejda-space",
    title: "Midi Composer App",
    description:
      "Music composition app, enabling users to create, edit, and share their musical pieces effortlessly.",
    image:
      "https://images.unsplash.com/photo-1641994245114-38cb2df59881",
    tags: ["Java 8", "Android SDK", "MIDI Libraries"],
    emoji: "🎼",
    duration: "4 months",
    teamSize: 1,
    role: "Mobile App Developer",
    features: [
      "Grid-based interface for melody composition",
      "MIDI instrument selection and playback",
      "Adjustable tempo and playback control",
      "Export as ringtone and share via apps"
    ],
    technologies: [
      { name: "Java 8", description: "Primary language for Android development" },
      { name: "Android SDK", description: "Framework for building native Android apps" },
      { name: "MIDI Libraries", description: "Sound synthesis and playback integration" }
    ],
    challenges: [
      "Designing an intuitive music composition interface",
      "Integrating reliable MIDI playback functionality",
      "Managing accurate tempo and timing control"
    ],
    solutions: [
      "Implemented grid-based UI for easy composition",
      "Used MIDI libraries for seamless sound playback",
      "Built tempo controls with precise timing management"
    ]
  },
]

export const experiences = [
  {
    title: "AI & DL Engineer",
    company: "University of Sharjah",
    period: "Jan 2025 – May 2025",
    description:
      "Develop AI models to predict user experiences, contributing to urban development research.",
    companyUrl: "https://www.sharjah.ac.ae/"
  },
  {
    title: "Member",
    company: "UOS ACM Student Chapter",
    period: "Aug 2024 – May 2025",
    description:
      "Leading strategic planning and execution of chapter events, connecting and building a  reputation of the chapter locally and globally.",
    companyUrl: "https://www.sharjah.ac.ae/en/Academics/CI/ACM-Student-Chapter"
  },
  {
    title: "Frontend Developer",
    company: "University of Sharjah",
    period: "Aug 2024 – Mar 2025",
    description:
      "Develop AI-powered app to assist students, in collaboration with computing and health sciences  colleges.",
    companyUrl: "https://www.sharjah.ac.ae/"
  },
  {
    title: "Software Engineer",
    company: "BlindShell",
    period: "Jun 2024 – Sep 2024",
    description: "Designed and developed accessible, user-friendly applications using Java 8 tailored for visually impaired users.",
    companyUrl: "https://www.blindshell.com/"
  },
  {
    title: "Service Desk",
    company: "University of Sharjah",
    period: "Dec 2023 – Feb 2024",
    description:
      "Resolved issues and concerns efficiently, demonstrating strong problem solving skills.",
    companyUrl: "https://www.sharjah.ac.ae"
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
    name: ".Net Full Stack Foundation",
    issuer: "Board Infinity",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/NSUAMKO2PJKC"
  },
  {
    name: "Introduction to C# Programming and Unity",
    issuer: "University of Colorado System",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/3EPO410YBE68"
  },
  {
    name: "Unity Junior Programmer",
    issuer: "Unity",
    date: "2025",
    link: "https://www.credly.com/badges/e46e3103-e600-43a0-a30e-15a9e368564f/linked_in_profile"
  },
  {
    name: "Intro to AI and Gen AI for Nomu Al Ghurair TechUp Explorer",
    issuer: "Udacity",
    date: "2025",
    link: "https://www.udacity.com/certificate/e/ced49466-4881-11f0-84c9-afafcb386c65"
  },
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
