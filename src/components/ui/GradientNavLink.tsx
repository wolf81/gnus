import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

export interface GradientNavLinkProps extends NavLinkProps {
  children: React.ReactNode;
}

export default function GradientNavLink({ children, ...props }: GradientNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `p-0 ${
          isActive
            ? 'font-semibold bg-gradient-to-r from-[#18AEF0] to-[#36EDB5] text-transparent bg-clip-text text-xs'
            : 'font-normal text-white/70 text-xs'
        }`
      }
    >
      {children}
    </NavLink>
  );
}