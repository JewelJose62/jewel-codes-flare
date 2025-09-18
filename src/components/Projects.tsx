import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Hotel Booking Platform",
      description: "Full-stack MERN application with JWT authentication, role-based access control, Razorpay payment integration, and AWS S3 image storage. Features admin dashboard for hotel management and user booking system.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Razorpay", "AWS S3", "TailwindCSS"],
      github: "https://github.com/jeweljose/hotel-booking",
      live: "#",
      featured: true
    },
    {
      title: "Full-Stack Blog Platform",
      description: "Modern blogging platform with user authentication, dynamic post creation with image uploads, real-time comments and likes system, and admin panel for content management.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Multer", "React Router"],
      github: "https://github.com/jeweljose/blog-platform",
      live: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "Socket.IO powered chat app with private and group messaging, real-time bi-directional communication, and clean EJS-based frontend for seamless user experience.",
      tech: ["Socket.IO", "Node.js", "Express.js", "EJS", "JavaScript"],
      github: "https://github.com/jeweljose/chat-app",
      live: "#"
    },
    {
      title: "Employee Management System",
      description: "CRUD-based web application with real-time DOM manipulation, input validation, and dynamic employee record management without page reloads.",
      tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
      github: "https://github.com/jeweljose/employee-management",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            API integration, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card p-8 rounded-2xl hover-scale transition-spring animate-fade-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-md border border-border/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-spring"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                
                {project.live !== "#" && (
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground transition-spring"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-spring hover-scale"
            asChild
          >
            <a href="https://github.com/jeweljose" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;