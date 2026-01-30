import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water Usage Calculator UK | Calculate Your Water Consumption',
  description: 'Free UK water usage calculator. Calculate your daily and annual water consumption by activity. See how much water showers, baths, toilets, and appliances use.',
  keywords: ['water usage calculator', 'water usage calculator uk', 'water consumption calculator', 'daily water usage', 'household water usage'],
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
            Free UK Water Usage Calculator
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Water Usage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Calculator UK
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Understand your <strong>water usage</strong> by activity. See how much water different activities use
            and find tips to reduce your consumption.
          </p>
        </div>

        {/* Usage Table */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
          <div className="p-6 border-b border-slate-700/50">
            <h2 className="text-xl font-semibold text-white">Water Usage by Activity</h2>
            <p className="text-slate-400 text-sm mt-1">Average water consumption for common household activities</p>
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
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
            <p className="text-3xl font-bold text-white">145L</p>
            <p className="text-sm text-slate-400 mt-1">Average per person per day</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
            <p className="text-3xl font-bold text-white">53m³</p>
            <p className="text-sm text-slate-400 mt-1">Average per person per year</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
            <p className="text-3xl font-bold text-white">110L</p>
            <p className="text-sm text-slate-400 mt-1">Water-efficient target</p>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Top Water Saving Tips</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Take shorter showers (4-5 minutes)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Fix dripping taps (saves 5,500L/year)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Use a water butt for garden watering</span>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Run full loads in washing machines</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Install a water-efficient showerhead</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Turn off tap when brushing teeth</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 mb-4">
            Want to know if a water meter would save you money based on your usage?
          </p>
          <a
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Try our Water Meter Calculator
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
