import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center gap-6">
      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
        Open to opportunities
      </span>

      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
        Hi, I'm <span className="text-violet-400">Mostak Khan</span>
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
        A full-stack developer who loves building fast, accessible, and beautiful web experiences. I turn ideas into production-ready products.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <Link
          to="/projects"
          className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium transition-colors"
        >
          Get In Touch
        </Link>
      </div>

      {/* Tech stack pills */}
      <div className="w-100 mt-12 flex flex-wrap gap-2 justify-center">
        {['React', 'C#' ,'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Java', 'JavaScript'].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 hover:border-violet-500/40 hover:text-gray-300 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

        {/* Stats - Add later
        <div className="mt-16 w-full grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Shipped', value: '20+' },
            { label: 'Happy Clients', value: '15+' },
            { label: 'Cups of Coffee', value: '∞' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-950 px-6 py-8 flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-violet-400">{s.value}</span>
              <span className="text-sm text-gray-500">{s.label}</span>
            </div>
          ))}
        </div> */}
    </section>
  )
}
