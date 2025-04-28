import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hero-section relative h-screen">
        <div className="hero-overlay absolute inset-0">
          <div className="container mx-auto px-6 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Drive Your Dreams
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Experience the future of car buying with AI-powered matchmaking and virtual showrooms.
                Find your perfect vehicle with our innovative platform.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/inventory"
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse Cars
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/services"
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Our Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Vehicles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              <img
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
                alt="Luxury car"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">2024 Luxury Sedan</h3>
                <p className="text-gray-600 mb-4">Experience unmatched comfort and performance</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$75,000</span>
                  <a
                    href="/inventory"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              <img
                src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
                alt="Electric car"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">2024 Electric SUV</h3>
                <p className="text-gray-600 mb-4">Zero emissions, maximum performance</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$65,000</span>
                  <a
                    href="/inventory"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              <img
                src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg"
                alt="Sports car"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">2024 Sports Coupe</h3>
                <p className="text-gray-600 mb-4">Pure adrenaline on wheels</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$85,000</span>
                  <a
                    href="/inventory"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Why Choose Zoe</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every vehicle thoroughly inspected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and efficient delivery service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Financing</h3>
              <p className="text-gray-600">Flexible payment options available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Find Your Dream Car?</h2>
          <p className="text-xl text-white mb-8">
            Join thousands of satisfied customers who found their perfect vehicle with Zoe.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}