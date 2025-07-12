import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Java', color: 'bg-red-500' },
    { name: 'SQL', color: 'bg-blue-600' },
    { name: 'Python', color: 'bg-green-500' },
    { name: 'Streamlit', color: 'bg-red-400' },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rahul_Resume.pdf';
    link.download = 'Rahul_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Data Analyst and Frontend Web Developer with a love for creating 
              beautiful, functional digital experiences. I specialize in turning complex data 
              into meaningful insights and building modern, responsive web applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With expertise in both data analysis and frontend development, I bridge the gap 
              between data-driven insights and user-friendly interfaces, crafting solutions 
              that are both powerful and accessible.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, enjoying long bike rides, 
              gaming with friends, or playing cricket at a competitive level — a passion I've pursued 
              professionally for years. I believe balance between logic and play fuels creativity.
            </p>


            <Button 
              onClick={downloadResume}
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold px-6 py-3"
            >
              Download Resume
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right side - Tech stack */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold text-primary mb-6">Tech Stack</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-medium text-center">
                  "Code. Learn. Improve. Repeat."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;