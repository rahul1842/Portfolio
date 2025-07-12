import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fake News Detector',
      description:
        'Naive Bayes classifier for fake news detection using NLP (TF-IDF, tokenization, stopword removal). Visualized results for clarity.',
      tech: ['Python', 'scikit-learn', 'NLP', 'TF-IDF'],
      github: 'https://github.com/rahul1842/SpamNews',
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Encrypted SMS Messenger',
      description:
        'Android app with RSA, Diffie-Hellman, and Rail Fence encryption. Secure on-device processing and SMS API with a clean UI.',
      tech: ['Java', 'Android', 'Cryptography', 'RSA'],
      github: 'https://github.com/rahul1842/EncryptionDecryption-AndroidApp',
      gradient: 'from-secondary to-accent'
    },
    {
      title: 'Loan Approval Predictor',
      description:
        'Streamlit app using Random Forest classifier (85.3% accuracy) to predict loan approval. Includes data cleaning and interactive UI.',
      tech: ['Python', 'Streamlit', 'sklearn', 'Pandas'],
      github: 'https://github.com/rahul1842/Loan-Predictor',
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in data analysis and frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-lg`}></div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
