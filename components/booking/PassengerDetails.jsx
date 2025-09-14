"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import PlaceFinderBlank from "@/components/common/PlaceFinderBlank";
// import MyPOSEmbeddedCheckout from "@/components/booking/MyPOSEmbeddedCheckout";

export default function PassengerDetails() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    passengersCount: "1",
    luggageCount: "1",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name required";
    if (!form.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.phone.trim()) newErrors.phone = "Phone required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    
    try {
      console.log('=== PASSENGER FORM SUBMISSION ===');
      console.log('Form data:', form);
      
      const response = await fetch("/api/mypos/mypos-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          amount: 25.50, // Test amount - change this to your actual pricing logic
          currency: "EUR",
        }),
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error text:', errorText);
        
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        } catch (parseError) {
          throw new Error(`Server error: ${response.status} - ${errorText}`);
        }
      }
      
      const data = await response.json();
      console.log('=== API RESPONSE SUCCESS ===');
      console.log('Response data:', data);
      
      if (data.success && data.formData) {
        console.log('Setting checkout data and preparing redirect...');
        setCheckoutData(data);
        
        // Auto-submit the form to MyPOS after a short delay to show the loading screen
        setTimeout(() => {
          const form = document.getElementById('mypos-form');
          if (form) {
            console.log('=== AUTO-SUBMITTING TO MYPOS ===');
            console.log('Form action:', form.action);
            console.log('Form method:', form.method);
            console.log('Form elements count:', form.elements.length);
            form.submit();
          } else {
            console.error('MyPOS form not found!');
          }
        }, 2000); // 2 second delay to show loading state
      } else {
        console.error('Invalid response format:', data);
        alert(data.error || "Payment setup failed - invalid response format");
        setLoading(false);
      }
      
    } catch (err) {
      console.error('=== REQUEST ERROR ===');
      console.error('Error type:', err.constructor.name);
      console.error('Error message:', err.message);
      console.error('Full error:', err);
      alert("Payment setup error: " + err.message);
      setLoading(false);
    }
  };

  if (checkoutData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to MyPOS Payment</h2>
              <p className="text-gray-600 mb-4">Please wait while we redirect you to the secure payment gateway...</p>
              <div className="text-sm text-gray-500 mb-2">Order ID: {checkoutData.orderId}</div>
              <div className="text-sm text-blue-600">Environment: {checkoutData.debug?.environment}</div>
            </div>
            
            {/* Hidden form that auto-submits to MyPOS */}
            <form 
              id="mypos-form" 
              method="POST" 
              action={checkoutData.checkoutUrl}
              style={{ display: 'none' }}
            >
              {Object.entries(checkoutData.formData).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value || ''} />
              ))}
            </form>
            
            {/* Manual submit button as backup */}
            <div className="text-center">
              <button
                onClick={() => {
                  const form = document.getElementById('mypos-form');
                  if (form) form.submit();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Click here if not redirected automatically
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4">
            <div>
              <h2 className="text-xl font-bold text-white">Passenger Details</h2>
              <p className="text-blue-100 text-sm">Please fill in your information</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="firstName" 
                    type="text"
                    value={form.firstName} 
                    onChange={handleChange} 
                    placeholder="Enter your first name" 
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.firstName 
                        ? "border-red-300 bg-red-50 focus:ring-red-500" 
                        : "border-gray-200 hover:border-gray-300 focus:bg-white"
                    }`}
                  />
                  {errors.firstName && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.firstName}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="lastName" 
                    type="text"
                    value={form.lastName} 
                    onChange={handleChange} 
                    placeholder="Enter your last name" 
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.lastName 
                        ? "border-red-300 bg-red-50 focus:ring-red-500" 
                        : "border-gray-200 hover:border-gray-300 focus:bg-white"
                    }`}
                  />
                  {errors.lastName && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.lastName}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email address" 
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.email 
                        ? "border-red-300 bg-red-50 focus:ring-red-500" 
                        : "border-gray-200 hover:border-gray-300 focus:bg-white"
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="phone" 
                    type="tel" 
                    value={form.phone} 
                    onChange={handleChange} 
                    placeholder="Enter your phone number" 
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.phone 
                        ? "border-red-300 bg-red-50 focus:ring-red-500" 
                        : "border-gray-200 hover:border-gray-300 focus:bg-white"
                    }`}
                  />
                  {errors.phone && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Trip Details */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-6">
                <h3 className="text-base font-semibold text-gray-900">Trip Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="passengersCount" className="block text-sm font-semibold text-gray-700">
                      Number of Passengers
                    </label>
                    <select 
                      id="passengersCount" 
                      value={form.passengersCount} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Passenger' : 'Passengers'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="luggageCount" className="block text-sm font-semibold text-gray-700">
                      Number of Luggage
                    </label>
                    <select 
                      id="luggageCount" 
                      value={form.luggageCount} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Bag' : 'Bags'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700">
                  Additional Notes
                </label>
                <textarea 
                  id="notes" 
                  value={form.notes} 
                  onChange={handleChange} 
                  placeholder="Any special requirements, flight details, or additional information..." 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover:border-gray-300 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform ${
                    loading 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-black hover:bg-gray-800 hover:scale-105 focus:ring-4 focus:ring-gray-300 active:scale-95"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    "Continue to Payment"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}