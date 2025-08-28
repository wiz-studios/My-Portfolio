import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { GraduationCap, Award, User } from "lucide-react"

export const metadata = {
  title: "About Me",
  description: "Learn more about Emmanuel Ronoh and his educational background.",
}

export default function About() {
  return (
    <div className="section-container">
      {/* Page Header */}
      <PageHeader
        title="About Me"
        description="Building impactful digital experiences through technology, design, and innovation."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Personal Profile */}
        <Card className="card-hover col-span-2">
          <CardHeader className="flex flex-row items-center gap-3">
            <User className="w-7 h-7 text-primary" />
            <CardTitle className="text-2xl gradient-text">Personal Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a <span className="font-semibold text-foreground">creative and detail-oriented Web Designer</span> 
              specializing in <span className="font-medium">frontend development, UI/UX design</span>, and 
              responsive web applications. With strong skills in <span className="font-medium">HTML, CSS, JavaScript, React, 
              and Vue.js</span>, I bring ideas to life with clean code and seamless design.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My expertise extends to <span className="font-medium">RESTful APIs, MySQL, and cloud platforms</span>, 
              enabling me to deliver <span className="font-medium">scalable, secure, and efficient</span> web solutions. 
              From <span className="italic">e-commerce platforms</span> to <span className="italic">task management apps</span>, 
              I design with a focus on <span className="font-medium">accessibility, performance, and user delight</span>.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center gap-3">
            <GraduationCap className="w-7 h-7 text-primary" />
            <CardTitle className="text-2xl gradient-text">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-primary">Bachelor of Science in Information Technology</h3>
                <p className="text-muted-foreground">Dedan Kimathi University of Technology <br /> (2017–2021)</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-primary">KCSE Certificate</h3>
                <p className="text-muted-foreground">Kericho High School (2013–2016) — <span className="font-medium">Grade: B (Plain)</span></p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-primary">KCPE Certificate</h3>
                <p className="text-muted-foreground">Chebigen Primary School (2005–2012) — <span className="font-medium">Marks: 365</span></p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center gap-3">
            <Award className="w-7 h-7 text-primary" />
            <CardTitle className="text-2xl gradient-text">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 mt-2 space-y-3 text-muted-foreground">
              <li><b>CCNA R&S:</b> Introduction to Networks (Cisco Networking Academy, 2018)</li>
              <li><b>NDG Linux Essentials:</b> Cisco Networking Academy, 2019</li>
              <li><b>Google IT Support Professional Certificate:</b> 2023</li>
              <li><b>AWS Cloud Practitioner Essentials:</b> 2023</li>
              <li><b>Introduction to Cybersecurity:</b> Cisco Networking Academy, 2025</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
