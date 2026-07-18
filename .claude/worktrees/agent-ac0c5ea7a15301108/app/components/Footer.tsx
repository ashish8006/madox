const footerLinks = {
  Properties: ['New Listings', 'Featured Estates', 'Penthouses', 'Villas', 'Historic Homes'],
  Services: ['Acquisitions', 'Private Sales', 'Portfolio Mgmt', 'Consulting', 'Relocation'],
  Company: ['Our Story', 'Advisors', 'Awards', 'Press', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Disclaimer'],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#080808' }}>
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="text-center mb-10">
          <p
            className="leading-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(48px, 7vw, 100px)',
              color: 'rgba(255,255,255,0.07)',
            }}
          >
            LuxeEstate
          </p>
        </div>

        <div className="section-line mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 text-xs hover:text-white/70 transition-all duration-400 hover:-translate-y-0.5 inline-block"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-white/15 text-xs"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            © {new Date().getFullYear()} LuxeEstate. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/25 text-xs tracking-widest hover:text-white/60 transition-all duration-400 hover:-translate-y-0.5 inline-block"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {social}
              </a>
            ))}
          </div>

          <p
            className="text-white/12 text-[10px] tracking-widest"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.12)' }}
          >
            Member of the Global Luxury Realty Network
          </p>
        </div>
      </div>
    </footer>
  )
}
