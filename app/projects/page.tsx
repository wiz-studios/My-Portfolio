import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Projects",
  description: "Discover the projects Emmanuel Kipkurui Ronoh has worked on in networking and IT.",
}

const projects = [
  {
    title: "Password Generator",
    description:
      "Developed a Password Generator web application using Next.js, React, and Tailwind CSS, enabling users to create secure, customizable passwords and improving user experience with a responsive, intuitive interface.",
    link: "https://password-generator-14.vercel.app/",
  },
  {
    title: "Web-Based Inventory Management System",
    description: "Designed a secure, scalable system with MySQL and optimized database performance by 30%.",
    link: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "Designed and developed a fully responsive e-commerce website using React and Tailwind CSS, increasing mobile traffic by 30%.",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Developed the frontend of a task management app using Vue.js, incorporating drag-and-drop functionality and real-time updates.",
    link: "#",
  },
]

export default function Projects() {
  return (
    <div className="section-container">
      <PageHeader
        title="Projects"
        description="A showcase of my work in web design, frontend development, and UI/UX, featuring responsive websites, interactive user interfaces, and seamless integrations."
      />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
              <Button asChild variant="outline">
                {project.link === "https://password-generator-14.vercel.app/" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                ) : (
                  <Link href={project.link}>Learn More</Link>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
