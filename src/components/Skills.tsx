import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart3, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'Java', 'SQL'],
      color: 'primary',
      note: 'Comfortable working with multiple programming languages for backend and scripting tasks.',
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['HTML/CSS', 'React', 'Tailwind CSS'],
      color: 'secondary',
      note: 'Skilled in crafting responsive, accessible, and visually engaging user interfaces.',
    },
    {
      title: 'Data Tools',
      icon: BarChart3,
      skills: ['Pandas', 'Streamlit', 'Plotly', 'Excel'],
      color: 'accent',
      note: 'Experienced in data analysis, interactive dashboards, and storytelling with data.',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'primary',
      note: 'Familiar with relational and NoSQL databases for storage and querying.',
    },
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
            A categorized overview of the tools and technologies I’ve worked with to build reliable and user-focused solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1 text-sm bg-muted/50 rounded-full border border-border/40"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 text-center">{category.note}</p>
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
                  'Communication',

                  'Team Collaboration',

                  'Problem Solving',

                  'Time Management',

                  'Git & GitHub',

                  'Streamlit Apps',

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
