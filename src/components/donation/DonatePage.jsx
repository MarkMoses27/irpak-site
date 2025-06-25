import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import MPESA from '../../assets/mpesa.png'; 

const DonatePage = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert('Please enter a valid donation amount!');
      return;
    }
    // Handle form submission (send donation data to backend or trigger another action)
    alert(`Thank you for donating Ksh ${amount}!`);
  };

  return (
    <div className="font-sans bg-white">
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 sm:mb-6">Donate to IRPAK</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Your donation helps us empower communities through arts, culture, and education. Thank you for supporting IRPAK’s mission.
          </p>

          {/* Donation Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="block text-lg font-medium text-gray-700">Donation Amount (Ksh)</label>
              <input 
                type="number" 
                id="amount" 
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                required 
              />
            </div>

            <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition-all duration-300">
              Donate Now
            </button>
          </form>

          {/* Payment Information Image */}
          <div className="mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">Payment Instructions</h3>
            <div className="w-full max-w-lg mx-auto">
              {/* Display the uploaded payment image */}
              <img 
                src={MPESA}
                alt="Payment Information"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">Payment Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-amber-900">M-Pesa Paybill</h4>
                <p className="text-lg text-gray-700 mt-2">Paybill: <span className="font-semibold text-green-600">522533</span></p>
                <p className="text-lg text-gray-700 mt-2">Account/Till Number: <span className="font-semibold text-blue-600">7990280</span></p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-amber-900">KCB App or USSD</h4>
                <p className="text-lg text-gray-700 mt-2">Use the KCB App or USSD: <span className="font-semibold text-blue-600">*522#</span> for FREE</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-amber-900">Vooma App</h4>
                <p className="text-lg text-gray-700 mt-2">Use the Vooma App or USSD: <span className="font-semibold text-blue-600">*844#</span> for FREE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
