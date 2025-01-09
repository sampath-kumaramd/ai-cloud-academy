export function TitleText({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl md:text-5xl font-title text-white tracking-tight radial-text">
      {children}
    </h2>
  );
}
