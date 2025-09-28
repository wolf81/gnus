import { Link } from "react-router-dom";
import { ACCENTS } from "../../constants/accents";
import { GnusLogo } from "../graphics/GnusLogo";
import { SmallTexturedButton } from "../ui/SmallTexturedButton";

export function Nav() {
  return (
    <header className="relative z-20 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GnusLogo size={32} />
          <span className="font-semibold tracking-wide">GNUS.AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link to="/" className="hover:text-white">
            How It Works
          </Link>
          <a href="#business" className="hover:text-white">
            Businesses
          </a>
          <a href="#dev" className="hover:text-white">
            Developers
          </a>
          <a href="#ecosystem" className="hover:text-white">
            Use Cases
          </a>
          <a href="#news" className="hover:text-white">
            Docs
          </a>
          <a href="#team" className="hover:text-white">
            Ecosystem
          </a>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
            <SmallTexturedButton color={ACCENTS.blue} href="#">Book a Demo<span aria-hidden="true"></span></SmallTexturedButton>
            <SmallTexturedButton color={ACCENTS.teal} href="#">Start Earning<span aria-hidden="true"></span></SmallTexturedButton>
        </div>
      </div>
    </header>
  );
}
