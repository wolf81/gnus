export const SmallTexturedButton = ({ color, children }: {
  color: string,
  href: string,
  children: React.ReactNode,
}) => (
    <div className="flex items-center gap-2">
      <button
        className="px-3 py-1.5 rounded-full text-sm border transition hover:opacity-90 focus:outline-none border-transparent text-white"
        style={{ background: color}}
      >
        {children}
      </button>
    </div>
);
