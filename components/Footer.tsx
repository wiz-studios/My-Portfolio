import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitlabIcon as GitHub, Instagram, Linkedin, Mail, MessageCircle, Home, User, Briefcase, Folder, Code } from "lucide-react"

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/70 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="space-y-4">
              <h3 className="font-display text-xl text-foreground">Emmanuel Ronoh</h3>
              <p className="text-sm text-muted-foreground">
                Web developer and UI/UX designer building purposeful, high-performance digital products.
              </p>
              <p className="text-sm text-muted-foreground">Based in Nairobi, Kenya.</p>
            </div>
            
            {/* Middle Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="grid grid-cols-2 gap-3">
                <Link href="/" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
                <Link href="/about" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <User className="h-4 w-4" />
                  <span>About</span>
                </Link>
                <Link href="/experience" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Briefcase className="h-4 w-4" />
                  <span>Experience</span>
                </Link>
                <Link href="/projects" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Folder className="h-4 w-4" />
                  <span>Projects</span>
                </Link>
                <Link href="/skills" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Code className="h-4 w-4" />
                  <span>Skills</span>
                </Link>
                <Link href="/contact" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </nav>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>

              {/* Social Icons in one row */}
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/wiz-studios" target="_blank" rel="noopener noreferrer">
                    <GitHub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/manuh10801" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:wiz.dev.studios@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/_manuhronoh?igsh=MWs2YXFoc2l3bGF6" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://wa.me/254719267759" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    <span className="sr-only">WhatsApp</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.tiktok.com/@_manuhronoh?_t=ZM-8tWNkWAdPPi&_r=1" target="_blank" rel="noopener noreferrer">
                    <TikTokIcon />
                    <span className="sr-only">TikTok</span>
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Feel free to reach out for collaborations or opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear}{" "}
            <a
              href="https://ronoh-portfolio-14.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Wiz Dev Studios
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
