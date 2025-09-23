import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = 'your_auto_reply_template_id'; // Replace with your auto-reply template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Send email to you
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'jeweljesta@gmail.com',
        }
      );
      
      // Send auto-reply to the sender
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          to_name: data.name,
          to_email: data.email,
          from_name: 'Jewel Jose',
          from_email: 'jeweljesta@gmail.com',
        }
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
      href: "https://github.com/JewelJose62"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/jewel-jose-553587231/"
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

          {/* Contact Form */}
          <div className="animate-fade-in delay-200">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
                Send me a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder="Your full name"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    {...register('subject')}
                    placeholder="What's this about?"
                    className={errors.subject ? 'border-red-500' : ''}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground py-3 font-semibold transition-spring hover-scale shadow-glow-primary"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <div className="text-center pt-4 border-t border-border/20">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Currently Available</strong> for new projects and opportunities
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-green-400 font-medium">Open to Work</span>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:jeweljesta@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+917012946751">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </a>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;