import { GnusLogo } from "../graphics/GnusLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <GnusLogo size={28} />
            <span className="font-semibold">GNUS</span>
          </div>
          <p className="text-white/70 mt-2">Decentralized GPU network</p>
          <p className="text-white/70 mt-2">for affordable AI compute.</p>
        </div>
        <div className="grid grid-cols-7 gap-6">
          <div className="space-y-2">
            <div className="font-medium text-white">For Businesses</div>
            <a href="#how" className="block text-white/70 hover:text-white">
              GPU Processing
            </a>
            <a href="#business" className="block text-white/70 hover:text-white">
              Pricing
            </a>
            <a href="#dev" className="block text-white/70 hover:text-white">
              Customer Stories
            </a>
            <a href="#dev" className="block text-white/70 hover:text-white">
              Docs
            </a>
             <a href="#dev" className="block text-white/70 hover:text-white">
              Book a Demo
            </a>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-white">For Developers</div>
            <a href="#ecosystem" className="block text-white/70 hover:text-white">
              Integrate with GNUS
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Revenue Model
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Use Cases
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Docs
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Join the Developer Program
            </a>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-white">Resources</div>
            <a href="#ecosystem" className="block text-white/70 hover:text-white">
              Docs
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Blog
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              FAQ
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Help Center
            </a>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-white">Genius Ventures</div>
            <a href="#ecosystem" className="block text-white/70 hover:text-white">
              About
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Team
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Portfolio
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Investing
            </a>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-white">Community</div>
            <a href="#ecosystem" className="block text-white/70 hover:text-white">
              X / Twitter
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              YouTube
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Instagram
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Telegram
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Ambassador Program
            </a>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-white">Contact</div>
            <a href="#ecosystem" className="block text-white/70 hover:text-white">
              Get in Touch
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Contact Sales
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Investor Inquiries
            </a>
          </div>
        </div>
      </div>
      <div className="font-medium text-white/70 text-center pb-6">
        <div>© {new Date().getFullYear()} GNUS.AI All rights reserved.</div>
      </div>
    </footer>
  );
}