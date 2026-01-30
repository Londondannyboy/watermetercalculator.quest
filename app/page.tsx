import { WaterMeterCalculator } from '@/components/WaterMeterCalculator'
import { HeroVoice } from '@/components/HeroVoice'
import Link from 'next/link'

const faqs = [
  {
    question: "What is a water meter calculator?",
    answer: "A water meter calculator helps you estimate whether switching to a water meter will save you money. It compares your likely metered water costs (based on actual usage) with your current unmetered charges (based on your property's rateable value)."
  },
  {
    question: "Who typically saves money with a water meter?",
    answer: "Generally, households with fewer people than bedrooms benefit most from water meters. Single people and couples in larger properties often see significant savings. Larger families, especially those with gardens, may pay more with a meter."
  },
  {
    question: "How much could I save with a water meter?",
    answer: "Savings vary widely, but a single person in a 3-bedroom house could save £100-200 per year. A couple might save £50-150. The more bedrooms you have relative to occupants, the more likely you are to save."
  },
  {
    question: "Is it free to get a water meter installed?",
    answer: "Yes, in England and Wales, water companies must install a water meter free of charge when requested. The installation typically takes place at the boundary of your property and usually takes a few weeks to arrange."
  },
  {
    question: "Can I switch back if a meter doesn't save me money?",
    answer: "Most water companies offer a trial period (usually 12-24 months) during which you can switch back to unmetered billing if you're not happy. After this period, you typically cannot revert in most areas."
  },
  {
    question: "How are unmetered water bills calculated?",
    answer: "Unmetered water bills are based on the rateable value of your property - a figure set by your local authority that doesn't change regardless of how much water you actually use. Larger properties with more bedrooms typically have higher rateable values."
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
}

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate if a Water Meter Will Save You Money",
  description: "Step-by-step guide to using a water meter calculator to determine if switching to metered water will reduce your bills.",
  totalTime: "PT5M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "GBP",
    value: "0"
  },
  tool: [
    {
      "@type": "HowToTool",
      name: "Water meter calculator"
    }
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Enter your household size",
      text: "Input the number of people living in your home and the number of bedrooms. This helps estimate both your water usage and your likely unmetered bill."
    },
    {
      "@type": "HowToStep",
      name: "Enter your water usage habits",
      text: "Provide details about shower length, number of baths, toilet flushes, and appliance usage. Be honest for accurate results."
    },
    {
      "@type": "HowToStep",
      name: "Add garden watering if applicable",
      text: "If you regularly water a garden, include this as it can significantly impact your metered water costs."
    },
    {
      "@type": "HowToStep",
      name: "Review your results",
      text: "Compare the estimated metered bill with the unmetered estimate. A positive savings figure means a meter could save you money."
    },
    {
      "@type": "HowToStep",
      name: "Contact your water company",
      text: "If the calculator suggests savings, contact your water company to request a free meter installation with a trial period."
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Free Calculator for UK Households
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Water Meter{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Calculator UK
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Find out if switching to a <strong>water meter</strong> could save you money.
            Calculate your estimated water usage and compare metered vs unmetered bills.
          </p>

          {/* Voice Assistant */}
          <div className="mb-8">
            <HeroVoice />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free Installation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Trial Period Available
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Instant Results
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <WaterMeterCalculator />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How the Water Meter Calculator Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Metered Bills</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>With a water meter, you pay for what you use:</p>
                <p><strong className="text-slate-300">Water charge</strong> = Usage (m³) × Water rate</p>
                <p><strong className="text-slate-300">Sewage charge</strong> = Usage (m³) × Sewage rate</p>
                <p><strong className="text-slate-300">Standing charge</strong> = Fixed annual amount</p>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Unmetered Bills</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Without a meter, you pay based on property value:</p>
                <p><strong className="text-slate-300">Bill</strong> = Rateable value × Water company rate</p>
                <p className="mt-2">This means larger properties pay more, regardless of how much water the occupants actually use.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Single Person</h4>
              <p className="text-sm text-slate-400">
                Typically saves £100-200/year with a meter in a 2-3 bedroom property
              </p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Couple</h4>
              <p className="text-sm text-slate-400">
                Often saves £50-150/year in properties with 3+ bedrooms
              </p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Family (4+)</h4>
              <p className="text-sm text-slate-400">
                May pay more with a meter - use the calculator to check your situation
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">The Simple Rule</h3>
            <p className="text-slate-300 text-sm">
              <strong>Fewer people than bedrooms?</strong> A water meter is likely to save you money.
              <strong className="block mt-2">More people than bedrooms?</strong> You may be better off staying unmetered.
              This rule works because unmetered bills are based on property size, not actual water usage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 cursor-pointer"
              >
                <summary className="flex items-center justify-between text-white font-medium list-none">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Calculators Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            More Water Calculators
          </h2>
          <p className="text-slate-400 text-center mb-8">
            Explore our range of free water calculation tools for UK households.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/water-bill-calculator"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">
                Water Bill Calculator
              </h3>
              <p className="text-slate-400 text-sm">
                Estimate your annual water bill based on your water company&apos;s rates.
              </p>
            </Link>

            <Link
              href="/water-usage-calculator"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">
                Water Usage Calculator
              </h3>
              <p className="text-slate-400 text-sm">
                Calculate your daily and annual water consumption by activity.
              </p>
            </Link>

            <Link
              href="/metered-vs-unmetered"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">
                Metered vs Unmetered
              </h3>
              <p className="text-slate-400 text-sm">
                Detailed comparison of metered and unmetered water billing in the UK.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Switch to a Water Meter?
          </h2>
          <p className="text-slate-400 mb-8">
            If the calculator suggests you could save money, contact your water company to request a free meter installation.
            Most companies offer a trial period so you can switch back if needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.ccw.org.uk/save-money-and-water/water-meters/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
            >
              Learn More About Water Meters
            </a>
            <a
              href="#calculator"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
            >
              Use Water Meter Calculator
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
