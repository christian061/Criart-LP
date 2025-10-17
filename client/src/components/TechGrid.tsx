export function TechGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--grid-lines) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--grid-lines) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    </div>
  );
}
