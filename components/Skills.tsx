import { Badge } from "@/components/ui/badge"

interface SkillsProps {
  title: string
  skills: string[]
}

export function Skills({ title, skills }: SkillsProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-lg text-primary">{title}:</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-sm py-1 px-2 bg-secondary/10 text-secondary-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

