'use client'

import { AuthForm } from '@neondatabase/auth/react/ui'

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Water Meter Calculator</h1>
          <p className="text-slate-400">Sign in to access voice features and save your calculations</p>
        </div>
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
