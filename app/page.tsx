import { Suspense } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <PageHeader
            title="EMMANUEL RONOH"
            description="Web Developer and UI/UX Enthusiast passionate about creating innovative digital experiences that drive business success."
          />
          <div className="flex flex-wrap gap-4">
            {/* Identical button styles applied */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg rounded-lg w-full sm:w-auto"
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-primary text-white border-primary hover:bg-primary/90 shadow-lg rounded-lg w-full sm:w-auto"
            >
              <Link href="/contact" rel="noopener noreferrer">
                Connect
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg rounded-lg w-full sm:w-auto"
            >
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg rounded-lg w-full sm:w-auto"
            >
              <a
                href="https://wa.me/254719267759?text=Hi%20Wiz%20Dev,%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/wiz-studios" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <GitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/manuh10801" target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Suspense
            fallback={
              <div className="w-48 h-48 md:w-64 md:h-64 bg-muted rounded-full animate-pulse" />
            }
          >
            <Image
              src="/profile.jpg"
              alt="Emmanuel Ronoh"
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary shadow-2xl"
              loading="lazy"
            />
          </Suspense>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="card-hover">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">
              Skilled in HTML, CSS, JavaScript, React, Vue.js, Bootstrap, and Tailwind CSS.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Experienced in Figma, Adobe XD, wireframing, and prototyping.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-2">Backend Integration</h3>
            <p className="text-muted-foreground">
              Proficient in Node.js and RESTful APIs for seamless data communication.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-2">Database Management</h3>
            <p className="text-muted-foreground">
              Experienced in MySQL, PostgreSQL and MongoDB for efficient data storage and retrieval.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-2">Development Tools</h3>
            <p className="text-muted-foreground">
              Proficient in Git, GitHub, VS Code, and Chrome DevTools for efficient coding and debugging.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-2">Other Skills</h3>
            <p className="text-muted-foreground">
              Strong knowledge of responsive design, cross-browser compatibility, and web performance optimization.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
