"use client";

import { useEffect, useState, Suspense } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUp,
  ArrowUpRight,
  Brush,
  Code2,
  Sparkles,
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
} from "lucide-react";

const getFadeUpVariants = (reduceMotion: boolean): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
});

const highlights = [
  {
    title: "Focus",
    detail: "UI/UX, frontend engineering, and web apps",
  },
  {
    title: "Based in",
    detail: "Nairobi, Kenya",
  },
  {
    title: "Available",
    detail: "Freelance and full-time opportunities",
  },
];

const services = [
  {
    title: "UI/UX Direction",
    description:
      "Crafting product interfaces, design systems, and interactions that feel intentional and clear.",
    icon: Brush,
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive, high-performing web experiences with modern React and Next.js.",
    icon: Code2,
  },
  {
    title: "Polish and Delivery",
    description:
      "Refining flows, optimizing performance, and shipping with care and consistency.",
    icon: Sparkles,
  },
];

const getPreviewUrl = (link: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(link)}?w=1200`;

const featuredProjects = [
  {
    title: "Japhes Cakes",
    description:
      "A boutique bakery website highlighting products, flavors, and custom orders.",
    tag: "Commerce",
    link: "https://japhes-cakes.vercel.app",
    stack: ["Branding", "Frontend", "TypeScript"],
    image: "/projects/commerce.svg",
    slug: "japhes-cakes",
  },
  {
    title: "Osumo POS",
    description:
      "A point-of-sale web interface with a streamlined sales and inventory flow.",
    tag: "SaaS",
    link: "https://osumo-pos.vercel.app",
    stack: ["Dashboard", "Retail", "Web App"],
    image: "/projects/dashboard.svg",
    slug: "osumo-pos",
  },
  {
    title: "Chebigen HMS",
    description:
      "A school management system interface focused on structured data views.",
    tag: "Education",
    link: "https://chebigen-hms.vercel.app",
    stack: ["Dashboard", "TypeScript", "Admin UI"],
    image: "/projects/dashboard.svg",
    slug: "chebigen-hms",
  },
];

const toolset = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "PostgreSQL",
  "AWS",
];

const impactStats = [
  {
    value: "16",
    label: "Live launches",
    detail: "Public projects shipped across multiple industries.",
  },
  {
    value: "Design to build",
    label: "End-to-end",
    detail: "UI/UX direction through production delivery.",
  },
  {
    value: "Performance-first",
    label: "Reliable UX",
    detail: "Accessible, responsive, and polished experiences.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "Align on goals, audience, and tone with quick workshops and clear scope.",
  },
  {
    title: "Design",
    description:
      "Create focused UI concepts, validate flows, and refine visual direction.",
  },
  {
    title: "Build",
    description:
      "Develop responsive, accessible interfaces with real content and strong performance.",
  },
  {
    title: "Launch",
    description:
      "Ship confidently with QA, handoff support, and post-launch improvements.",
  },
];

const referees = [
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
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUpVariants = getFadeUpVariants(shouldReduceMotion);
  const sectionMotionProps = shouldReduceMotion
    ? { initial: false, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="section-container space-y-24"
    >
      <motion.section
        variants={fadeUpVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
      >
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="rounded-full bg-secondary/60 px-3 py-1 text-foreground/80">
              Web developer
            </span>
            <span className="rounded-full bg-secondary/60 px-3 py-1 text-foreground/80">
              UI/UX designer
            </span>
            <span className="rounded-full bg-secondary/60 px-3 py-1 text-foreground/80">
              Portfolio
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Building focused digital experiences that feel effortless.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
            I design and develop clean, responsive websites and web apps that turn ideas into
            reliable, high-performing products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="glow-button">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">{"Let's Talk"}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/Mr_Ronoh_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="surface-outline rounded-2xl p-4 text-sm text-muted-foreground"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-foreground">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://github.com/wiz-studios" target="_blank" rel="noopener noreferrer">
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
            <Link href="mailto:wiz.dev.studios@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 left-8 h-32 w-32 rounded-3xl bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-8 right-6 h-28 w-28 rounded-3xl bg-primary/25 blur-3xl" />
          <Suspense
            fallback={<div className="w-full max-w-sm aspect-[4/5] rounded-[36px] bg-muted animate-pulse" />}
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-3xl" />
              <div className="relative rounded-[36px] border border-border/60 bg-background/70 p-2 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[30px]">
                  <Image
                    src="/profile.jpg"
                    alt="Emmanuel Ronoh"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </Suspense>
          <div className="surface-card mt-6 rounded-2xl p-4">
            <p className="text-sm text-foreground">
              Currently focused on web apps, dashboards, and marketing sites with strong UX.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeUpVariants} {...sectionMotionProps} className="space-y-6">
        <div className="grid gap-6 rounded-3xl border border-border/60 bg-background/70 p-6 md:grid-cols-3">
          {impactStats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="font-display text-2xl text-foreground">{stat.value}</p>
              <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeUpVariants}
        {...sectionMotionProps}
        className="space-y-10"
      >
        <div className="space-y-3">
          <PageHeader
            title="Capabilities"
            description="A balanced mix of design thinking and engineering to bring ideas to life."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="surface-card card-hover">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/60 text-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        variants={fadeUpVariants}
        {...sectionMotionProps}
        className="space-y-10"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <PageHeader
            title="Selected Work"
            description="Recent projects highlighting product thinking, clean UI, and dependable builds."
          />
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="surface-card card-hover">
              <CardContent className="p-6 space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src={getPreviewUrl(project.link)}
                    alt={`${project.title} homepage preview`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    onError={(event) => {
                      event.currentTarget.src = project.image;
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span>{project.tag}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <h3 className="font-display text-2xl">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="outline" className="border-border/70 bg-background/60">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Button asChild variant="link" className="px-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View live site
                    </a>
                  </Button>
                  <Button asChild variant="link" className="px-0">
                    <Link href={`/projects#${project.slug}`}>Case study</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeUpVariants}
        {...sectionMotionProps}
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-6">
          <PageHeader
            title="How I Work"
            description="A clear, collaborative process that keeps projects moving and stakeholders aligned."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.title} className="surface-outline rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {step.title}
                </p>
                <p className="mt-2 text-sm text-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Card className="surface-card">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/60 text-foreground">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl">Toolbox</h3>
                <p className="text-sm text-muted-foreground">
                  The stack I use to build polished, resilient products.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolset.map((tool) => (
                <Badge key={tool} variant="outline" className="border-border/70 bg-background/60">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        variants={fadeUpVariants}
        {...sectionMotionProps}
        className="space-y-10"
      >
        <PageHeader
          title="References"
          description="Professional contacts who can speak to my skills, character, and work ethic."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {referees.map((referee) => (
            <Card key={referee.email} className="surface-card card-hover">
              <CardContent className="p-6 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{referee.name}</h3>
                  <p className="text-sm text-muted-foreground">{referee.role}</p>
                </div>
                <p className="text-sm text-foreground">{referee.phone}</p>
                <a
                  href={`mailto:${referee.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {referee.email}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 glow-button rounded-full shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </motion.div>
  );
}
