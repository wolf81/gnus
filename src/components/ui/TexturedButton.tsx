import { texturedButtonStyle } from "./styles";

export const TexturedButton = ({ color, href = "#", children }: {
    color: string,
    href: string,
    children: React.ReactNode
}) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-black font-medium shadow-lg`}
    style={texturedButtonStyle(color)}
  >
    {children}
  </a>
);