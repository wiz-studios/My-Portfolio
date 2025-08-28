import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Skills } from "@/components/Skills"

export const metadata = {
  title: "Skills & Certifications",
  description: "Explore Emmanuel Kipkurui Ronoh's technical skills and professional certifications.",
}

const skillsData = [
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", " Bootstrap", "Tailwind CSS"],
  },
  {
    category: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Wireframing" ,"Prototyping"],
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
    skills: ["Responsive Design", "GitHub", "Cross-Browser Compatibility", "Web Performance Optimization"],
  },
]

const certifications = [
 "CCNA R&S: Introduction to Networks (Cisco Networking Academy, 2018).",
  "NDG Linux Essentials: Cisco Networking Academy, 2019.",
  "Google IT Support Professional Certificate: 2023.",
  "AWS Cloud Practitioner Essentials: 2023.",
  "Introduction to Cybersecurity: Cisco Networking Academy, 2025."
]

export default function SkillsPage() {
  return (
    <div className="section-container">
      <PageHeader
        title="Skills & Certifications"
        description="My technical expertise and professional qualifications"
      />
      <div className="mt-8 space-y-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {skillsData.map((skillSet, index) => (
                <Skills key={index} title={skillSet.category} skills={skillSet.skills} />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

