import React, { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { useToast } from "../../hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "nargistarannum1@gmail.com", href: "mailto:nargistarannum1@gmail.com" },
  { icon: Phone, label: "+91 9893264416", href: "tel:+919893264416" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com/in/nargistarannum-5186b413a" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="space-y-4">
          <h2
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about frontend development.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">

                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />

                <Textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  required
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;