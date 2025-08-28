interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tight gradient-text">{title}</h1>
      {description && <p className="text-xl text-muted-foreground">{description}</p>}
    </div>
  )
}

