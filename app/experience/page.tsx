import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { format } from "date-fns"

export const metadata = {
  title: "Work Experience",
  description: "Explore Emmanuel Kipkurui Ronoh's professional experience and internships.",
}

const experiences = [
  {
    title: "ICT Intern",
    company: "Digitalent Internship Programme, ICT Authority",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 11, 31),
    responsibilities: [
      "Planned and implemented secure network solutions, ensuring zero downtime for critical operations.",
      "Designed and maintained network diagrams and disaster recovery documentation.",
      "Researched and evaluated emerging technologies to improve system performance and reliability.",
      "Developed access control policies to protect data integrity and confidentiality.",
    ],
  },
  {
    title: "IT Support Intern",
    company: "Nakuru High Court",
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 2, 31),
    responsibilities: [
      "Provided IT support to over 50 staff, troubleshooting and resolving network-related issues.",
      "Assisted in database system management and ensured compliance with regulatory standards.",
      "Monitored system health and implemented updates, reducing downtime and enhancing performance.",
    ],
  },
]

const techStacks = [
  { name: "HTML", logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
  { name: "CSS", logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg" },
  { name: "React", logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
  { name: "Vue.js", logo: "https://img.icons8.com/?size=100&id=zdI5E8moxhs-&format=png&color=000000" },
  { name: "Node.js", logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg" },
  { name: "MongoDB", logo: "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg" },
  { name: "PostgreSQL", logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000" },
  { name: "RESTful API", logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000" },
  { name: "Tailwind CSS", logo: "https://img.icons8.com/?size=100&id=21888&format=png&color=000000" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" },
  { name: "GraphQL", logo: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
  { name: "Git", logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
]

export default function Experience() {
  return (
    <div className="section-container">
      <PageHeader title="Work Experience" description="My professional journey in IT has evolved into a passion for web development, creating intuitive and high-performing digital experiences." />
      <div className="mt-8 space-y-8">
        {/* Work Experience Cards */}
        {experiences.map((exp, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">{exp.title}</CardTitle>
              <p className="text-lg text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">
                {format(exp.startDate, "MMMM yyyy")} - {format(exp.endDate, "MMMM yyyy")}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        {/* Tech Stack Card */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Tech Stacks</CardTitle>
            <p className="text-lg text-muted-foreground">Technologies I've worked with</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {techStacks.map((tech, index) => (
                <div key={index} className="flex justify-center items-center group relative">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-14 w-14 object-contain group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-semibold">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
