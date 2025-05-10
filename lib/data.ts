export interface TeamMember {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
    avatar: string;
    social?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  }
  
  export interface Author {
    name: string;
    avatar: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    category: string;
    author: Author;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    repoUrl?: string;
    completed: string;
    category: string;
    
  }
  
  export function getTeamMembers(): TeamMember[] {
    return [
      {
        id: 1,
        name: "Sarah Johnson",
        position: "CTO",
        bio: "Sarah has over 15 years of experience in the industry and leads our company with vision and passion.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=500",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
        social: {
          github: "#",
          linkedin: "#",
          twitter: "#"
        }
      },
      {
        id: 2,
        name: "Michael Chen",
        position: "Lead Engineer",
        bio: "Michael brings technical leadership and innovation to our products, with expertise in AI and machine learning.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=500",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
        social: {
          github: "#",
          linkedin: "#"
        }
      },
      {
        id: 3,
        name: "Alicia Rodriguez",
        position: "Design Director",
        bio: "Alicia leads our creative team with an eye for detail and a passion for beautiful, functional design.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=500",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
        social: {
          linkedin: "#",
          twitter: "#"
        }
      },
      {
        id: 4,
        name: "David Smith",
        position: "Marketing Lead",
        bio: "David develops our go-to-market strategies and has a proven track record of building successful brands.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=500",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
        social: {
          linkedin: "#",
          twitter: "#"
        }
      },
      {
        id: 5,
        name: "Emily Tanaka",
        position: "Product Manager",
        bio: "Emily ensures our products meet customer needs while driving our product roadmap forward.",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=800&h=500",
        avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=150&h=150",
        social: {
          github: "#",
          linkedin: "#"
        }
      },
      {
        id: 6,
        name: "James Wilson",
        position: "Developer",
        bio: "James architects our systems and leads development with a focus on code quality and performance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=500",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        social: {
          github: "#",
          linkedin: "#",
          twitter: "#"
        }
      },
    ];
  }
  
  export function getProjects(): Project[] {
    const teamMembers = getTeamMembers();
    
    return [
      {
        id: 1,
        title: "Neural Network Platform",
        description: "An AI-powered platform that provides neural network solutions for enterprise clients, featuring advanced machine learning algorithms and intuitive user interfaces.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
        technologies: ["React", "TensorFlow.js", "Python", "AWS", "Docker"],
        demoUrl: "https://demo.example.com/neural-platform",
        repoUrl: "https://github.com/example/neural-platform",
        completed: "May 2025",
        category: "Artificial Intelligence",
        
      },
      {
        id: 2,
        title: "Quantum Data Analytics",
        description: "A cutting-edge data analytics solution that leverages quantum computing principles for ultra-fast processing of large datasets and real-time insights.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
        technologies: ["TypeScript", "Node.js", "Quantum API", "GraphQL", "PostgreSQL"],
        demoUrl: "https://demo.example.com/quantum-analytics",
        completed: "March 2025",
        category: "Data Analytics",
        
      },
      {
        id: 3,
        title: "Cloud Security Framework",
        description: "A comprehensive security framework for cloud applications, providing enterprise-grade protection against the most sophisticated cyber threats.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
        technologies: ["Go", "Rust", "Kubernetes", "Azure", "Cryptography"],
        repoUrl: "https://github.com/example/cloud-security",
        completed: "January 2025",
        category: "Cybersecurity",
        
      },
      {
        id: 4,
        title: "Digital Transformation Suite",
        description: "A comprehensive suite of tools designed to help traditional businesses transition to digital-first operations with minimal disruption.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
        technologies: ["React", "Node.js", "MongoDB", "AWS Lambda", "Stripe"],
        demoUrl: "https://demo.example.com/digital-transformation",
        completed: "December 2024",
        category: "Enterprise Solutions",
        
      },
      {
        id: 5,
        title: "IoT Home Automation Platform",
        description: "A revolutionary smart home platform connecting IoT devices through a unified interface with AI-powered automation and voice control.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
        technologies: ["React Native", "C++", "MQTT", "TensorFlow Lite", "AWS IoT"],
        demoUrl: "https://demo.example.com/home-automation",
        repoUrl: "https://github.com/example/home-automation",
        completed: "October 2024",
        category: "Internet of Things",
        
      },
      {
        id: 6,
        title: "Sustainable Logistics Optimizer",
        description: "An environmentally conscious logistics platform that reduces carbon footprint through AI-powered route optimization and resource allocation.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500",
        technologies: ["Python", "React", "Google Maps API", "TensorFlow", "PostgreSQL"],
        completed: "August 2024",
        category: "Sustainability",
        
      },
    ];
  }
  
  export function getBlogPosts(): BlogPost[] {
    return [
      {
        id: 1,
        title: "The Future of Teamwork in a Remote-First World",
        excerpt: "Exploring how team dynamics are evolving in the age of distributed work and what strategies help teams thrive.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "May 5, 2025",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=500",
        category: "Teamwork",
        author: {
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
        },
      },
      {
        id: 2,
        title: "Building Creative Teams That Innovate",
        excerpt: "How to cultivate a team culture that encourages experimentation, innovation, and breakthrough thinking.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "April 28, 2025",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=500",
        category: "Innovation",
        author: {
          name: "Michael Chen",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
        },
      },
      {
        id: 3,
        title: "Designing for Inclusivity: A Team Approach",
        excerpt: "Why diverse teams create better products and how to build inclusivity into your design process.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "April 21, 2025",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500",
        category: "Design",
        author: {
          name: "Alicia Rodriguez",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
        },
      },
      {
        id: 4,
        title: "The Psychology of High-Performing Teams",
        excerpt: "Research-backed insights into what makes teams work well together and achieve extraordinary results.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "April 14, 2025",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500",
        category: "Leadership",
        author: {
          name: "David Smith",
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
        },
      },
      {
        id: 5,
        title: "From Good to Great: Leveling Up Your Team's Skills",
        excerpt: "Practical strategies for continuous learning and professional development in fast-paced environments.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "April 7, 2025",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=500",
        category: "Development",
        author: {
          name: "Emily Tanaka",
          avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=150&h=150",
        },
      },
      {
        id: 6,
        title: "Technical Debt and Team Productivity",
        excerpt: "Understanding the hidden costs of technical compromises and how teams can manage them effectively.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "March 31, 2025",
        image: "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=800&h=500",
        category: "Development",
        author: {
          name: "James Wilson",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        },
      },
      {
        id: 7,
        title: "Communication Patterns of Successful Teams",
        excerpt: "How the best teams communicate, collaborate, and resolve conflicts to maintain productivity and morale.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "March 24, 2025",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800&h=500",
        category: "Communication",
        author: {
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
        },
      },
    ];
  }