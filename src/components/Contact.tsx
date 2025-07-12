import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// ... keep imports as-is
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

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* New Message Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Available for Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I’m always looking for exciting opportunities to apply my skills in real-world projects. Whether you're hiring for an internship, freelance collaboration, or just want to discuss ideas, I’d love to hear from you.
              </p>
              <Button 
                type="button"
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3"
                asChild
              >
                <a href="mailto:rahulkrishnamurthy42@gmail.com">
                  Contact Me
                  <Send className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <div className="space-y-8 slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
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

            {/* CTA Card (unchanged style, updated message) */}
            <Card className="bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">Let's Collaborate</h3>
                <p className="text-muted-foreground mb-6">
                  Have an idea, role, or project in mind? I'm eager to contribute and collaborate. Let's connect and build something impactful.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:rahulkrishnamurthy42@gmail.com">
                    Start a Conversation
                    <Mail className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
