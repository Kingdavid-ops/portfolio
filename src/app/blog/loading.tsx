export default function BlogLoading() {
  return (
    <div className="pt-28 section-padding mx-auto max-w-7xl">
      <div className="h-10 w-64 animate-pulse rounded-lg bg-muted" />
      <div className="mt-4 h-6 w-96 max-w-full animate-pulse rounded bg-muted" />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 animate-pulse rounded-xl bg-muted/60" />
        ))}
      </div>
    </div>
  );
}
