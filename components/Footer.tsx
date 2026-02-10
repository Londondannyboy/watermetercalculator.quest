import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Water Meter Calculator UK</h3>
            <p className="text-slate-400 text-sm">
              Free <strong>water meter calculator</strong> for UK households.
              Find out if switching to a water meter could save you money on your water bills.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/#calculator" className="hover:text-cyan-400 transition-colors">Water Meter Calculator</Link></li>
              <li><Link href="/water-bill-calculator" className="hover:text-cyan-400 transition-colors">Water Bill Calculator</Link></li>
              <li><Link href="/water-usage-calculator" className="hover:text-cyan-400 transition-colors">Water Usage Calculator</Link></li>
              <li><Link href="/metered-vs-unmetered" className="hover:text-cyan-400 transition-colors">Metered vs Unmetered</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/articles" className="hover:text-cyan-400 transition-colors">Guides</Link></li>
              <li><a href="https://www.ofwat.gov.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Ofwat (Regulator)</a></li>
              <li><a href="https://www.ccw.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">CCW Consumer Council</a></li>
              <li><a href="https://www.waterwise.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Waterwise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie & Data Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Water Meter Calculator Quest. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Free <strong>water meter calculator</strong> for UK households.
            This tool provides estimates only. Contact your water company for exact rates.
          </p>
        </div>
      </div>
    </footer>
  )
}
