import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Image src={'/logo.svg'} alt='logo' width={50} height={65} />
          <span className="text-xl font-bold text-gray-800"></span>
        </div>
        <div className="flex gap-3">
          <Link href="/sign-in">
            <Button variant="outline" className="hover:bg-gray-50">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Membership Banner */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
            <span className="text-gray-600 text-sm font-medium">
              Membership - Join Now →
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            AI Content{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <Link href="/sign-up">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get started →
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">25+ templates</h3>
            <p className="text-gray-600 mb-4">
              Responsive, and mobile-first project on the web
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Learn more →
            </button>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customizable</h3>
            <p className="text-gray-600 mb-4">
              Components are easily customized and extendable
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Learn more →
            </button>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Free to Use</h3>
            <p className="text-gray-600 mb-4">
              Every component and plugin is well documented
            </p>
            <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
              Learn more →
            </button>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600 mb-4">
              Contact us 24 hours a day, 7 days a week
            </p>
            <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
              Learn more →
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-800">Logo</span>
              </div>
              <p className="text-gray-600 text-sm">
                Revolutionize your content creation with AI-powered technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Templates</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 AI Content Generator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}