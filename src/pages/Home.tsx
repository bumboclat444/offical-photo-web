import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
            className="w-full h-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Capture Your Story</h1>
            <p className="text-xl md:text-2xl mb-8">Professional portrait photography in New York</p>
            <a href="/book" className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
              "https://images.unsplash.com/photo-1604004555489-723a93d6ce74",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            ].map((url, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={url}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
                alt="Photographer"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in portrait photography, I specialize in capturing 
                the authentic essence of individuals through my lens. My approach combines technical 
                expertise with artistic vision to create timeless portraits that tell your unique story.
              </p>
              <p className="text-gray-600 mb-6">
                Every session is tailored to your personality and vision, ensuring we create 
                photographs that you'll treasure for years to come.
              </p>
              <div className="flex space-x-4">
                <a href="/book" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>hello@elenastudio.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5" />
                  <span>@elenastudio</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Elena Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}