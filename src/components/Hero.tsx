import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/jewel_jose_resume.pdf';
    link.download = 'Jewel_Jose_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Jewel Jose</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-slide-in">
            <span className="text-primary font-semibold">MERN Stack Developer</span> | 
            <span className="text-accent font-semibold"> Full-Stack Engineer</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in delay-200">
            Passionate about building full-stack web applications with clean, scalable code. 
            Experienced in MongoDB, Express.js, React.js, and Node.js with expertise in 
            RESTful APIs, JWT authentication, and real-time features.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in delay-300">
            <Button 
              onClick={downloadResume}
              size="lg" 
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-spring hover-scale shadow-glow-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-spring hover-scale"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in delay-500">
            <a 
              href="mailto:jeweljesta@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/jeweljose" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/jeweljose" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;