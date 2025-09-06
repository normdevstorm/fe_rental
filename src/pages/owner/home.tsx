import React from 'react';
import { Link } from 'react-router-dom';

const OwnerHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Owner Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/owner/booking" 
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">View Bookings</h2>
            <p className="text-gray-600">Manage and track your property bookings</p>
          </Link>
          <Link 
            to="/owner/register" 
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Register Property</h2>
            <p className="text-gray-600">Add a new property to your portfolio</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerHomePage;
