import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "jeweljesta@gmail.com",
      href: "mailto:jeweljesta@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 70129 46751",
      href: "tel:+917012946751"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Trivandrum, Kerala, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/jeweljose"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/jeweljose"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:jeweljesta@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently seeking new opportunities as a MERN Stack Developer. 
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center space-x-4 group"
                >
                  <div className="text-primary group-hover:text-accent transition-smooth">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {item.label}
                    </div>
                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-smooth font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border/20">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg text-muted-foreground hover:text-primary transition-smooth hover-scale"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-fade-in delay-200">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
                Ready to Work Together?
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm available for freelance projects, full-time opportunities, 
                    or just a friendly chat about web development and technology.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground py-3 font-semibold transition-spring hover-scale shadow-glow-primary"
                    asChild
                  >
                    <a href="mailto:jeweljesta@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an Email
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3 font-semibold transition-spring hover-scale"
                    asChild
                  >
                    <a href="tel:+917012946751">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Me
                    </a>
                  </Button>
                </div>

                <div className="pt-6 border-t border-border/20 text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>Currently Available</strong> for new projects and opportunities
                  </p>
                  <div className="flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-green-400 font-medium">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;