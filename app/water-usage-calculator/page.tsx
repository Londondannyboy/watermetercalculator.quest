import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Usage Calculator UK | Free Water Consumption Calculator 2026',
  description: 'Free UK water usage calculator. Calculate your daily and annual water consumption by activity. Our water usage calculator shows how much water showers, baths, toilets, and appliances use.',
  keywords: ['water usage calculator', 'water usage calculator uk', 'water consumption calculator', 'daily water usage', 'household water usage', 'calculate water usage', 'water usage uk'],
}

const usageData = [
  { activity: 'Shower (per minute)', litres: 10, icon: '🚿', tip: 'Reduce shower time by 1 minute to save 3,650 litres/year' },
  { activity: 'Bath (full)', litres: 80, icon: '🛁', tip: 'A shower uses 60% less water than a bath' },
  { activity: 'Toilet flush (dual)', litres: 6, icon: '🚽', tip: 'Use the small flush button when possible' },
  { activity: 'Washing machine load', litres: 50, icon: '👕', tip: 'Only run full loads to maximise efficiency' },
  { activity: 'Dishwasher load', litres: 12, icon: '🍽️', tip: 'Dishwashers use less water than hand washing' },
  { activity: 'Garden hose (per min)', litres: 15, icon: '🌱', tip: 'Use a watering can instead of a hose' },
  { activity: 'Brushing teeth (tap running)', litres: 6, icon: '🦷', tip: 'Turn off the tap to save 5 litres each time' },
  { activity: 'Hand washing (per minute)', litres: 6, icon: '🧼', tip: 'Turn off tap while soaping hands' },
]

export default function WaterUsageCalculatorPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Free Water Usage Calculator UK
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Water Usage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Calculator UK
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Use our free <strong>water usage calculator UK</strong> to understand your household <strong>water usage</strong>.
            This <strong>water usage calculator</strong> shows exactly how much water each activity uses, helping you reduce
            your <strong>water usage</strong> and save money on your bills.
          </p>
        </div>

        {/* Usage Table */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
          <div className="p-6 border-b border-slate-700/50">
            <h2 className="text-xl font-semibold text-white">Water Usage Calculator - Activity Breakdown</h2>
            <p className="text-slate-400 text-sm mt-1">
              Our <strong>water usage calculator</strong> shows average <strong>water usage</strong> for common household activities.
              Use this <strong>water usage calculator UK</strong> data to understand where your <strong>water usage</strong> comes from.
            </p>
          </div>

          <div className="divide-y divide-slate-700/50">
            {usageData.map((item, index) => (
              <div key={index} className="p-4 sm:p-6 hover:bg-slate-800/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-white font-medium">{item.activity}</h3>
                      <span className="text-cyan-400 font-bold text-lg whitespace-nowrap">{item.litres}L</span>
                    </div>
                    <p className="text-slate-400 text-sm mt-1">{item.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Average Usage Stats */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Average UK Water Usage Statistics</h2>
          <p className="text-slate-400 mb-6">
            The <strong>water usage calculator UK</strong> uses official data from{' '}
            <a href="https://www.waterwise.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Waterwise</a>{' '}
            and{' '}
            <a href="https://www.ofwat.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ofwat</a>{' '}
            to calculate <strong>water usage</strong>. Understanding average <strong>water usage</strong> helps you benchmark
            your household against UK norms using our <strong>water usage calculator</strong>.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-white">145L</p>
              <p className="text-sm text-slate-400 mt-1">Average <strong>water usage</strong>/person/day</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-white">53m³</p>
              <p className="text-sm text-slate-400 mt-1">Average annual <strong>water usage</strong></p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-white">110L</p>
              <p className="text-sm text-slate-400 mt-1">Target efficient <strong>water usage</strong></p>
            </div>
          </div>
        </section>

        {/* How to Use the Water Usage Calculator */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">How to Use This Water Usage Calculator</h2>
          <p className="text-slate-400 mb-6">
            Our <strong>water usage calculator UK</strong> helps you understand your <strong>water usage</strong> patterns.
            To get the most from this <strong>water usage calculator</strong>, follow these steps to calculate your
            total household <strong>water usage</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Step 1: Count Daily Activities</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p>Use the <strong>water usage calculator</strong> table above to identify your daily activities:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>How many showers per day? (affects <strong>water usage</strong> significantly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>How many baths per week? (high <strong>water usage</strong> activity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Toilet flushes per day? (constant <strong>water usage</strong>)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Washing machine and dishwasher loads per week?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Step 2: Calculate Total Water Usage</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p>The <strong>water usage calculator</strong> formula is simple:</p>
                <div className="p-3 bg-slate-900/50 rounded-lg font-mono text-xs">
                  Daily <strong>Water Usage</strong> = Sum of (Activity × Litres × Frequency)
                </div>
                <p className="mt-3">
                  For example, if your <strong>water usage calculator</strong> shows:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• 2 × 8-min showers = 160L</li>
                  <li>• 6 × toilet flushes = 36L</li>
                  <li>• Cooking/drinking = 10L</li>
                </ul>
                <p className="mt-2 text-cyan-400">
                  Total daily <strong>water usage</strong>: ~206L per person
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Water Usage by Household Size */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Water Usage Calculator by Household Size</h2>
          <p className="text-slate-400 mb-6">
            The <strong>water usage calculator UK</strong> shows how <strong>water usage</strong> varies by household size.
            According to{' '}
            <a href="https://www.ccw.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CCW</a>,
            larger households have proportionally lower per-person <strong>water usage</strong> due to shared activities.
            Use our <strong>water usage calculator</strong> data to estimate your household totals.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <h4 className="text-white font-semibold">1 Person</h4>
              <p className="text-2xl font-bold text-cyan-400 mt-2">145L/day</p>
              <p className="text-xs text-slate-400 mt-1">53m³/year <strong>water usage</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <h4 className="text-white font-semibold">2 People</h4>
              <p className="text-2xl font-bold text-cyan-400 mt-2">260L/day</p>
              <p className="text-xs text-slate-400 mt-1">95m³/year <strong>water usage</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <h4 className="text-white font-semibold">3 People</h4>
              <p className="text-2xl font-bold text-cyan-400 mt-2">365L/day</p>
              <p className="text-xs text-slate-400 mt-1">133m³/year <strong>water usage</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <h4 className="text-white font-semibold">4+ People</h4>
              <p className="text-2xl font-bold text-cyan-400 mt-2">500L+/day</p>
              <p className="text-xs text-slate-400 mt-1">180m³+/year <strong>water usage</strong></p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Reduce Your Water Usage - Calculator Tips</h2>
          <p className="text-slate-400 mb-6">
            The <strong>water usage calculator</strong> reveals opportunities to reduce <strong>water usage</strong>.
            According to{' '}
            <a href="https://www.energysavingtrust.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Energy Saving Trust</a>,
            reducing <strong>water usage</strong> also cuts energy bills. Use our <strong>water usage calculator UK</strong>
            to identify the highest-impact changes for your household <strong>water usage</strong>.
          </p>

          <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Water Usage Calculator - Top Saving Tips</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Take 4-5 minute showers (cuts <strong>water usage</strong> by 50%)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Fix dripping taps (saves 5,500L/year <strong>water usage</strong>)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Use water butts (reduces garden <strong>water usage</strong>)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Install a Hippo bag (toilet <strong>water usage</strong> down 3L/flush)</span>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Run full washing machine loads (<strong>water usage</strong> efficiency)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Install water-efficient showerhead (40% less <strong>water usage</strong>)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Turn off tap when brushing (saves 6L <strong>water usage</strong>/time)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Use dishwasher over hand washing (80% less <strong>water usage</strong>)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators - Internal Links */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Water Calculators</h2>
          <p className="text-slate-400 mb-6">
            Use these calculators alongside our <strong>water usage calculator UK</strong> to understand your complete
            water costs. Our <strong>water usage calculator</strong> data feeds directly into bill estimates.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Water Meter Calculator</h4>
              <p className="text-slate-400 text-sm mt-1">Convert <strong>water usage</strong> to bill costs</p>
            </Link>

            <Link
              href="/water-bill-calculator"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Water Bill Calculator</h4>
              <p className="text-slate-400 text-sm mt-1">Estimate bills from <strong>water usage</strong></p>
            </Link>

            <Link
              href="/metered-vs-unmetered"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Metered vs Unmetered</h4>
              <p className="text-slate-400 text-sm mt-1">Does your <strong>water usage</strong> favour a meter?</p>
            </Link>
          </div>
        </section>

        {/* Authority Links */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Official Water Usage Resources</h2>
          <p className="text-slate-400 mb-6">
            Our <strong>water usage calculator</strong> uses data from these trusted UK sources.
            Visit them for more <strong>water usage</strong> guidance and the latest <strong>water usage calculator</strong> statistics.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://www.waterwise.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Waterwise</h4>
              <p className="text-slate-400 text-sm"><strong>Water usage</strong> efficiency experts</p>
            </a>

            <a
              href="https://www.ofwat.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Ofwat</h4>
              <p className="text-slate-400 text-sm">UK water regulator</p>
            </a>

            <a
              href="https://www.ccw.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">CCW</h4>
              <p className="text-slate-400 text-sm">Consumer Council for Water</p>
            </a>

            <a
              href="https://www.energysavingtrust.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Energy Saving Trust</h4>
              <p className="text-slate-400 text-sm"><strong>Water usage</strong> tips</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Calculate Your Water Bill Based on Usage</h2>
          <p className="text-slate-400 mb-6">
            Now you know your <strong>water usage</strong> from our <strong>water usage calculator UK</strong>,
            see if a water meter will save you money based on your <strong>water usage</strong> patterns.
          </p>
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Try the Water Meter Calculator
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  )
}
