import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"

export const metadata = {
  title: "About Me",
  description: "Learn more about Emmanuel  Ronoh and his educational background.",
}

export default function About() {
  return (
    <div className="section-container">
      <PageHeader title="About Me" description="Passionate about technology and its potential to drive innovation" />
      <div className="mt-8 space-y-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Personal Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
            A creative and detail-oriented Web Designer with expertise in frontend development, UI/UX design, and responsive web applications. Skilled in HTML, CSS, JavaScript, React, and Vue.js, with a strong passion for crafting visually appealing and user-friendly digital experiences.

With hands-on experience in RESTful API integration, MySQL, and cloud technologies, Emmanuel thrives in building efficient, scalable, and performance-driven web solutions. He has a solid background in designing e-commerce platforms, task management apps, and portfolio websites, emphasizing accessibility and responsiveness.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-primary">Bachelor of Science in Information Technology</h3>
                <p className="text-muted-foreground">Dedan Kimathi University of Technology (2017–2021)</p>
                
              </li>
              <li>
                <h3 className="text-xl font-semibold text-primary">KCSE Certificate</h3>
                <p className="text-muted-foreground">Kericho High School (2013–2016) – Grade: B (Plain)</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-primary">KCPE Certificate</h3>
                <p className="text-muted-foreground">Chebigen Primary School (2005–2012) – Marks: 365</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="card-hover">
  <CardHeader>
    <CardTitle className="text-2xl gradient-text">Certifications</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc pl-6 mt-2 space-y-2">
    <li><b>CCNA R&S:</b> Introduction to Networks (Cisco Networking Academy, 2018).</li>
<li><b>NDG Linux Essentials:</b> Cisco Networking Academy, 2019.</li>
<li><b>Google IT Support Professional Certificate:</b> 2023.</li>
<li><b>AWS Cloud Practitioner Essentials:</b> 2023.</li>
<li><b>Introduction to Cybersecurity:</b> Cisco Networking Academy, 2025.</li>
    </ul>
  </CardContent>
</Card>

      </div>
    </div>
  )
}

