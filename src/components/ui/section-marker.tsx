export function SectionMarker({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <p className="section-label flex items-center gap-3">
      <span className="text-accent">§</span>
      <span>{id}</span>
      <span className="h-px min-w-8 flex-1 bg-border" aria-hidden />
      <span className="text-muted">{title}</span>
    </p>
  );
}
