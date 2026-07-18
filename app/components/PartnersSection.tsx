'use client'

const row1 = [
  { name: 'Amazon Web Services', abbr: 'aws' },
  { name: 'Google Cloud Platform', abbr: 'Google Cloud' },
  { name: 'Microsoft Azure', abbr: 'Azure' },
  { name: 'Docker', abbr: 'docker' },
  { name: 'Salesforce', abbr: 'salesforce' },
  { name: 'Oracle', abbr: 'ORACLE' },
  { name: 'Accenture', abbr: 'accenture' },
  { name: 'Boomi', abbr: 'boomi' },
  { name: 'Red Hat', abbr: 'Red Hat' },
  { name: 'Ingram Micro', abbr: 'INGRAM' },
]

const row2 = [
  { name: 'MuleSoft', abbr: 'MuleSoft' },
  { name: 'SAP', abbr: 'SAP' },
  { name: 'IBM', abbr: 'IBM' },
  { name: 'Snowflake', abbr: 'Snowflake' },
  { name: 'Stripe', abbr: 'stripe' },
  { name: 'OneStream', abbr: 'onestream' },
  { name: 'Datadog', abbr: 'Datadog' },
  { name: 'Twilio', abbr: 'twilio' },
  { name: 'Sabre', abbr: 'Sabre' },
  { name: 'ServiceNow', abbr: 'ServiceNow' },
]

function PartnerCard({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex flex-col items-center justify-between shrink-0 rounded-2xl px-6 pt-8 pb-5"
      style={{
        width: 200,
        height: 160,
        backgroundColor: '#161616',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex-1 flex items-center justify-center">
        <span
          className="text-white text-center leading-tight"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: abbr.length > 8 ? '18px' : abbr.length > 5 ? '22px' : '28px',
            letterSpacing: abbr === abbr.toUpperCase() && abbr.length <= 4 ? '0.05em' : '0',
          }}
        >
          {abbr}
        </span>
      </div>
      <p
        className="text-white/40 text-xs text-center tracking-wide w-full truncate"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {name}
      </p>
    </div>
  )
}

function MarqueeRow({ items, direction }: { items: typeof row1; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items]
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 w-max ${animClass}`}>
        {doubled.map((item, i) => (
          <PartnerCard key={`${item.name}-${i}`} name={item.name} abbr={item.abbr} />
        ))}
      </div>
    </div>
  )
}

export default function PartnersSection() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#080808' }}>
      {/* Heading */}
      <div className="text-center mb-16 px-8">
        <h2
          className="text-white leading-[1.2]"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 56px)',
          }}
        >
          Strategic Alliances that
          <br />
          <span style={{ color: '#0066ff' }}>Power Innovation</span>
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <MarqueeRow items={row1} direction="left" />
      </div>

      {/* Row 2 — scrolls right */}
      <MarqueeRow items={row2} direction="right" />
    </section>
  )
}
