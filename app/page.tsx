import { WaterMeterCalculator } from '@/components/WaterMeterCalculator'
import Link from 'next/link'

const faqs = [
  {
    question: "What is a water meter calculator UK?",
    answer: "A water meter calculator UK is a free online tool that helps UK households estimate whether switching to a water meter will save money. The water meter calculator compares your likely metered water costs based on actual usage with your current unmetered charges based on your property's rateable value. Using a water meter calculator is the first step to understanding if a water meter is right for you."
  },
  {
    question: "Who typically saves money with a water meter calculator?",
    answer: "According to the Consumer Council for Water (CCW), households with fewer people than bedrooms benefit most from water meters. Our water meter calculator UK shows that single people and couples in larger properties often see savings of £100-200 per year. The water meter calculator helps you determine your specific situation before contacting your water company."
  },
  {
    question: "How accurate is the water meter calculator?",
    answer: "Our water meter calculator UK provides estimates based on average UK water usage patterns and typical water company rates. While the water meter calculator gives a good indication, actual savings depend on your specific water company's rates. We recommend using the water meter calculator as a starting point, then contacting your water company for exact figures."
  },
  {
    question: "Is it free to get a water meter installed in the UK?",
    answer: "Yes, as regulated by Ofwat, water companies in England and Wales must install a water meter free of charge when requested. Use our water meter calculator first to check if switching makes financial sense, then contact your water company. The water meter calculator can help you make an informed decision before requesting installation."
  },
  {
    question: "Can I switch back if a water meter doesn't save money?",
    answer: "Most water companies offer a trial period of 12-24 months during which you can switch back to unmetered billing. Use our water meter calculator UK to estimate your bills before switching, and if the water meter calculator suggests you might pay more, consider staying unmetered or requesting the trial period."
  },
  {
    question: "How are unmetered water bills calculated in the UK?",
    answer: "Unmetered water bills are based on your property's rateable value - a figure that doesn't change regardless of actual water usage. Our water meter calculator UK compares this with metered charges to show potential savings. The water meter calculator factors in property size, which is why larger homes with fewer occupants often benefit from meters."
  },
  {
    question: "What water usage does the water meter calculator include?",
    answer: "Our water meter calculator UK includes showers, baths, toilet flushes, washing machines, dishwashers, garden watering, and general household usage. The water meter calculator uses average consumption figures from Waterwise and water industry data to provide accurate estimates for UK households."
  },
  {
    question: "Which UK water company rates does the calculator use?",
    answer: "The water meter calculator UK uses average rates across major water companies including Thames Water, United Utilities, Severn Trent, Yorkshire Water, Anglian Water, and Southern Water. For exact rates, check with your specific water company after using our water meter calculator."
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
  name: "How to Use the Water Meter Calculator UK",
  description: "Step-by-step guide to using our free water meter calculator to determine if switching to metered water will reduce your UK water bills.",
  totalTime: "PT5M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "GBP",
    value: "0"
  },
  tool: [
    {
      "@type": "HowToTool",
      name: "Water meter calculator UK"
    }
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Enter household details",
      text: "Input the number of people living in your home and the number of bedrooms into the water meter calculator. This helps estimate both your water usage and likely unmetered bill."
    },
    {
      "@type": "HowToStep",
      name: "Enter water usage habits",
      text: "Provide details about shower length, number of baths, toilet flushes, and appliance usage in the water meter calculator UK for accurate results."
    },
    {
      "@type": "HowToStep",
      name: "Add garden watering",
      text: "If you water a garden, include this in the water meter calculator as it significantly impacts metered water costs."
    },
    {
      "@type": "HowToStep",
      name: "Review calculator results",
      text: "The water meter calculator displays estimated metered and unmetered bills. A positive savings figure means a water meter could save you money."
    },
    {
      "@type": "HowToStep",
      name: "Contact your water company",
      text: "If the water meter calculator suggests savings, contact your water company for free meter installation with a trial period."
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
            Free Water Meter Calculator for UK Households
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Water Meter{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Calculator UK
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Use our free <strong>water meter calculator UK</strong> to find out if switching to a <strong>water meter</strong> could save you money.
            This <strong>UK water meter calculator</strong> compares your estimated metered and unmetered water bills instantly.
          </p>

          {/* Voice Assistant CTA */}
          <div className="mb-8">
            <Link
              href="/assistant"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 rounded-2xl transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">Voice Assistant</p>
                <p className="text-slate-400 text-sm">Ask questions about water meters</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free Meter Installation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              12-24 Month Trial Period
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Instant Calculator Results
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Free Water Meter Calculator UK</h2>
            <p className="text-slate-400">Enter your details below to calculate if a <strong>water meter UK</strong> will save you money</p>
          </div>
          <WaterMeterCalculator />
        </div>
      </section>

      {/* How the Water Meter Calculator Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            How the Water Meter Calculator UK Works
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our <strong>water meter calculator</strong> uses industry data to compare your metered and unmetered water costs.
            Understanding how the <strong>water meter calculator UK</strong> works helps you make informed decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Metered Water Bills</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>With a <strong>water meter</strong>, you pay for what you actually use. The <strong>water meter calculator</strong> estimates:</p>
                <p><strong className="text-slate-300">Water charge</strong> = Usage (m³) × Water rate (~£1.85/m³)</p>
                <p><strong className="text-slate-300">Sewage charge</strong> = Usage (m³) × Sewage rate (~£1.45/m³)</p>
                <p><strong className="text-slate-300">Standing charge</strong> = Fixed annual amount (~£45/year)</p>
                <p className="mt-3">The <strong>water meter calculator UK</strong> uses these components to estimate your annual metered bill.</p>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Unmetered Water Bills</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Without a <strong>water meter</strong>, you pay based on property value:</p>
                <p><strong className="text-slate-300">Bill</strong> = Rateable value × Water company rate</p>
                <p className="mt-2">Larger properties pay more regardless of actual water usage. Our <strong>water meter calculator</strong> estimates unmetered bills based on bedrooms:</p>
                <ul className="list-disc ml-4 mt-2">
                  <li>1 bedroom: ~£320/year</li>
                  <li>3 bedrooms: ~£520/year</li>
                  <li>5 bedrooms: ~£780/year</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Who Benefits Section */}
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Who Benefits from a Water Meter?
          </h3>
          <p className="text-slate-400 text-center mb-8">
            According to <a href="https://www.ccw.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CCW (Consumer Council for Water)</a>,
            the <strong>water meter calculator</strong> typically shows savings for households with fewer occupants than bedrooms.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Single Person</h4>
              <p className="text-sm text-slate-400">
                The <strong>water meter calculator UK</strong> shows single occupants typically save <strong>£100-200/year</strong> with a meter in 2-3 bedroom properties.
              </p>
              <Link href="/water-usage-calculator" className="text-cyan-400 text-sm hover:underline mt-2 inline-block">
                Calculate your usage →
              </Link>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Couple</h4>
              <p className="text-sm text-slate-400">
                Our <strong>water meter calculator</strong> indicates couples often save <strong>£50-150/year</strong> in properties with 3+ bedrooms.
              </p>
              <Link href="/metered-vs-unmetered" className="text-cyan-400 text-sm hover:underline mt-2 inline-block">
                Compare billing options →
              </Link>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Family (4+)</h4>
              <p className="text-sm text-slate-400">
                The <strong>water meter calculator UK</strong> may show larger families pay more - use our calculator to check your specific situation.
              </p>
              <Link href="/water-bill-calculator" className="text-cyan-400 text-sm hover:underline mt-2 inline-block">
                Estimate your bill →
              </Link>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">The Water Meter Calculator Rule</h3>
            <p className="text-slate-300 text-sm">
              <strong>Fewer people than bedrooms?</strong> The <strong>water meter calculator</strong> will likely show you can save money with a meter.
              <strong className="block mt-2">More people than bedrooms?</strong> Our <strong>water meter calculator UK</strong> may indicate you&apos;re better off staying unmetered.
              This rule exists because unmetered bills are based on property size, not actual water usage.
            </p>
          </div>
        </div>
      </section>

      {/* UK Water Usage Statistics */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            UK Water Usage Statistics
          </h2>
          <p className="text-slate-400 text-center mb-12">
            Our <strong>water meter calculator</strong> uses official UK water usage data from{' '}
            <a href="https://www.waterwise.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Waterwise</a> and{' '}
            <a href="https://www.ofwat.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ofwat</a>.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-cyan-400">145L</p>
              <p className="text-sm text-slate-400">Average daily usage per person</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-cyan-400">53m³</p>
              <p className="text-sm text-slate-400">Average annual usage per person</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-cyan-400">£448</p>
              <p className="text-sm text-slate-400">Average UK water bill (2025/26)</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-cyan-400">55%</p>
              <p className="text-sm text-slate-400">UK households with meters</p>
            </div>
          </div>

          <p className="text-slate-400 text-center text-sm">
            The <strong>water meter calculator UK</strong> incorporates these statistics to provide accurate estimates.
            Learn more about <Link href="/water-usage-calculator" className="text-cyan-400 hover:underline">water usage by activity</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Water Meter Calculator UK: Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-center mb-12">
            Common questions about using our <strong>water meter calculator</strong> and switching to a <strong>water meter</strong> in the UK.
          </p>

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

      {/* Related Water Calculators - Topic Cluster */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            More Free Water Calculators UK
          </h2>
          <p className="text-slate-400 text-center mb-8">
            Explore our complete range of <strong>water meter calculator</strong> tools for UK households.
            Each calculator in our <strong>water meter calculator UK</strong> suite helps you understand different aspects of water billing.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/water-bill-calculator"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl">💷</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">
                Water Bill Calculator UK
              </h3>
              <p className="text-slate-400 text-sm">
                Estimate your annual <strong>water bill</strong> based on UK water company rates and your usage patterns.
              </p>
            </Link>

            <Link
              href="/water-usage-calculator"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl">🚿</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">
                Water Usage Calculator UK
              </h3>
              <p className="text-slate-400 text-sm">
                Calculate daily and annual <strong>water usage</strong> by activity - showers, baths, appliances, and garden.
              </p>
            </Link>

            <Link
              href="/metered-vs-unmetered"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">
                Metered vs Unmetered Guide
              </h3>
              <p className="text-slate-400 text-sm">
                Detailed comparison of <strong>metered vs unmetered</strong> water billing to help you decide which is right for you.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Authority Resources Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Official UK Water Resources
          </h2>
          <p className="text-slate-400 text-center mb-8">
            Our <strong>water meter calculator UK</strong> is designed to help you make informed decisions.
            For official guidance, visit these trusted resources.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="https://www.ofwat.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold mb-1">Ofwat</h4>
              <p className="text-slate-400 text-sm">UK water services regulator - official guidance on water meters and billing</p>
            </a>

            <a
              href="https://www.ccw.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold mb-1">CCW</h4>
              <p className="text-slate-400 text-sm">Consumer Council for Water - independent advice for water customers</p>
            </a>

            <a
              href="https://www.waterwise.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold mb-1">Waterwise</h4>
              <p className="text-slate-400 text-sm">UK&apos;s leading water efficiency organisation</p>
            </a>

            <a
              href="https://www.energysavingtrust.org.uk/hub/quick-tips-to-save-energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold mb-1">Energy Saving Trust</h4>
              <p className="text-slate-400 text-sm">Water and energy saving tips for UK households</p>
            </a>

            <a
              href="https://www.citizensadvice.org.uk/consumer/water/water-supply/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold mb-1">Citizens Advice</h4>
              <p className="text-slate-400 text-sm">Free advice on water bills and meters</p>
            </a>

            <a
              href="https://www.gov.uk/government/organisations/environment-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-white font-semibold mb-1">Environment Agency</h4>
              <p className="text-slate-400 text-sm">UK government environmental regulator</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Use the Water Meter Calculator UK?
          </h2>
          <p className="text-slate-400 mb-8">
            Our free <strong>water meter calculator</strong> shows if you could save money by switching.
            If the <strong>water meter calculator UK</strong> suggests savings, contact your water company to request a free installation with trial period.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#calculator"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
            >
              Use Water Meter Calculator
            </a>
            <a
              href="https://www.ccw.org.uk/save-money-and-water/water-meters/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
            >
              Learn More at CCW
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
