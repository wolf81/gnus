import { ACCENTS } from "../../constants/accents";

export function ContentWrap({ children, color }: {
    children: React.ReactNode,
    color?: string
}) {
  const violet = color ?? ACCENTS.violet; // fallback if ACCENTS not passed in

  return (
    <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.02]">
      <div className="flex items-center justify-center opacity-95" style={{ color: violet }}>
        {children}
      </div>
    </div>
  );
}
