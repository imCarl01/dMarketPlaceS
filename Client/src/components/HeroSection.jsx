import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          {/* <span className="bg-white bg-opacity-20 text-black px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block backdrop-blur-sm">
            Limited Time Offer
          </span> */}
          <h1 className="text-4xl mt-5 md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Summer Sale <br />
            Up to <span className="text-yellow-300">70% Off</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-lg opacity-90">
            Discover the hottest deals on trending products across all
            categories. Limited stock available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/"
              className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-8 rounded-full font-medium text-center transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 py-3 px-8 rounded-full font-medium text-center transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection