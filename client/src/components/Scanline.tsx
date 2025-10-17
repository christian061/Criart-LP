export function Scanline() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <div 
        className="absolute w-full h-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-scanline"
      />
    </div>
  );
}
