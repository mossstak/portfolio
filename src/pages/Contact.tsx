import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Wire up to your preferred email/form service here
    setSent(true)
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/40 transition-colors text-sm'

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-white mb-3">Contact</h2>
      <p className="text-gray-400 mb-12 max-w-xl">Have a project in mind or just want to say hi? My inbox is always open.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
          {[
            { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
            { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com' },
            { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com' },
          ].map((item) => (
            <div key={item.label}>
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">{item.label}</span>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block mt-1 text-gray-300 hover:text-white transition-colors"
              >
                {item.value}
              </a>
            </div>
          ))}

          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-gray-500 leading-relaxed">
              I typically reply within <span className="text-gray-400">24 hours</span> on weekdays. For urgent work inquiries, email is the fastest way to reach me.
            </p>
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/5 p-10">
            <span className="text-4xl">✓</span>
            <h3 className="text-xl font-semibold text-white">Message sent!</h3>
            <p className="text-gray-400 text-sm">Thanks for reaching out — I'll get back to you soon.</p>
            <button
              onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
              className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell me about your project or just say hello..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
