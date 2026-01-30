import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Water Meter Calculator UK team.',
}

export default function ContactPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
          <p className="text-slate-300 mb-6">
            Have questions about our water meter calculator or need assistance?
            We&apos;re here to help.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-slate-900/50 rounded-xl">
              <h3 className="text-white font-semibold mb-2">General Enquiries</h3>
              <p className="text-slate-400 text-sm">
                For questions about the calculator or feedback, please email us at:{' '}
                <a href="mailto:hello@watermetercalculator.quest" className="text-cyan-400 hover:underline">
                  hello@watermetercalculator.quest
                </a>
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl">
              <h3 className="text-white font-semibold mb-2">Water Company Questions</h3>
              <p className="text-slate-400 text-sm">
                For questions about your specific water bill, rates, or meter installation,
                please contact your local water company directly. Visit{' '}
                <a href="https://www.ccw.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  CCW (Consumer Council for Water)
                </a>{' '}
                for help finding your water company.
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl">
              <h3 className="text-white font-semibold mb-2">Complaints</h3>
              <p className="text-slate-400 text-sm">
                If you have a complaint about your water service, contact{' '}
                <a href="https://www.ccw.org.uk/complaints/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  CCW
                </a>{' '}
                who can help resolve disputes with water companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
