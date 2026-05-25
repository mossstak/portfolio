const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST / GraphQL'],
  'Tooling': ['Git', 'Docker', 'Vite', 'Vitest', 'GitHub Actions'],
}

const timeline = [
  { year: '2024–Present', role: 'Senior Frontend Developer', company: 'Acme Corp', desc: 'Led migration from CRA to Vite, reducing build times by 70%. Built a design system used across 4 products.' },
  { year: '2022–2024', role: 'Full-Stack Developer', company: 'StartupXYZ', desc: 'Developed and maintained a SaaS platform serving 10k+ users. Owned the entire stack from DB schema to UI.' },
  { year: '2021–2022', role: 'Junior Developer', company: 'Agency Inc.', desc: 'Built client websites and internal tooling. First exposure to TypeScript and component-driven design.' },
]

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-white mb-3">About Me</h2>
      <p className="text-gray-400 mb-12 max-w-xl">A bit about who I am, what I know, and where I've been.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Bio */}
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            I'm a passionate full-stack developer based in <span className="text-white font-medium">London, UK</span>. I specialize in building modern web applications with clean, maintainable code and thoughtful user experiences.
          </p>
          <p>
            When I'm not coding, you'll find me hiking, experimenting with mechanical keyboards, or reading about systems design and distributed computing.
          </p>
          <p>
            I believe great software comes from empathy for users, clear communication with teams, and an obsession with craft.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
        <div className="relative border-l border-white/10 pl-8 space-y-10">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-10 top-1 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-gray-950" />
              <span className="text-xs font-mono text-violet-400">{item.year}</span>
              <h4 className="text-lg font-semibold text-white mt-1">{item.role}</h4>
              <span className="text-sm text-gray-500">{item.company}</span>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
