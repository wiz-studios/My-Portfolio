import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Skills } from "@/components/Skills"

export const metadata = {
  title: "Skills and Certifications",
  description: "Explore Emmanuel Ronoh's technical skills and professional certifications.",
}

const skillsData = [
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
  },
  {
    category: "Backend Integration",
    skills: ["Node.js", "RESTful APIs", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools"],
  },
  {
    category: "Other Skills",
    skills: ["Responsive Design", "Cross-Browser Compatibility", "Web Performance Optimization"],
  },
]

const certifications = [
  "CCNA R&S: Introduction to Networks (Cisco Networking Academy, 2018)",
  "NDG Linux Essentials (Cisco Networking Academy, 2019)",
  "Google IT Support Professional Certificate (2023)",
  "AWS Cloud Practitioner Essentials (2023)",
  "Introduction to Cybersecurity (Cisco Networking Academy, 2025)",
]

export default function SkillsPage() {
  return (
    <div className="section-container space-y-10">
      <PageHeader
        title="Skills and Certifications"
        description="A snapshot of my technical strengths and professional training."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="surface-card">
          <CardContent className="p-6 space-y-6">
            <h2 className="font-display text-2xl">Technical Skills</h2>
            <div className="space-y-6">
              {skillsData.map((skillSet) => (
                <Skills key={skillSet.category} title={skillSet.category} skills={skillSet.skills} />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="surface-card">
          <CardContent className="p-6 space-y-6">
            <h2 className="font-display text-2xl">Certifications</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
