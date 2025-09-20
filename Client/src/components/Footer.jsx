import React from 'react'

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
  HelpCircleIcon,
} from 'lucide-react'
const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
          <div className="flex flex-col items-center text-center">
            <TruckIcon size={28} className="text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-800 mb-1">Free Shipping</h3>
            <p className="text-sm text-gray-600">On orders over $50</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CreditCardIcon size={28} className="text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-800 mb-1">Secure Payments</h3>
            <p className="text-sm text-gray-600">100% secure checkout</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheckIcon size={28} className="text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-800 mb-1">
              Money-Back Guarantee
            </h3>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <HelpCircleIcon size={28} className="text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-800 mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600">Always here to help</p>
          </div>
        </div> */}
        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-gray-200">
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Deals & Promotions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Clearance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">About</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              Stay Connected
            </h4>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} dMarketPlace. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
              Accessibility
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer