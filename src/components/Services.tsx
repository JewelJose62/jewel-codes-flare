import { Code, Database, Cloud, Smartphone, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using MERN stack (MongoDB, Express.js, React.js, Node.js) with modern best practices and responsive design.",
      features: ["React.js Frontend", "Node.js Backend", "MongoDB Database", "TailwindCSS Styling"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "API Development & Integration",
      description: "Custom RESTful API development, third-party API integrations, and database design with secure authentication and authorization systems.",
      features: ["RESTful APIs", "JWT Authentication", "Database Design", "Payment Gateway Integration"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Deployment & DevOps",
      description: "Professional deployment and hosting solutions using modern cloud platforms with CI/CD pipelines and performance optimization.",
      features: ["AWS Deployment", "Vercel Hosting", "Domain Setup", "Performance Optimization"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Applications",
      description: "Build interactive real-time applications with live chat, notifications, and collaborative features using Socket.IO and modern technologies.",
      features: ["Socket.IO Integration", "Live Chat Systems", "Real-time Updates", "Collaborative Features"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Web Design",
      description: "Mobile-first responsive design ensuring your application works perfectly across all devices and screen sizes with modern UI/UX principles.",
      features: ["Mobile-First Design", "Cross-Browser Support", "Modern UI/UX", "Performance Focused"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO & Web Optimization",
      description: "Search engine optimization, performance enhancement, and web accessibility improvements to ensure your application reaches its full potential.",
      features: ["SEO Optimization", "Speed Enhancement", "Accessibility", "Analytics Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life 
            with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-2xl hover-scale transition-spring animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-6 group-hover:text-accent transition-smooth">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help you build scalable, modern web applications that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-spring hover-scale shadow-glow-primary"
              >
                Get In Touch
              </button>
              <a
                href="mailto:jeweljesta@gmail.com"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-spring hover-scale"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;