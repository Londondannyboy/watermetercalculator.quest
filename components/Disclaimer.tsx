'use client'

import { useState } from 'react'

export function Disclaimer() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm">
          <strong>Estimates Only:</strong> This calculator provides estimates based on typical usage. Contact your water company for exact rates.
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/80 hover:text-white flex-shrink-0"
          aria-label="Dismiss"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
