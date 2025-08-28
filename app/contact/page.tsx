import { PageHeader } from "@/components/PageHeader"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { GitlabIcon as GitHub, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export const metadata = {
  title: "Contact Me",
  description: "Get in touch with Emmanuel Ronoh for networking and IT opportunities.",
}

export default function Contact() {
  return (
    <div className="section-container">
      <PageHeader title="Contact Me" description="Let's connect and explore how we can work together." />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Get in Touch / Feedback</h2>
            <ContactForm />
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:kipkuruironoh254@gmail.com" className="text-primary hover:underline">
                  kipkuruironoh254@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+254719267759" className="hover:underline">+254719267759</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=W2GW+9J+Thika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  P.O. Box 314-01000, Thika
                </a>
              </div>

              {/* Social Media Icons (moved just above STAY TUNED) */}
              <div className="flex items-center space-x-4 mt-8 mt-2">
                <a
                  href="https://github.com/EmmanuelKipkurui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <GitHub className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/manuh10801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:kipkuruironoh254@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://www.instagram.com/_manuhronoh?igsh=MWs2YXFoc2l3bGF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://wa.me/254719267759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a
                  href="https://www.tiktok.com/@_manuhronoh?_t=ZM-8tWNkWAdPPi&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <TikTokIcon className="h-6 w-6" />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>

              {/* Stay Tuned Section */}
              <h2 className="text-2xl font-semibold mt-8 mb-4 gradient-text">Stay Tuned</h2>
              <p className="mb-4">Stay updated with the latest from my web development and design journey. </p>
                 
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                <input
  type="email"
  placeholder="your.email@example.com"
  className="px-4 py-2 rounded-md border border-gray-300 w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
/>

                </div>
                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors w-full"
                  >
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
