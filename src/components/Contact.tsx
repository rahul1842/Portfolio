import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rahulkrishnamurthy42@gmail.com',
      link: 'mailto:rahulkrishnamurthy42@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: '#',
    },
  ];

  // Mini game: bouncing dot animation
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newX = prev.x + velocity.x;
        const newY = prev.y + velocity.y;
        let newVX = velocity.x;
        let newVY = velocity.y;

        if (newX >= 270 || newX <= 0) newVX *= -1;
        if (newY >= 270 || newY <= 0) newVY *= -1;

        setVelocity({ x: newVX, y: newVY });
        return { x: newX, y: newY };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left: Fun Interactive Animation */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Mini Game</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-[300px] h-[300px] bg-muted rounded-lg overflow-hidden mx-auto">
                <div
                  className="absolute w-6 h-6 bg-primary rounded-full"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                ></div>
              </div>
              <p className="text-center text-muted-foreground mt-4 text-sm">
                Just a bouncing dot :)
              </p>
            </CardContent>
          </Card>

          {/* Right: Contact Info Only */}
          <div className="space-y-6 slide-up" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
