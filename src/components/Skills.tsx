import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart3, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 85 },
      ],
      color: 'primary'
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ],
      color: 'secondary'
    },
    {
      title: 'Data Tools',
      icon: BarChart3,
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'Streamlit', level: 80 },
        { name: 'Plotly', level: 75 },
        { name: 'Excel', level: 90 },
      ],
      color: 'accent'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 70 },
      ],
      color: 'primary'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 slide-up"
              >
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>

                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/80 rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}

                  <div className={`mt-6 p-4 bg-${category.color}/5 rounded-lg border border-${category.color}/20`}>
                    <p className="text-sm text-center text-muted-foreground">
                      {category.title === 'Languages' &&
                        'Proficient in multiple programming languages with strong problem-solving skills.'}
                      {category.title === 'Frontend' &&
                        'Creating responsive and modern user interfaces with clean, maintainable code.'}
                      {category.title === 'Data Tools' &&
                        'Experienced in data analysis, visualization, and building interactive dashboards.'}
                      {category.title === 'Databases' &&
                        'Skilled in database design, optimization, and complex query development.'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Additional Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Git & GitHub',
                  'API Integration',
                  'Streamlit Apps',
                  'Data Cleaning',
                  'Problem Solving',
                  'Version Control',
                  'Responsive Design',
                  'Basic UI/UX Principles'
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
