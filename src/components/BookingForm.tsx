import React, { useState } from 'react';
import { Calendar, Clock, Camera } from 'lucide-react';
import emailjs from '@emailjs/browser';

const sessionTypes = [
  { id: 'portrait', name: 'Portrait Session', duration: '1 hour', price: '$200' },
  { id: 'family', name: 'Family Session', duration: '2 hours', price: '$350' },
  { id: 'professional', name: 'Professional Headshots', duration: '30 minutes', price: '$150' },
  { id: 'event', name: 'Event Coverage', duration: 'Custom', price: 'Custom' },
];

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'pwharbour95@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          session_type: formData.sessionType,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      alert('Thank you for your booking request! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        sessionType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    } catch (error) {
      alert('There was an error sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Book Your Session</h2>
          <p className="text-gray-600">
            Choose your preferred session type and schedule your photoshoot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sessionTypes.map((session) => (
            <div
              key={session.id}
              className="border rounded-lg p-6 hover:border-black transition-colors cursor-pointer"
              onClick={() => setFormData({ ...formData, sessionType: session.id })}
            >
              <Camera className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{session.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>{session.duration}</span>
              </div>
              <p className="text-lg font-semibold">{session.price}</p>
              <input
                type="radio"
                name="sessionType"
                value={session.id}
                checked={formData.sessionType === session.id}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`mt-4 h-1 ${formData.sessionType === session.id ? 'bg-black' : 'bg-gray-200'}`} />
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">Preferred Time</label>
            <select
              id="preferredTime"
              name="preferredTime"
              required
              value={formData.preferredTime}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 7PM)</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              placeholder="Tell us about your vision for the photoshoot..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
          </button>
        </form>
      </div>
    </div>
  );
}