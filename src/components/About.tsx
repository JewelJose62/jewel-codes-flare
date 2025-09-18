import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend",
      skills: ["React.js", "Redux", "TailwindCSS", "HTML", "CSS", "JavaScript"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Socket.IO"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database",
      skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Tools & Others",
      skills: ["Git", "AWS S3", "Render", "Postman", "Razorpay", "Next.js", "Supabase"]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated and detail-oriented MERN Stack Developer currently working as a 
              Software Developer Intern at <span className="text-primary font-semibold">Stackmod Innovations</span>. 
              I have hands-on experience building full-stack web applications with modern technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise includes creating scalable applications with React.js, Node.js, Express.js, 
              and MongoDB. I'm proficient in implementing secure authentication systems, RESTful APIs, 
              and real-time features using Socket.IO.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about writing clean, maintainable code and continuously learning new 
              technologies to stay updated with industry trends. I enjoy solving complex problems 
              and building user-centric applications that make a real impact.
            </p>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="glass-card p-8 rounded-2xl hover-scale transition-spring">
              <h3 className="text-2xl font-bold mb-4 text-center gradient-text">
                Current Role
              </h3>
              <div className="text-center">
                <div className="text-xl font-semibold text-foreground mb-2">
                  Software Developer Intern
                </div>
                <div className="text-primary font-medium mb-2">
                  Stackmod Innovations Pvt Ltd
                </div>
                <div className="text-muted-foreground">
                  Trivandrum, Kerala
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  July 2024 - Present
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-6 rounded-xl hover-scale transition-spring animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-center text-foreground">
                  {category.title}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-muted-foreground text-center py-1 px-2 rounded-md bg-secondary/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;