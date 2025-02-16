import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Projects",
  description: "Discover the projects Emmanuel  Ronoh has worked on in networking and IT.",
}

const projects = [
  {
    title: "Password Generator",
    description:
      "Developed a Password Generator web application using Next.js, React, and Tailwind CSS, enabling users to create secure, customizable passwords and improving user experience with a responsive, intuitive interface.",
    link: "https://password-generator-14.vercel.app/",
  },
  {
    title: "Web-Based Rental Management System",
    description: "Designed a secure, scalable system with MySQL and optimized database performance by 30%.",
    link: "https://benevolent-cheesecake-415781.netlify.app/",
  },
  {
    title: "Hoodie Hub",
    description:
      "Hoodie Hub is a modern e-commerce platform for hoodie lovers, offering a seamless shopping experience with customization options. Built with a sleek and responsive design, it ensures smooth navigation and secure transactions.",
    link: "https://hoodie-hub.vercel.app/",
  },
  {
    title: "Sudoku Web App",
    description: "This is a web-based Sudoku game with enhanced features, including a solver, difficulty levels, a turn-based multiplayer mode, and customization options. The project is built using React with Tailwind CSS for styling and MongoDB for storing game data and player rankings. The UI follows a minimal design, ensuring a clean and engaging user experience.",
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
                {project.link.startsWith("https") ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
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
