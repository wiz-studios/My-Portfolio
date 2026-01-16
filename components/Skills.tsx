import { Badge } from "@/components/ui/badge"

interface SkillsProps {
  title: string
  skills: string[]
}

export function Skills({ title, skills }: SkillsProps) {
  return (
    <div>
      <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="text-sm py-1 px-2 border-border/70 bg-background/60 text-foreground/80"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

