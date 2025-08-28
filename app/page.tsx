"use client";
import { useState, useEffect, Suspense } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";

// Reusable animation variants
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8"
    >
      {/* Header Section */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 space-y-8">
          <PageHeader
            title="EMMANUEL RONOH"
            description="Web Developer and UI/UX Enthusiast passionate about creating innovative digital experiences that drive business success."
          />
          {/* Buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg rounded-lg"
            >
              <a href="/Mr_Ronoh_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="glow-button text-white shadow-lg rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              <a
                href="https://wa.me/254719267759?text=Hi%20Wiz%20Dev,%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-4"
          >
            <Link
              href="https://github.com/wiz-studios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <GitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/manuh10801"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:kipkuruironoh254@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center"
        >
          <Suspense
            fallback={
              <div className="w-48 h-48 md:w-64 md:h-64 bg-muted rounded-full animate-pulse" />
            }
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary glass-morphism">
              <Image
                src="/profile.jpg"
                alt="Emmanuel Ronoh"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Suspense>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A blend of technical expertise and creative problem-solving skills
          that allow me to build functional, scalable, and user-friendly digital
          solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              description:
                "Skilled in HTML, CSS, JavaScript, React, Vue.js, Bootstrap, and Tailwind CSS.",
            },
            {
              title: "UI/UX Design",
              description:
                "Experienced in Figma, Adobe XD, wireframing, and prototyping.",
            },
            {
              title: "Backend Integration",
              description:
                "Proficient in Node.js and RESTful APIs for seamless data communication.",
            },
            {
              title: "Database Management",
              description:
                "Experienced in MySQL, PostgreSQL and MongoDB for efficient data storage and retrieval.",
            },
            {
              title: "Development Tools",
              description:
                "Proficient in Git, GitHub, VS Code, and Chrome DevTools for efficient coding and debugging.",
            },
            {
              title: "Other Skills",
              description:
                "Strong knowledge of responsive design, cross-browser compatibility, and web performance optimization.",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <Card className="card-hover">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Referees Section */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Referees</h2>
        <p className="text-center text-muted-foreground mb-12">
          Professional contacts who can vouch for my skills, character, and
          experience.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Francis Bii",
              role: "Headmaster, Chebigen Primary School",
              phone: "+254 726 960 971",
              email: "kfrankbii@gmail.com",
            },
            {
              name: "Geoffrey Bett",
              role: "Boarding Master, Kericho High School",
              phone: "+254 723 394 476",
              email: "gtteb2112@gmail.com",
            },
            {
              name: "Elizabeth Ndunge",
              role: "Lecturer, Dedan Kimathi University of Technology",
              phone: "+254 727 448 796",
              email: "elizabeth.ndunge@dkut.ac.ke",
            },
          ].map((referee, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="bg-muted p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-semibold">{referee.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {referee.role}
              </p>
              <p className="text-sm">{referee.phone}</p>
              <a
                href={`mailto:${referee.email}`}
                className="text-primary hover:underline text-sm"
              >
                {referee.email}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-primary text-white hover:bg-primary/90 shadow-lg rounded-full p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </Button>
      )}
    </motion.div>
  );
}
