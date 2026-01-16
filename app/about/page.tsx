import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Award, Compass, GraduationCap, User } from "lucide-react"

export const metadata = {
  title: "About Me",
  description: "Learn more about Emmanuel Ronoh and his background.",
}

const highlights = [
  {
    title: "Design to build",
    description:
      "I translate ideas into clear UI systems and build them with clean, responsive code.",
    icon: Compass,
  },
  {
    title: "Reliable delivery",
    description:
      "I focus on speed, accessibility, and polished UX for real-world products.",
    icon: User,
  },
]

const education = [
  {
    title: "Bachelor of Science in Information Technology",
    school: "Dedan Kimathi University of Technology",
    period: "2017-2021",
  },
  {
    title: "KCSE Certificate",
    school: "Kericho High School",
    period: "2013-2016",
    detail: "Grade: B (Plain)",
  },
  {
    title: "KCPE Certificate",
    school: "Chebigen Primary School",
    period: "2005-2012",
    detail: "Marks: 365",
  },
]

const certifications = [
  "CCNA R&S: Introduction to Networks (Cisco Networking Academy, 2018)",
  "NDG Linux Essentials (Cisco Networking Academy, 2019)",
  "Google IT Support Professional Certificate (2023)",
  "AWS Cloud Practitioner Essentials (2023)",
  "Introduction to Cybersecurity (Cisco Networking Academy, 2025)",
]

export default function About() {
  return (
    <div className="section-container space-y-10">
      <PageHeader
        title="About Me"
        description="I build digital experiences that balance usability, performance, and thoughtful design."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="surface-card lg:col-span-2">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/60 text-foreground">
                <User className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl">Personal Profile</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I am a creative and detail-oriented web designer specializing in frontend development,
                UI/UX design, and responsive web applications. With strong skills in HTML, CSS,
                JavaScript, React, and Vue.js, I bring ideas to life with clean code and seamless
                design.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise extends to RESTful APIs, MySQL, and cloud platforms, enabling me to
                deliver scalable, secure, and efficient web solutions. From e-commerce platforms to
                task management apps, I design with a focus on accessibility, performance, and user
                delight.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="surface-outline rounded-2xl p-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="surface-card">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/60 text-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl">Education</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm">{item.school}</p>
                  <p className="text-sm">{item.period}</p>
                  {item.detail && <p className="text-sm">{item.detail}</p>}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="surface-card">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/60 text-foreground">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl">Certifications</h2>
            </div>
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
