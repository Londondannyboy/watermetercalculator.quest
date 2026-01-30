import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie & Data Policy',
  description: 'Cookie and Data Policy for Water Meter Calculator UK.',
}

export default function CookiesPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <h1 className="text-3xl font-bold text-white mb-6">Cookie & Data Policy</h1>

        <div className="text-slate-300 space-y-6">
          <p className="text-sm text-slate-400">Last updated: January 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They help the website remember your preferences and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Cookies We Use</h2>
            <p>We use the following types of cookies:</p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Essential Cookies</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Authentication cookies to keep you logged in</li>
              <li>Cookie consent preferences</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Analytics Cookies</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Help us understand how visitors use our site</li>
              <li>Improve our calculator and content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Local Storage</h2>
            <p>
              We use browser local storage to remember your cookie consent preference.
              Calculator inputs are processed in your browser and are not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Managing Cookies</h2>
            <p>
              You can manage or delete cookies through your browser settings.
              Note that disabling essential cookies may affect the functionality of our site.
            </p>
            <p className="mt-4">
              Learn more about managing cookies:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact:{' '}
              <a href="mailto:privacy@watermetercalculator.quest" className="text-cyan-400 hover:underline">
                privacy@watermetercalculator.quest
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
