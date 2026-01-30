import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metered vs Unmetered Water UK | Should You Get a Water Meter? 2026',
  description: 'Compare metered vs unmetered water billing in the UK. Our metered vs unmetered guide helps you decide if you should get a water meter. Free comparison guide.',
  keywords: ['metered vs unmetered', 'metered vs unmetered water', 'should i get a water meter', 'water meter benefits', 'unmetered water bills', 'metered water bills uk', 'metered or unmetered'],
}

export default function MeteredVsUnmeteredPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Metered vs Unmetered Water UK Guide
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Metered vs Unmetered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Water Bills UK
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Should you switch to a water meter? This <strong>metered vs unmetered</strong> guide helps UK households
            understand the differences between <strong>metered vs unmetered</strong> water billing and decide which
            <strong>metered vs unmetered</strong> option is best for you.
          </p>
        </div>

        {/* Quick Decision */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Metered vs Unmetered: Quick Decision Guide</h2>
          <p className="text-slate-400 mb-6">
            The <strong>metered vs unmetered</strong> decision depends on your household. According to{' '}
            <a href="https://www.ccw.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CCW</a>,
            most UK households save money by switching from <strong>unmetered</strong> to <strong>metered</strong> water.
            Use this <strong>metered vs unmetered</strong> guide to make the right choice.
          </p>

          <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">The Simple Metered vs Unmetered Rule</h3>
            <p className="text-slate-300 text-sm mb-4">
              If you have <strong>more bedrooms than people</strong>, <strong>metered</strong> water is usually cheaper.
              If you have <strong>more people than bedrooms</strong>, <strong>unmetered</strong> may be better.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <p className="text-green-400 font-semibold">Choose Metered:</p>
                <p className="text-sm text-slate-400 mt-1">2 people in 3-bed home = <strong>metered</strong> wins</p>
              </div>
              <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <p className="text-amber-400 font-semibold">Stay Unmetered:</p>
                <p className="text-sm text-slate-400 mt-1">4 people in 2-bed home = <strong>unmetered</strong> wins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Metered vs Unmetered Comparison</h2>
          <p className="text-slate-400 mb-6">
            Compare <strong>metered vs unmetered</strong> water billing side by side. Understanding the differences
            between <strong>metered vs unmetered</strong> helps you make an informed decision. Our <strong>metered vs unmetered</strong>
            comparison uses data from{' '}
            <a href="https://www.ofwat.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ofwat</a>.
          </p>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Metered */}
              <div className="p-6 border-b md:border-b-0 md:border-r border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Metered Water</h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  With <strong>metered</strong> water, you pay for what you use. <strong>Metered</strong> billing
                  charges per cubic metre (m³) plus a standing charge. <strong>Metered</strong> water is measured
                  by your water meter.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Metered</strong> = only pay for water you use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Metered</strong> incentivises water saving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Metered</strong> better for small households</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Metered</strong> installation is free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">!</span>
                    <span className="text-slate-300"><strong>Metered</strong> bills vary seasonally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">!</span>
                    <span className="text-slate-300"><strong>Metered</strong> leaks increase your bill</span>
                  </li>
                </ul>
              </div>

              {/* Unmetered */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Unmetered Water</h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  With <strong>unmetered</strong> water, you pay a fixed annual amount. <strong>Unmetered</strong>
                  bills are based on your property&apos;s rateable value. <strong>Unmetered</strong> charges don&apos;t
                  change with usage.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Unmetered</strong> = predictable fixed bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Unmetered</strong> no penalty for high usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Unmetered</strong> better for large families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300"><strong>Unmetered</strong> good for gardens/pools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">!</span>
                    <span className="text-slate-300"><strong>Unmetered</strong> pay same if away</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">!</span>
                    <span className="text-slate-300"><strong>Unmetered</strong> no water saving incentive</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits from Metered vs Unmetered */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Who Benefits: Metered vs Unmetered</h2>
          <p className="text-slate-400 mb-6">
            The <strong>metered vs unmetered</strong> decision varies by household. According to{' '}
            <a href="https://www.waterwise.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Waterwise</a>,
            understanding your water usage helps with the <strong>metered vs unmetered</strong> choice.
            Here&apos;s our detailed <strong>metered vs unmetered</strong> breakdown.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Choose Metered If...</h3>
              <p className="text-slate-400 text-sm mb-4">
                <strong>Metered</strong> water is usually better in these <strong>metered vs unmetered</strong> scenarios:
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Fewer people than bedrooms (<strong>metered</strong> wins)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Live alone or with partner (<strong>metered</strong> saves £100+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>No large garden (<strong>metered</strong> more economical)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Already water-conscious (<strong>metered</strong> rewards you)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Away from home often (<strong>metered</strong> means no waste)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Stay Unmetered If...</h3>
              <p className="text-slate-400 text-sm mb-4">
                <strong>Unmetered</strong> is often better in these <strong>metered vs unmetered</strong> scenarios:
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>More people than bedrooms (<strong>unmetered</strong> wins)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Large family 4+ people (<strong>unmetered</strong> saves)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Water garden frequently (<strong>unmetered</strong> cheaper)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Have swimming pool/hot tub (<strong>unmetered</strong> essential)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Prefer predictable bills (<strong>unmetered</strong> consistency)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metered vs Unmetered Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Metered vs Unmetered: Cost Comparison</h2>
          <p className="text-slate-400 mb-6">
            The <strong>metered vs unmetered</strong> cost difference varies by household size.
            This <strong>metered vs unmetered</strong> data from{' '}
            <a href="https://www.ccw.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CCW</a>{' '}
            shows typical annual costs. Use our calculator for your specific <strong>metered vs unmetered</strong> comparison.
          </p>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50 bg-slate-900/50">
                  <th className="p-4 text-left text-slate-400">Household</th>
                  <th className="p-4 text-center text-cyan-400">Metered</th>
                  <th className="p-4 text-center text-blue-400">Unmetered</th>
                  <th className="p-4 text-right text-slate-400">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-slate-300">1 person, 2-bed</td>
                  <td className="p-4 text-center text-white font-medium">~£280</td>
                  <td className="p-4 text-center text-white font-medium">~£420</td>
                  <td className="p-4 text-right text-green-400">Metered</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-slate-300">2 people, 3-bed</td>
                  <td className="p-4 text-center text-white font-medium">~£380</td>
                  <td className="p-4 text-center text-white font-medium">~£520</td>
                  <td className="p-4 text-right text-green-400">Metered</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-slate-300">3 people, 3-bed</td>
                  <td className="p-4 text-center text-white font-medium">~£480</td>
                  <td className="p-4 text-center text-white font-medium">~£520</td>
                  <td className="p-4 text-right text-cyan-400">Similar</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-slate-300">4 people, 3-bed</td>
                  <td className="p-4 text-center text-white font-medium">~£580</td>
                  <td className="p-4 text-center text-white font-medium">~£520</td>
                  <td className="p-4 text-right text-amber-400">Unmetered</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">5 people, 4-bed</td>
                  <td className="p-4 text-center text-white font-medium">~£680</td>
                  <td className="p-4 text-center text-white font-medium">~£640</td>
                  <td className="p-4 text-right text-amber-400">Unmetered</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3 text-center">
            * <strong>Metered vs unmetered</strong> estimates based on average UK water rates 2025/26
          </p>
        </section>

        {/* Trial Period Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Metered vs Unmetered: Trial Period</h2>
          <p className="text-slate-400 mb-6">
            Worried about the <strong>metered vs unmetered</strong> switch? Most water companies let you try
            <strong>metered</strong> water risk-free. This <strong>metered vs unmetered</strong> trial period
            makes the decision easier.
          </p>

          <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">The Metered vs Unmetered Safety Net</h3>
            <p className="text-slate-300 text-sm mb-4">
              Most water companies offer a <strong>trial period of 12-24 months</strong> when switching from
              <strong>unmetered</strong> to <strong>metered</strong>. During this <strong>metered vs unmetered</strong>
              trial, you can switch back to <strong>unmetered</strong> if <strong>metered</strong> costs more.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                <p className="text-2xl font-bold text-white">12-24</p>
                <p className="text-xs text-slate-400">months trial</p>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                <p className="text-2xl font-bold text-white">£0</p>
                <p className="text-xs text-slate-400">meter installation</p>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                <p className="text-2xl font-bold text-white">Free</p>
                <p className="text-xs text-slate-400">to switch back</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Contact your water company about their <strong>metered vs unmetered</strong> trial.{' '}
              <a href="https://www.ofwat.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ofwat</a>{' '}
              requires all companies to offer this option.
            </p>
          </div>
        </section>

        {/* How to Switch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How to Switch: Metered vs Unmetered</h2>
          <p className="text-slate-400 mb-6">
            Decided that <strong>metered</strong> is better after reading our <strong>metered vs unmetered</strong> guide?
            Here&apos;s how to make the <strong>metered vs unmetered</strong> switch.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-cyan-400 font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Calculate First</h4>
              <p className="text-slate-400 text-xs">
                Use our <strong>metered vs unmetered</strong> calculator before switching
              </p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-cyan-400 font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Contact Provider</h4>
              <p className="text-slate-400 text-xs">
                Request <strong>metered</strong> water from your water company
              </p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-cyan-400 font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Free Install</h4>
              <p className="text-slate-400 text-xs">
                <strong>Metered</strong> installation is free (2-4 weeks)
              </p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-cyan-400 font-bold">4</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Trial Period</h4>
              <p className="text-slate-400 text-xs">
                Compare <strong>metered vs unmetered</strong> over 12-24 months
              </p>
            </div>
          </div>
        </section>

        {/* Related Calculators - Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Water Calculators</h2>
          <p className="text-slate-400 mb-6">
            Use these calculators to make your <strong>metered vs unmetered</strong> decision easier.
            Our tools help you understand the <strong>metered vs unmetered</strong> difference for your household.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Water Meter Calculator</h4>
              <p className="text-slate-400 text-sm mt-1">Get your <strong>metered vs unmetered</strong> comparison</p>
            </Link>

            <Link
              href="/water-bill-calculator"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Water Bill Calculator</h4>
              <p className="text-slate-400 text-sm mt-1">Estimate <strong>metered</strong> bill costs</p>
            </Link>

            <Link
              href="/water-usage-calculator"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h4 className="text-white font-semibold group-hover:text-cyan-400">Water Usage Calculator</h4>
              <p className="text-slate-400 text-sm mt-1">Calculate usage for <strong>metered</strong> bills</p>
            </Link>
          </div>
        </section>

        {/* Authority Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Official Metered vs Unmetered Resources</h2>
          <p className="text-slate-400 mb-6">
            Our <strong>metered vs unmetered</strong> guide uses information from these trusted UK sources.
            Visit them for official <strong>metered vs unmetered</strong> guidance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://www.ofwat.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Ofwat</h4>
              <p className="text-slate-400 text-sm">UK water regulator - <strong>metered</strong> rights</p>
            </a>

            <a
              href="https://www.ccw.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">CCW</h4>
              <p className="text-slate-400 text-sm"><strong>Metered vs unmetered</strong> help</p>
            </a>

            <a
              href="https://www.citizensadvice.org.uk/consumer/water/water-supply/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Citizens Advice</h4>
              <p className="text-slate-400 text-sm">Free <strong>metered</strong> advice</p>
            </a>

            <a
              href="https://www.waterwise.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold">Waterwise</h4>
              <p className="text-slate-400 text-sm">Water efficiency experts</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Calculate Your Metered vs Unmetered Savings</h2>
          <p className="text-slate-400 mb-6">
            Use our free calculator to see which is cheaper: <strong>metered vs unmetered</strong> water billing.
            Get your personalised <strong>metered vs unmetered</strong> comparison in seconds.
          </p>
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Compare Metered vs Unmetered Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  )
}
