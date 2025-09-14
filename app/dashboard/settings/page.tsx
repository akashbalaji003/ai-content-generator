import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Account Settings
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your profile and account preferences
          </p>
        </div>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent w-64"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          {/* Glass morphism effect container */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-xl"></div>
            
            {/* UserProfile wrapper with custom styling */}
            <div className="relative z-10">
              <div className="clerk-profile-wrapper">
                <UserProfile 
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "shadow-none border-0 bg-transparent",
                      headerTitle: "text-2xl font-semibold text-gray-800",
                      headerSubtitle: "text-gray-600",
                      socialButtonsBlockButton: "border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200",
                      formButtonPrimary: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl",
                      formFieldInput: "border-2 border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all duration-200",
                      identityPreview: "border-2 border-gray-200 hover:border-indigo-300 transition-all duration-200",
                      profileSectionTitle: "text-lg font-semibold text-gray-800 border-b-2 border-indigo-100 pb-2",
                      profileSectionContent: "mt-4",
                      badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
                      avatarImageActionsUpload: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
                    },
                    layout: {
                      socialButtonsVariant: "blockButton",
                      socialButtonsPlacement: "bottom"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Security Tips Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 ml-3">Security</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Keep your account secure by enabling two-factor authentication and using a strong password.
            </p>
          </div>
          
          {/* Privacy Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 ml-3">Privacy</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Control your privacy settings and manage how your information is used across the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings