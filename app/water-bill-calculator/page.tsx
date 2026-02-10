import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Bill Calculator UK | Free Bill Estimator',
  description: 'Free UK water bill calculator. Estimate your annual water bill based on usage and water company rates. Calculate metered and unmetered bills.',
  keywords: ['water bill calculator', 'water bill calculator uk', 'water bill estimator', 'annual water bill', 'water charges calculator', 'uk water bill', 'water bill uk'],
  alternates: {
    canonical: 'https://watermetercalculator.quest/water-bill-calculator',
  },
}

export default function WaterBillCalculatorPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Free Water Bill Calculator UK
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Water Bill{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Calculator UK
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Use our free <strong>water bill calculator UK</strong> to estimate your annual <strong>water bill</strong>.
            This <strong>water bill calculator</strong> works for both metered and unmetered UK households.
          </p>
        </div>

        {/* Calculator Coming Soon */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Water Bill Calculator Coming Soon</h2>
          <p className="text-slate-400 mb-6">
            Our detailed <strong>water bill calculator UK</strong> with regional water company rates is coming soon.
            In the meantime, use our main <strong>Water Meter Calculator</strong> to estimate your <strong>water bills</strong>.
          </p>
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Use Water Meter Calculator
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* How Water Bills Work */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">How UK Water Bills Work</h2>
          <p className="text-slate-400 mb-6">
            Understanding how your <strong>water bill</strong> is calculated helps you use our <strong>water bill calculator UK</strong> effectively.
            UK <strong>water bills</strong> consist of several components that our <strong>water bill calculator</strong> takes into account.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Water Bill Components</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p>Your UK <strong>water bill</strong> typically includes:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-300">Water supply charge</strong> - the <strong>water bill</strong> component for clean water delivered to your property (~£1.85/m³)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-300">Sewerage charge</strong> - <strong>water bill</strong> charge for wastewater removal (~£1.45/m³)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-300">Standing charge</strong> - fixed <strong>water bill</strong> charge (~£45/year)</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Our <strong>water bill calculator UK</strong> uses these components to estimate your annual <strong>water bill</strong>.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">UK Water Companies</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p><strong>Water bill</strong> charges vary by region. The <strong>water bill calculator UK</strong> considers rates from:</p>
                <ul className="grid grid-cols-2 gap-1 mt-3 ml-4">
                  <li>Thames Water</li>
                  <li>United Utilities</li>
                  <li>Severn Trent</li>
                  <li>Yorkshire Water</li>
                  <li>Anglian Water</li>
                  <li>Southern Water</li>
                  <li>Welsh Water</li>
                  <li>Northumbrian Water</li>
                </ul>
                <p className="mt-3">
                  <a href="https://www.ofwat.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Ofwat
                  </a>{' '}
                  regulates <strong>water bills</strong> and prices in England and Wales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Average UK Water Bills */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Average UK Water Bills 2025/26</h2>
          <p className="text-slate-400 mb-6">
            The <strong>water bill calculator UK</strong> uses these average figures from{' '}
            <a href="https://www.ccw.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CCW</a>.
            Your actual <strong>water bill</strong> may vary based on your water company and usage.
          </p>

          <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">UK Water Bill Averages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">£448</p>
                <p className="text-xs text-slate-400">Average annual <strong>water bill</strong></p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">£1.85</p>
                <p className="text-xs text-slate-400">Per m³ water charge</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">£1.45</p>
                <p className="text-xs text-slate-400">Per m³ sewerage charge</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">145L</p>
                <p className="text-xs text-slate-400">Avg. usage/person/day</p>
              </div>
            </div>
          </div>
        </section>

        {/* Water Bill by Property Size */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Water Bill Estimates by Property Size</h2>
          <p className="text-slate-400 mb-6">
            The <strong>water bill calculator UK</strong> estimates annual <strong>water bills</strong> based on property size.
            For unmetered properties, <strong>water bill</strong> amounts are based on rateable values.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">1 Bedroom</h4>
              <p className="text-2xl font-bold text-cyan-400">~£320</p>
              <p className="text-sm text-slate-400">Typical unmetered <strong>water bill</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">2 Bedrooms</h4>
              <p className="text-2xl font-bold text-cyan-400">~£420</p>
              <p className="text-sm text-slate-400">Typical unmetered <strong>water bill</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">3 Bedrooms</h4>
              <p className="text-2xl font-bold text-cyan-400">~£520</p>
              <p className="text-sm text-slate-400">Typical unmetered <strong>water bill</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">4 Bedrooms</h4>
              <p className="text-2xl font-bold text-cyan-400">~£640</p>
              <p className="text-sm text-slate-400">Typical unmetered <strong>water bill</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">5+ Bedrooms</h4>
              <p className="text-2xl font-bold text-cyan-400">~£780</p>
              <p className="text-sm text-slate-400">Typical unmetered <strong>water bill</strong></p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">Calculate Yours</h4>
              <Link href="/#calculator" className="text-cyan-400 hover:underline text-sm">
                Use the water meter calculator →
              </Link>
              <p className="text-sm text-slate-400 mt-1">Get a personalised <strong>water bill</strong> estimate</p>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Water Calculators</h2>
          <p className="text-slate-400 mb-6">
            Use our other free calculators alongside the <strong>water bill calculator UK</strong> to understand your water costs.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Water Meter Calculator</h4>
              <p className="text-slate-400 text-sm mt-1">Compare metered vs unmetered <strong>water bills</strong></p>
            </Link>

            <Link
              href="/water-usage-calculator"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Water Usage Calculator</h4>
              <p className="text-slate-400 text-sm mt-1">Calculate usage affecting your <strong>water bill</strong></p>
            </Link>

            <Link
              href="/metered-vs-unmetered"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Metered vs Unmetered</h4>
              <p className="text-slate-400 text-sm mt-1">Which <strong>water bill</strong> option is better?</p>
            </Link>
          </div>
        </section>

        {/* Authority Links */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Official Water Bill Resources</h2>
          <p className="text-slate-400 mb-6">
            For official <strong>water bill</strong> guidance, visit these trusted UK resources.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="https://www.ofwat.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Ofwat</h4>
              <p className="text-slate-400 text-sm">UK water regulator - <strong>water bill</strong> guidance</p>
            </a>

            <a
              href="https://www.ccw.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">CCW</h4>
              <p className="text-slate-400 text-sm">Consumer Council - <strong>water bill</strong> help</p>
            </a>

            <a
              href="https://www.citizensadvice.org.uk/consumer/water/water-supply/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Citizens Advice</h4>
              <p className="text-slate-400 text-sm">Free <strong>water bill</strong> advice</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Calculate Your Water Bill Now</h2>
          <p className="text-slate-400 mb-6">
            While our dedicated <strong>water bill calculator UK</strong> is coming soon, use our Water Meter Calculator to estimate your <strong>water bill</strong>.
          </p>
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Estimate Your Water Bill
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  )
}
