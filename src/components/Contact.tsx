import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:rahulkrishnamurthy42@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Message Prepared!",
      description: "Your email client should open with the message ready to send.",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rahulkrishnamurthy42@gmail.com',
      link: 'mailto:rahulkrishnamurthy42@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8431472008',
      link: 'tel:+918431472008'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rahul1842', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rahul-krishnamurthy-17b58a319/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rahulkrishnamurthy42@gmail.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-muted/30 border-border/50 focus:border-primary resize-none"
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info and Socials */}
          <div className="space-y-8 slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Cards */}
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

            {/* Social Media Links */}
            <Card className="bg-gradient-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-accent">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-accent/20 transition-all duration-300 hover:scale-110 glow-accent"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow me on social media for updates on my latest projects and insights.
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">Ready to Work Together?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your project and bring your ideas to life with clean code and innovative solutions.
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
