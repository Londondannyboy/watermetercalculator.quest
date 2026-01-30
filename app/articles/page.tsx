import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Meter Guides & Articles',
  description: 'Helpful guides and articles about water meters, water bills, and water saving tips for UK households.',
}

const articles = [
  {
    title: 'Should I Get a Water Meter? A Complete Guide',
    description: 'Everything you need to know about switching to a water meter in the UK, including pros, cons, and who benefits most.',
    href: '/metered-vs-unmetered',
    category: 'Guide',
  },
  {
    title: 'How to Calculate Your Water Usage',
    description: 'Learn how to estimate your daily and annual water consumption based on your household activities.',
    href: '/water-usage-calculator',
    category: 'Calculator',
  },
  {
    title: 'Understanding Your Water Bill',
    description: 'A breakdown of what makes up your water bill, including water charges, sewerage, and standing charges.',
    href: '/water-bill-calculator',
    category: 'Guide',
  },
]

export default function ArticlesPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Water Meter{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Guides
            </span>
          </h1>
          <p className="text-lg text-slate-300">
            Helpful articles and guides about water meters, bills, and saving water in the UK.
          </p>
        </div>

        <div className="space-y-4">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded mb-2">
                    {article.category}
                  </span>
                  <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-400 mt-2">
                    {article.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">More Guides Coming Soon</h3>
          <p className="text-slate-400">
            We&apos;re working on more helpful guides about water saving, regional water companies, and bill comparison tips.
          </p>
        </div>
      </div>
    </div>
  )
}
