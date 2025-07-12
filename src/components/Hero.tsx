import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    'Designing user-focused frontends',
    'Analyzing complex datasets',
    'Writing clean, scalable code'
  ];

  useEffect(() => {
    const typeText = () => {
      const text = texts[currentIndex];
      let index = 0;

      const timer = setInterval(() => {
        setCurrentText(text.slice(0, index + 1));
        index++;

        if (index === text.length) {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }, 2000);
        }
      }, 100);
    };

    typeText();
  }, [currentIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rahul_Resume.pdf'; 
    link.download = 'Rahul_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/20 rounded-full blur-xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-xl float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Social icons in top-right */}
      <div className="absolute top-8 right-8 flex gap-4">
        <a
          href="https://github.com/rahul1842"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-primary/20 transition-all duration-300 glow-primary"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-krishnamurthy-17b58a319/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-secondary/20 transition-all duration-300 glow-secondary"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Rahul Krishnamurthy
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Building thoughtful web experiences, fueled by data, logic, and a love for learning.
        </h2>

        <div className="h-16 mb-12">
          <p className="text-xl md:text-2xl text-primary typing">{currentText}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 text-lg pulse-glow"
          >
            View Projects
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>

          <Button
            onClick={downloadResume}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
          >
            Download Resume
            <Download className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
