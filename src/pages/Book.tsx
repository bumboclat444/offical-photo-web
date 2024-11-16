import React from 'react';
import { Navbar } from '../components/Navbar';
import { BookingForm } from '../components/BookingForm';

export function Book() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <BookingForm />
      </div>
    </div>
  );
}