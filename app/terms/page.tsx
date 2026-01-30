import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Water Meter Calculator UK.',
}

export default function TermsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>

        <div className="text-slate-300 space-y-6">
          <p className="text-sm text-slate-400">Last updated: January 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Water Meter Calculator UK (watermetercalculator.quest), you accept and agree to be
              bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Service Description</h2>
            <p>
              Water Meter Calculator UK provides free online calculators to help UK households estimate whether
              switching to a water meter could save them money. Our tools include water meter calculators,
              water bill estimators, and water usage calculators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h2>
            <p>
              <strong>IMPORTANT:</strong> The calculations provided by this website are estimates only and should not be
              relied upon for financial decisions. Actual water bills may vary based on:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Your specific water company&apos;s rates</li>
              <li>Your actual water usage patterns</li>
              <li>Seasonal variations</li>
              <li>Rate changes by water companies</li>
            </ul>
            <p className="mt-4">
              Always contact your water company for accurate quotes and current rates before making decisions
              about switching to a water meter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. No Professional Advice</h2>
            <p>
              The information provided on this website does not constitute financial, legal, or professional advice.
              We recommend consulting with your water company or a financial advisor for specific guidance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              Water Meter Calculator UK shall not be liable for any direct, indirect, incidental, consequential,
              or special damages arising from the use of or inability to use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after any
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Contact</h2>
            <p>
              For questions about these Terms, please contact:{' '}
              <a href="mailto:legal@watermetercalculator.quest" className="text-cyan-400 hover:underline">
                legal@watermetercalculator.quest
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
