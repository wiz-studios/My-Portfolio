import { PageHeader } from "@/components/PageHeader"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitlabIcon as GitHub, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export const metadata = {
  title: "Contact Me",
  description: "Get in touch with Emmanuel Ronoh for collaborations and opportunities.",
}

export default function Contact() {
  return (
    <div className="section-container space-y-10">
      <PageHeader
        title="Contact Me"
        description="Let's connect and explore how we can work together."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="surface-card">
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="font-display text-2xl">Send a Message</h2>
              <p className="text-sm text-muted-foreground">
                Share a project idea, ask a question, or just say hello.
              </p>
            </div>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="surface-card">
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="font-display text-2xl">Contact Details</h2>
              <p className="text-sm text-muted-foreground">
                Reach out directly or connect on social platforms.
              </p>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:wiz.dev.studios@gmail.com" className="text-primary hover:underline">
                  wiz.dev.studios@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+254719267759" className="hover:underline">
                  +254719267759
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nairobi%2C%20Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  P.O. Box 43844-00100, Nairobi, Kenya
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
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
                href="mailto:wiz.dev.studios@gmail.com"
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

            <div className="space-y-4">
              <div>
                <h3 className="font-display text-xl">Book a Quick Call</h3>
                <p className="text-sm text-muted-foreground">
                  Prefer a direct conversation? Reach me instantly via WhatsApp or email.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="w-full">
                  <a href="https://wa.me/254719267759" target="_blank" rel="noopener noreferrer">
                    WhatsApp Me
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:wiz.dev.studios@gmail.com">Email Me</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
