import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Water Meter Calculator UK.',
}

export default function PrivacyPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>

        <div className="text-slate-300 space-y-6">
          <p className="text-sm text-slate-400">Last updated: January 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
            <p>
              Water Meter Calculator UK (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website
              at watermetercalculator.quest.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Usage Data:</strong> Information about how you use our calculator, including household size and water usage inputs. This data is processed locally in your browser and is not stored on our servers.</li>
              <li><strong>Account Information:</strong> If you create an account, we collect your email address and authentication information.</li>
              <li><strong>Analytics Data:</strong> We use cookies and similar technologies to understand how visitors use our site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Provide and improve our water meter calculator service</li>
              <li>Enable account features like voice assistance</li>
              <li>Analyse usage patterns to improve our website</li>
              <li>Respond to your enquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              Calculator inputs are processed locally in your browser and are not transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
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
