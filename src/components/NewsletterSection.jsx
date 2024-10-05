import React from 'react'

const NewsletterSection = () => {
  return (
    <section className=" px-4 lg:px-40 mt-40 mb-48">
      {/* Lorem Ipsum Section */}
      <div className="max-w-6xl mx-auto text-center lg:text-left mb-8">
        <h1 className="text-2xl font-semibold mb-4">Lorem Ipsum</h1>
        <p className="text-sm text-gray-700 font-sans">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
    
      {/* Stay in the loop Section */}
      <div className="bg-[#70693f] py-8 lg:py-10 px-4 lg:px-8 rounded-lg">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Left side: Heading and Text */}
          <div className="text-center lg:text-left lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-white text-xl font-bold mb-4">Stay in the loop</h2>
            <p className="text-white text-sm font-sans">
              Subscribe to receive the latest news and updates about TDA.
              We promise not to spam you!
            </p>
          </div>
    
          {/* Right side: Form */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end w-full p-4">
          <form className="flex w-full max-w-md lg:max-w-lg">
            <div className="flex w-full border border-transparent rounded-lg overflow-hidden bg-white p-1">
              <input
                type="email"
                placeholder="Enter email address"
                className="p-2 w-full text-gray-900 placeholder-gray-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#70693f] text-white px-5 py-2 focus:outline-none rounded-lg"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
