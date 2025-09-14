import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SignIn 
        redirectUrl="/dashboard"
        afterSignInUrl="/dashboard"
        appearance={{
          elements: {
            formButtonPrimary: 
              "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm normal-case",
          },
        }}
      />
    </div>
  )
}