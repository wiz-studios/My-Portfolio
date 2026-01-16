interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-3">
      <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">{description}</p>
      )}
    </div>
  )
}

