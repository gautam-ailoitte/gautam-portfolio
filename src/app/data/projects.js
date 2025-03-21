const projects = [
    {
      id: "disaster-management",
      title: "SIH 2023: Disaster Management Solution",
      description: [
        "Developed and selected as finalist in Smart India Hackathon 2023, implementing an ad-hoc network solution for connectivity during disasters and geospatial SOS system for identifying affected individuals.",
        "Engineered a multi-role platform with optimized warehouse management for tracking critical resources (rations, equipment) and deploying them efficiently based on real-time alerts and location data."
      ],
      technologies: ["Flutter", "Firebase", "Geospatial", "Ad-hoc Networking"],
      image: "/images/disaster-management.jpg",
      github: "https://github.com/kumar-gautam24/disaster-management",
      featured: true
    },
    {
      id: "tic-tac-toe",
      title: "Tic Tac Toe Game with AI",
      description: [
        "Developed a console-based Tic Tac Toe game implementing the Minimax algorithm with alpha-beta pruning for optimal AI moves.",
        "Optimized the game's performance through efficient algorithm implementation and memory management."
      ],
      technologies: ["Flutter", "Minimax Algorithm", "Alpha-Beta Pruning", "Game AI"],
      image: "/images/tic-tac-toe.jpg",
      github: "https://github.com/kumar-gautam24/tic-tac-toe",
      featured: true
    },
    {
      id: "incident-tracker",
      title: "Incident Tracker and Automation Tool",
      description: [
        "Developed an OOP-based incident management system with automatic priority-based assignment using a greedy workload balancing algorithm.",
        "Implemented data analysis pipelines with Pandas to identify incident patterns and generate statistical reports, reducing mean-time-to-resolution by optimizing resource allocation."
      ],
      technologies: ["Python", "Pandas", "OOP", "Data Analysis"],
      image: "/images/incident-tracker.jpg",
      github: "https://github.com/kumar-gautam24/incident-tracker",
      featured: true
    },
    {
      id: "hindi-ocr",
      title: "Manthan 2021: Hindi OCR",
      description: [
        "Conducted extensive research and designed architecture for a Hindi OCR solution with innovative handling of nukta characters and contextual grammar correction.",
        "Developed technical proposal integrating Tesseract OCR with PyTorch-based image preprocessing for enhanced recognition accuracy and text categorization for improved efficiency."
      ],
      technologies: ["Python", "Tesseract OCR", "PyTorch", "Image Processing"],
      image: "/images/hindi-ocr.jpg",
      demo: "https://youtube.com/kumar-gautam24/hindi-ocr",
      featured: false
    }
  ];
  
  export default projects;