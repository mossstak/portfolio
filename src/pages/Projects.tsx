const projects = [
  {
    title: 'DevFlow',
    description: 'A project management tool for developers. Real-time collaboration, Kanban boards, and GitHub integration.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    demo: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Shoply',
    description: 'A full-featured e-commerce storefront with Stripe payments, inventory management, and an admin dashboard.',
    tags: ['Next.js', 'Prisma', 'Stripe', 'Tailwind'],
    demo: '#',
    repo: '#',
    featured: true,
  },
  // {
  //   title: 'Palette AI',
  //   description: 'Generate color palettes from a text prompt using the OpenAI API. Export to CSS, Figma tokens, or Tailwind config.',
  //   tags: ['React', 'OpenAI', 'TypeScript'],
  //   demo: '#',
  //   repo: '#',
  //   featured: false,
  // },
  // {
  //   title: 'CLI Toolkit',
  //   description: 'A collection of Node.js CLI scripts for scaffolding projects, renaming files in bulk, and automating Git workflows.',
  //   tags: ['Node.js', 'Commander.js', 'Shell'],
  //   demo: '#',
  //   repo: '#',
  //   featured: false,
  // },
  // {
  //   title: 'Weather Widget',
  //   description: 'Minimalist weather app with geolocation, hourly forecasts, and animated weather icons. PWA-ready.',
  //   tags: ['React', 'PWA', 'OpenWeather API'],
  //   demo: '#',
  //   repo: '#',
  //   featured: false,
  // },
  // {
  //   title: 'Markdown Notes',
  //   description: 'Local-first markdown note-taking app with live preview, tags, and full-text search. No account needed.',
  //   tags: ['React', 'IndexedDB', 'Remark'],
  //   demo: '#',
  //   repo: '#',
  //   featured: false,
  // },
]

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-white mb-3">Projects</h2>
      <p className="text-gray-400 mb-12 max-w-xl">A selection of things I've built — from side projects to production apps.</p>

      {/* Featured */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {projects.filter((p) => p.featured).map((p) => (
          <div
            key={p.title}
            className="relative rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6 flex flex-col gap-4 hover:border-violet-500/60 transition-colors"
          >
            <span className="absolute top-4 right-4 text-xs text-violet-400 font-medium border border-violet-500/30 rounded-full px-2 py-0.5">Featured</span>
            <h3 className="text-xl font-bold text-white pr-16">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto pt-2">
              <a href={p.demo} className="text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium">Live Demo →</a>
              <a href={p.repo} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Source</a>
            </div>
          </div>
        ))}
      </div>

      {/* Rest */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.filter((p) => !p.featured).map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3 hover:border-white/20 hover:bg-white/[0.07] transition-colors"
          >
            <h3 className="text-base font-bold text-white">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/10">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 pt-1">
              <a href={p.demo} className="text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium">Demo →</a>
              <a href={p.repo} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
