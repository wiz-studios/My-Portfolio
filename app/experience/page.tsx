import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

export const metadata = {
  title: "Work Experience",
  description: "Explore Emmanuel Ronoh's professional experience and internships.",
}

const experiences = [
  {
    title: "ICT Intern",
    company: "Digitalent Internship Programme, ICT Authority",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 11, 31),
    responsibilities: [
      "Planned and implemented secure network solutions to protect critical operations.",
      "Designed network diagrams and disaster recovery documentation.",
      "Researched emerging technologies to improve system performance and reliability.",
      "Developed access control policies to protect data integrity and confidentiality.",
    ],
  },
  {
    title: "IT Support Intern",
    company: "Nakuru High Court",
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 2, 31),
    responsibilities: [
      "Provided IT support for staff, troubleshooting network and system issues.",
      "Assisted with database management and compliance documentation.",
      "Monitored system health and implemented updates to reduce downtime.",
    ],
  },
]

const techStacks = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "RESTful APIs",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "GraphQL",
]

export default function Experience() {
  return (
    <div className="section-container space-y-10">
      <PageHeader
        title="Work Experience"
        description="My journey from IT operations to building intuitive, high-performing web experiences."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.title} className="surface-card card-hover">
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="border-border/70 bg-background/60">
                    {format(exp.startDate, "MMM yyyy")} - {format(exp.endDate, "MMM yyyy")}
                  </Badge>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {exp.responsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="surface-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-display text-2xl">Tech Stack</h3>
            <p className="text-sm text-muted-foreground">
              The tools and platforms I use across projects and collaborations.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((tech) => (
                <Badge key={tech} variant="outline" className="border-border/70 bg-background/60">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
