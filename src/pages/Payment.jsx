import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { price } = location.state || {}; // Retrieve the price from the state

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    cvc: '',
    expiryDate: '',
    phoneNumber: '', // Single field for Phone Number (used for Hormuud EVC as well)
  });
  const [isProcessing, setIsProcessing] = useState(false);  // Track payment processing state
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method
  const [showConfirmation, setShowConfirmation] = useState(false); // Track if the confirmation modal is shown

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Simulate the payment process
  const handlePayment = () => {
    // Validate if phone number is provided for confirmation
    if (!formData.phoneNumber) {
      alert('Please enter your phone number for confirmation.');
      return;
    }

    // Show confirmation prompt
    setShowConfirmation(true);
  };

  // Handle confirmation dialog
  const handleConfirmation = (isConfirmed) => {
    if (isConfirmed) {
      // Process the payment after confirmation
      setIsProcessing(true);
      setPaymentStatus('Processing your payment...');

      setTimeout(() => {
        // After a short delay, simulate a successful payment
        setPaymentStatus('Payment successful! Navigating to Exams...');
        setTimeout(() => {
          // Navigate to the Exams page after payment
          navigate('/exam');
        }, 2000);
      }, 3000); // Simulate payment processing delay
    } else {
      // If not confirmed, close the confirmation modal
      setShowConfirmation(false);
    }
  };

  return (
    <div className="payment-container py-16 bg-gradient-to-r from-pink-500 to-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">Payment Page</h2>

        <div className="payment-card bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-center">
          <p className="text-xl mb-4">You are about to purchase a plan for ${price}. Please complete the payment.</p>
          
          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="block text-left text-sm font-semibold">Select Payment Method</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)} 
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            >
              <option value="card">Credit Card</option>
              <option value="evc">Hormuud EVC</option>
            </select>
          </div>

          {/* Credit Card Form */}
          {paymentMethod === 'card' && (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-semibold">Name on Card</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="cardNumber" className="block text-left text-sm font-semibold">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                  placeholder="1234 5678 9876 5432"
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="cvc" className="block text-left text-sm font-semibold">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                    placeholder="123"
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block text-left text-sm font-semibold">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
              </div>
            </form>
          )}

          {/* Hormuud EVC Form */}
          {paymentMethod === 'evc' && (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-left text-sm font-semibold">Phone Number (Hormuud EVC)</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                  placeholder="Your phone number"
                />
              </div>
            </form>
          )}

          {/* Phone Number for Confirmation */}
          <div className="my-4">
            <label htmlFor="phoneNumber" className="block text-left text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              placeholder="Your phone number"
            />
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
            disabled={isProcessing} // Disable button while processing
          >
            {isProcessing ? 'Processing...' : 'Complete Payment'}
          </button>

          {/* Show payment status */}
          {paymentStatus && <p className="mt-4 text-green-500">{paymentStatus}</p>}

          {/* Show a loading spinner while processing */}
          {isProcessing && (
            <div className="mt-4 text-center">
              <div className="w-8 h-8 border-4 border-t-4 border-pink-600 border-solid rounded-full animate-spin mx-auto"></div>
              <p className="mt-2 text-pink-600">Processing Payment...</p>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold">Confirm Payment</h3>
            <p className="mt-2">Are you sure you want to pay for DugsiTech using the phone number: {formData.phoneNumber}?</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleConfirmation(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmation(true)}
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
