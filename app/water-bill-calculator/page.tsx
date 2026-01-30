import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water Bill Calculator UK | Free Water Bill Estimator 2026',
  description: 'Free UK water bill calculator. Estimate your annual water bill based on usage, water company rates, and standing charges. Works for both metered and unmetered properties.',
  keywords: ['water bill calculator', 'water bill calculator uk', 'water bill estimator', 'annual water bill', 'water charges calculator'],
}

export default function WaterBillCalculatorPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Free UK Water Bill Calculator
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Water Bill{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Calculator UK
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Estimate your annual <strong>water bill</strong> based on your water company&apos;s rates.
            Enter your usage or let us estimate it from your household details.
          </p>
        </div>

        {/* Calculator Coming Soon */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
          <p className="text-slate-400 mb-6">
            Our detailed water bill calculator with regional water company rates is coming soon.
            In the meantime, use our main Water Meter Calculator to estimate your bills.
          </p>
          <a
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Use Water Meter Calculator
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Information Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">How Water Bills Work</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Your <strong className="text-slate-300">water bill</strong> typically includes:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Water supply charge</strong> - for clean water delivered to your property</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Sewerage charge</strong> - for wastewater removal (usually 90-95% of water used)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Standing charge</strong> - fixed daily or annual charge</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">UK Water Companies</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Water charges vary by region. Major UK water companies include:</p>
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
                  Ofwat →
                </a>{' '}
                regulates water prices in England and Wales.
              </p>
            </div>
          </div>
        </div>

        {/* Average Bills */}
        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Average UK Water Bills (2025/26)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-white">£473</p>
              <p className="text-xs text-slate-400">Average annual bill</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">£1.85</p>
              <p className="text-xs text-slate-400">Per m³ water</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">£1.45</p>
              <p className="text-xs text-slate-400">Per m³ sewerage</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">145L</p>
              <p className="text-xs text-slate-400">Avg. usage/person/day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
