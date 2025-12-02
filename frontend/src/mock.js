export const mockData = {
  profile: {
    name: "Mohit Lamba",
    title: "Full-Stack Developer",
    photo: "https://customer-assets.emergentagent.com/job_dev-ml-expert/artifacts/nizvazcc_photo.jpg",
    bio: "I'm Mohit Lamba, a full-stack developer passionate about building fast, scalable, and AI-driven applications. I work with MERN, FastAPI, and modern AI tools to create real-world solutions—from security automation to intelligent learning platforms. I love solving problems, learning new technologies, and turning ideas into functional products.",
    email: "mohitlamba043@gmail.com",
    github: "https://github.com/mohitlamba65",
    linkedin: "https://linkedin.com/in/mohit-lamba-b39a3b35a",
    resumeUrl: "https://drive.google.com/file/d/16FbLOmLzwXWjs3XUHHVk230iZItILJvI/view?usp=sharing"
  },
  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Streamlit"],
    backend: ["Node.js", "Express.js", "FastAPI", "Python", "RESTful APIs"],
    database: ["MongoDB", "ChromaDB", "Vector Databases"],
    aiml: ["TensorFlow", "Keras", "Scikit-learn", "PyTorch", "RAG", "LLMs"],
    tools: ["Git", "GitHub CI/CD", "Vercel", "Streamlit Cloud", "Recharts"]
  },
  projects: [
    {
      id: 1,
      title: "Quiz App",
      category: "web",
      description: "Developed a full-stack MERN Quiz App with category-based quizzes (Aptitude, Coding, HR). Integrated timer, score calculation, and Recharts-based analytics with responsive UI.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Recharts"],
      liveUrl: "https://quiz-app-git-main-mohits-projects-c3a090b0.vercel.app/",
      date: "01 Jul, 2025 – 10 Jul, 2025",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80"
    },
    {
      id: 2,
      title: "Recipe Finder",
      category: "web",
      description: "Responsive recipe search app using APIs to suggest dishes based on ingredients, dietary preferences, and cuisine.",
      techStack: ["HTML", "CSS", "JavaScript", "REST API"],
      liveUrl: "https://recipe-finder-beta-virid.vercel.app/",
      date: "13 Dec, 2024 – 17 Dec, 2025",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
    },
    {
      id: 3,
      title: "Malware Classifier",
      category: "ml",
      description: "Advanced Security Scanner – Built a Streamlit web app for real-time URL malware detection and memory dump analysis. Deployed an 80% accurate deep learning model (CNN + attention mechanism) on Streamlit Cloud.",
      techStack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Streamlit", "GitHub CI/CD"],
      liveUrl: "https://malware-classifier-h9ogpkm7sw35pq8bbppdaq.streamlit.app/",
      date: "Jan 2025 – Present",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
    {
      id: 4,
      title: "Modular RAG PDF Chatbot",
      category: "ai",
      description: "Modular Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents and chat with an AI assistant. Features a microservice architecture with FastAPI backend and Streamlit frontend, using ChromaDB as the vector store and Groq's LLaMA3 model as the LLM.",
      techStack: ["FastAPI", "ChromaDB", "Streamlit", "Python", "LLaMA3", "RAG"],
      liveUrl: "#",
      date: "Recent Project",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    }
  ]
};
