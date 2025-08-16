export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with modern web technologies, featuring user authentication, product management, and secure payment processing.",
    longDescription: `This project represents a comprehensive e-commerce solution that I developed from concept to deployment. 
    It's designed to handle the complete online shopping experience, from browsing products to completing secure transactions.
    
    The platform features a modern, responsive design that works seamlessly across all devices. Users can browse products, 
    add items to their cart, and complete purchases with confidence thanks to integrated security measures.
    
    Key features include user account management, product search and filtering, shopping cart functionality, 
    secure payment processing, and an admin panel for managing inventory and orders.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "JWT"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory control",
      "Responsive design for all devices",
      "Real-time inventory updates"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing real-time inventory updates",
      "Creating an intuitive admin interface",
      "Optimizing database queries for performance",
      "Ensuring cross-browser compatibility"
    ],
    solutions: [
      "Integrated Stripe API with proper error handling and security measures",
      "Used WebSocket connections for real-time updates",
      "Designed admin interface with user experience in mind",
      "Implemented database indexing and query optimization",
      "Extensive testing across different browsers and devices"
    ],
    image: "https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=E-Commerce+Platform",
    githubLink: "https://github.com/username/ecommerce-platform",
    liveLink: "https://ecommerce-demo.com",
    duration: "3 months",
    teamSize: "Solo project",
    role: "Full-stack Developer"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application that helps teams stay organized and productive with real-time updates and intuitive interfaces.",
    longDescription: `This task management application was built to solve the common problem of team collaboration and project tracking. 
    It provides a centralized platform where team members can create, assign, and track tasks in real-time.
    
    The app features a clean, intuitive interface that makes project management simple and efficient. Users can organize tasks 
    into projects, set priorities, add due dates, and collaborate with team members through comments and notifications.
    
    The real-time functionality ensures that all team members stay updated on project progress, while the responsive design 
    allows access from any device, making it perfect for remote teams.`,
    technologies: ["React", "Firebase", "CSS Modules", "PWA", "Redux", "Material-UI"],
    features: [
      "Real-time task updates and collaboration",
      "Project organization and categorization",
      "User roles and permissions",
      "File attachments and comments",
      "Progress tracking and analytics",
      "Mobile-responsive PWA",
      "Push notifications",
      "Offline functionality"
    ],
    challenges: [
      "Implementing real-time updates across multiple users",
      "Managing complex state with Redux",
      "Creating a smooth offline experience",
      "Handling file uploads and storage",
      "Optimizing performance for large task lists"
    ],
    solutions: [
      "Used Firebase Realtime Database for instant updates",
      "Implemented efficient Redux patterns for state management",
      "Created service worker for offline functionality",
      "Integrated Firebase Storage with progress tracking",
      "Implemented virtual scrolling for performance"
    ],
    image: "https://via.placeholder.com/800x400/10B981/FFFFFF?text=Task+Management+App",
    githubLink: "https://github.com/username/task-manager",
    liveLink: "https://task-manager-demo.com",
    duration: "2.5 months",
    teamSize: "Solo project",
    role: "Full-stack Developer"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "This very website! Built with clean code principles and a focus on user experience, showcasing the importance of thoughtful design.",
    longDescription: `My portfolio website represents my approach to web development - clean, modern, and user-focused. 
    It's designed to showcase my work while providing an excellent user experience for visitors.
    
    The site features a responsive design that adapts beautifully to all screen sizes, from mobile phones to large desktop displays. 
    I've implemented smooth animations and transitions to create an engaging browsing experience.
    
    The codebase follows modern React best practices, with clean component architecture and maintainable CSS. 
    Performance optimization was a key consideration, ensuring fast loading times and smooth interactions.`,
    technologies: ["React", "CSS", "JavaScript", "Responsive Design", "CSS Variables", "Modern CSS"],
    features: [
      "Fully responsive design",
      "Smooth scroll animations",
      "Modern CSS with custom properties",
      "Component-based architecture",
      "Optimized performance",
      "Accessibility features",
      "Cross-browser compatibility",
      "Clean, maintainable code"
    ],
    challenges: [
      "Creating smooth animations without performance impact",
      "Ensuring consistent design across all devices",
      "Implementing accessible navigation",
      "Optimizing for various screen sizes",
      "Maintaining clean code structure"
    ],
    solutions: [
      "Used CSS transforms and opacity for smooth animations",
      "Implemented mobile-first responsive design",
      "Added proper ARIA labels and keyboard navigation",
      "Created flexible layouts with CSS Grid and Flexbox",
      "Organized code into reusable components"
    ],
    image: "https://via.placeholder.com/800x400/7C3AED/FFFFFF?text=Portfolio+Website",
    githubLink: "https://github.com/username/portfolio",
    liveLink: "https://sanjith.dev",
    duration: "1 month",
    teamSize: "Solo project",
    role: "Frontend Developer"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A real-time weather application with interactive maps, forecasts, and location-based services.",
    longDescription: `This weather dashboard provides comprehensive weather information with an intuitive interface. 
    Users can search for any location worldwide and get detailed weather data including current conditions, 
    hourly forecasts, and 7-day predictions.
    
    The app integrates with multiple weather APIs to provide accurate and up-to-date information. 
    Features include interactive maps, weather alerts, and customizable widgets for different weather parameters.
    
    The responsive design ensures a great experience across all devices, from mobile phones to desktop computers.`,
    technologies: ["React", "TypeScript", "Mapbox", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    features: [
      "Real-time weather data",
      "Interactive maps with weather layers",
      "7-day weather forecasts",
      "Weather alerts and notifications",
      "Location-based services",
      "Responsive design for all devices",
      "Customizable weather widgets",
      "Historical weather data"
    ],
    challenges: [
      "Integrating multiple weather APIs",
      "Handling real-time data updates",
      "Creating responsive map components",
      "Managing complex state with TypeScript",
      "Optimizing performance for mobile devices"
    ],
    solutions: [
      "Implemented API abstraction layer for multiple weather services",
      "Used WebSocket connections for real-time updates",
      "Created custom map components with Mapbox GL JS",
      "Applied TypeScript for better type safety and development experience",
      "Implemented lazy loading and code splitting for mobile optimization"
    ],
    image: "https://via.placeholder.com/800x400/06B6D4/FFFFFF?text=Weather+Dashboard",
    githubLink: "https://github.com/username/weather-dashboard",
    liveLink: "https://weather-demo.com",
    duration: "2 months",
    teamSize: "Solo project",
    role: "Frontend Developer"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for tracking social media performance and engagement metrics.",
    longDescription: `This social media analytics platform helps businesses and creators understand their social media performance. 
    It provides detailed insights into engagement rates, follower growth, content performance, and audience demographics.
    
    The platform supports multiple social media platforms including Instagram, Twitter, Facebook, and LinkedIn. 
    Users can generate custom reports, set up automated alerts, and track competitor performance.
    
    Advanced features include sentiment analysis, hashtag tracking, and predictive analytics for optimal posting times.`,
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "D3.js", "Socket.io", "JWT"],
    features: [
      "Multi-platform social media integration",
      "Real-time analytics dashboard",
      "Custom report generation",
      "Competitor analysis tools",
      "Sentiment analysis",
      "Automated alerts and notifications",
      "Data visualization with charts",
      "API for third-party integrations"
    ],
    challenges: [
      "Handling large volumes of social media data",
      "Real-time data processing and updates",
      "Integrating multiple social media APIs",
      "Creating intuitive data visualizations",
      "Ensuring data accuracy and reliability"
    ],
    solutions: [
      "Implemented Redis caching for improved performance",
      "Used WebSocket connections for real-time updates",
      "Created unified API layer for multiple social platforms",
      "Utilized D3.js for interactive and responsive charts",
      "Implemented data validation and error handling systems"
    ],
    image: "https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Social+Media+Analytics",
    githubLink: "https://github.com/username/social-analytics",
    liveLink: "https://social-analytics-demo.com",
    duration: "4 months",
    teamSize: "Team of 3",
    role: "Full-stack Developer"
  }
];

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
}; 