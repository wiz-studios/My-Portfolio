import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ProjectPreviewImage } from "@/components/ProjectPreviewImage"

export const metadata = {
  title: "Projects",
  description: "Discover projects Emmanuel Ronoh has worked on in web design and development.",
}

const projects = [
  {
    title: "Japhes Cakes",
    description:
      "A boutique bakery website highlighting products, flavors, and custom orders.",
    link: "https://japhes-cakes.vercel.app",
    tags: ["Branding", "Frontend", "TypeScript"],
    image: "/projects/commerce.svg",
    slug: "japhes-cakes",
  },
  {
    title: "Benjamin Langat",
    description:
      "A personal leadership profile with an editorial layout and polished storytelling.",
    link: "https://hon-benjamin-langat.vercel.app",
    tags: ["Portfolio", "Responsive", "TypeScript"],
    image: "/projects/portfolio.svg",
    slug: "benjamin-langat",
  },
  {
    title: "Osumo POS",
    description:
      "A point-of-sale web interface with a streamlined sales and inventory flow.",
    link: "https://osumo-pos.vercel.app",
    tags: ["Dashboard", "Retail", "Web App"],
    image: "/projects/dashboard.svg",
    slug: "osumo-pos",
  },
  {
    title: "Sawa Flavours",
    description:
      "A restaurant brand site with menu-first storytelling and responsive layouts.",
    link: "https://sawa-flavours.vercel.app",
    tags: ["Food & Beverage", "Branding", "Frontend"],
    image: "/projects/commerce.svg",
    slug: "sawa-flavours",
  },
  {
    title: "Wiz Labs UX Portfolio",
    description:
      "A UX portfolio showcasing case studies and interaction design highlights.",
    link: "https://wiz-labs-ux-portfolio.vercel.app",
    tags: ["UX", "Portfolio", "Case Studies"],
    image: "/projects/portfolio.svg",
    slug: "wiz-labs-ux-portfolio",
  },
  {
    title: "Chebigen HMS",
    description:
      "A school management system interface focused on structured data views.",
    link: "https://chebigen-hms.vercel.app",
    tags: ["Education", "Dashboard", "TypeScript"],
    image: "/projects/dashboard.svg",
    slug: "chebigen-hms",
  },
  {
    title: "Kenya Accountability Tracker",
    description:
      "A public-interest dashboard tracking stalled and abandoned projects.",
    link: "https://kenya-accountability-tracker.vercel.app",
    tags: ["Civic Tech", "Data UI", "Maps"],
    image: "/projects/civic.svg",
    slug: "kenya-accountability-tracker",
  },
  {
    title: "Finance Objection Mail",
    description:
      "A focused form-based experience for drafting objection letters.",
    link: "https://finance-objection-mail.vercel.app",
    tags: ["Forms", "Utility", "HTML"],
    image: "/projects/utility.svg",
    slug: "finance-objection-mail",
  },
  {
    title: "Medicine Reminder",
    description:
      "A reminder app that keeps daily medication schedules organized.",
    link: "https://med-rem-six.vercel.app",
    tags: ["Health", "Reminders", "Frontend"],
    image: "/projects/health.svg",
    slug: "medicine-reminder",
  },
  {
    title: "To-Do",
    description:
      "A task manager with prioritization, persistence, and clean UX.",
    link: "https://to-do-app-14.vercel.app/",
    tags: ["Productivity", "React", "UX"],
    image: "/projects/utility.svg",
    slug: "to-do",
  },
  {
    title: "Hoodie Hub",
    description:
      "An e-commerce storefront for apparel with smooth browsing and cart flow.",
    link: "https://hoodie-hub.vercel.app",
    tags: ["E-commerce", "UI", "Frontend"],
    image: "/projects/commerce.svg",
    slug: "hoodie-hub",
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator with customization controls.",
    link: "https://password-generator-mu-three-60.vercel.app",
    tags: ["Utility", "TypeScript", "UI"],
    image: "/projects/utility.svg",
    slug: "password-generator",
  },
]

const getPreviewUrl = (link: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(link)}?w=1200`

export default function Projects() {
  return (
    <div className="section-container space-y-10">
      <PageHeader
        title="Projects"
        description="A showcase of work across web design, frontend development, and UI/UX."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} id={project.slug} className="surface-card card-hover">
            <CardContent className="p-6 space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60">
                <ProjectPreviewImage
                  src={getPreviewUrl(project.link)}
                  fallbackSrc={project.image}
                  alt={`${project.title} homepage preview`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl">{project.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-border/70 bg-background/60">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="outline">
                {project.link.startsWith("https") ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Live Site
                  </a>
                ) : (
                  <Link href={project.link}>View Live Site</Link>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
