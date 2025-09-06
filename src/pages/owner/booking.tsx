import React from 'react';
import { useParams } from 'react-router-dom';

const OwnerBookingPage: React.FC = () => {
  const { booking } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Booking Details</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Booking ID: {booking}
            </h2>
            <p className="text-gray-600">
              This is a dynamic route demonstrating URL parameters.
              You're viewing booking with ID: {booking}
            </p>
          </div>
          {/* Add more booking details here */}
        </div>
      </div>
    </div>
  );
};

export default OwnerBookingPage;
