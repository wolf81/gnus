import Button from '../ui/Button'
import GradientNavLink from '../ui/GradientNavLink'

export default function Nav() {
  return (
    <nav className="w-full h-[60px] relative bg-[#0C0E14] border border-white/5 shadow-inner rounded-lg backdrop-blur-[10px] overflow-hidden flex items-center px-1">
      <img src="/gnus/logo.png" alt="Logo" className="px-1 w-10 h-10 aspect-square" />
      <label className="text-sm text-white pl-[0.75rem]">GNUS.AI</label>
      <div className="flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <GradientNavLink to="/gnus">
          Home
        </GradientNavLink>
        <GradientNavLink to="/gnus/about">
          About
        </GradientNavLink>
        <GradientNavLink to="/gnus/how-it-works">
          How it Works
        </GradientNavLink>
        <GradientNavLink to="/gnus/business">
          Business
        </GradientNavLink>
        <GradientNavLink to="/gnus/developers">
          Developers
        </GradientNavLink>
        <GradientNavLink to="/gnus/use-cases">
          Use Cases
        </GradientNavLink>
        <GradientNavLink to="/gnus/docs">
          Docs
        </GradientNavLink>
        <GradientNavLink to="/gnus/ecosystem">
          Ecosystem
        </GradientNavLink>
      </div>
      <div className="gap-3 flex ml-auto px-1">
        <Button accent="bg-accent-primary" className="text-xs">Book a Demo</Button>
        <Button accent="bg-accent-secondary" className="text-xs">Start Earning</Button>
      </div>
    </nav>
  )
}