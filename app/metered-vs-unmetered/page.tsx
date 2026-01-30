import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metered vs Unmetered Water | Should You Get a Water Meter?',
  description: 'Compare metered vs unmetered water billing in the UK. Learn who benefits from water meters and who should stay unmetered. Free comparison guide.',
  keywords: ['metered vs unmetered water', 'should i get a water meter', 'water meter benefits', 'unmetered water bills', 'metered water bills uk'],
}

export default function MeteredVsUnmeteredPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Metered vs Unmetered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Water Bills
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Should you switch to a water meter? Compare <strong>metered vs unmetered</strong> water billing
            to find out which option is best for your household.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            {/* Metered */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h2 className="text-xl font-semibold text-white">Metered</h2>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Pay for what you actually use, measured in cubic metres (m³).
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">Only pay for water you use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">Incentive to reduce usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">Better for small households</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">Free installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">!</span>
                  <span className="text-slate-300">Bills can vary seasonally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">!</span>
                  <span className="text-slate-300">Leaks increase your bill</span>
                </li>
              </ul>
            </div>

            {/* Unmetered */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <h2 className="text-xl font-semibold text-white">Unmetered</h2>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Pay a fixed amount based on your property&apos;s rateable value.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">Predictable fixed bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">No penalty for high usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">Better for large families</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-slate-300">Good for properties with gardens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">!</span>
                  <span className="text-slate-300">Pay same even if away</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">!</span>
                  <span className="text-slate-300">No incentive to save water</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
            <h3 className="text-xl font-semibold text-green-400 mb-4">A Meter is Likely Better If...</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                You have fewer people than bedrooms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                You live alone or with a partner
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                You don&apos;t have a large garden
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                You&apos;re water-conscious already
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                You&apos;re away from home often
              </li>
            </ul>
          </div>

          <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">Stay Unmetered If...</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                You have more people than bedrooms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                You have a large family (4+ people)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                You water a large garden frequently
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                You have a swimming pool or hot tub
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                You prefer predictable bills
              </li>
            </ul>
          </div>
        </div>

        {/* Trial Period Info */}
        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 mb-12">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">The Trial Period Safety Net</h3>
          <p className="text-slate-300 text-sm mb-4">
            Most water companies offer a <strong>trial period of 12-24 months</strong> when you switch to a meter.
            During this time, if you&apos;re not happy with your metered bills, you can request to switch back to unmetered charges.
          </p>
          <p className="text-slate-400 text-sm">
            This means you can try a water meter risk-free and see if it actually saves you money before committing permanently.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Not Sure Which is Best for You?</h3>
          <p className="text-slate-400 mb-6">
            Use our free water meter calculator to estimate your bills both ways.
          </p>
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Calculate Your Savings
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
