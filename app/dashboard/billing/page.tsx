'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import axios from 'axios'
import { Loader2Icon } from 'lucide-react';
function billing() {

  const[loading, setLoading] =useState(false);
  const CreateSubscription=()=>{
    setLoading(true)
    axios.post('/api/create-subscription',{})
    .then(resp=>{
      console.log(resp.data);
      OnPayment(resp.data.id)
    },(error)=>{
      setLoading(false);
    })
  }

  const OnPayment=(subId:string)=>{
    const options ={
      "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id":subId,
      "name":'Akash Balaji AI Apps',
      description:'monthly subscription',
      handler:async(resp:any)=>{
        console.log(resp);

        setLoading(false);
      }

    }
    //@ts-ignore
    const rzp= new window.Razorpay(options);
    rzp.open()
  }

  return (
    <div>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Upgrade With Monthly Plan
          </h1>
          <p className="text-gray-600 text-lg">Choose the perfect plan for your needs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Free</h2>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-gray-900">0$</span>
                <span className="text-gray-600 text-base ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">10,000 Words/Month</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">18 Content Templates</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Unlimited Download & Copy</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">1 Month of History</span>
              </li>
            </ul>

            <Button className="w-full bg-gray-600 text-white py-3 px-6 rounded-full font-semibold text-base transition-all duration-300 hover:bg-gray-700 transform hover:-translate-y-1 shadow-lg">
              Currently Active Plan
            </Button>
          </div>

          {/* Monthly Plan */}
          <div className="relative bg-white rounded-3xl p-6 shadow-2xl border-2 border-indigo-200 transform transition-all duration-300 hover:scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-6 pt-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Monthly</h2>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-gray-900">9.99$</span>
                <span className="text-gray-600 text-base ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">1,00,000 Words/Month</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">50+ Template Access</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Unlimited Download & Copy</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">1 Year of History</span>
              </li>
            </ul>

            <button 
              disabled={loading}
              onClick={()=>CreateSubscription()}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold text-base transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 transform hover:-translate-y-1 shadow-xl">
              {loading&&<Loader2Icon className='animate-spin'/>}
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h2>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-gray-900">49.99$</span>
                <span className="text-gray-600 text-base ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Unlimited Words</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">200+ Template Access</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Unlimited Download & Copy</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Unlimited History</span>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Priority Support</span>
              </li>
            </ul>

            <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-full font-semibold text-base transition-all duration-300 hover:from-yellow-500 hover:to-orange-600 transform hover:-translate-y-1 shadow-xl">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default billing;