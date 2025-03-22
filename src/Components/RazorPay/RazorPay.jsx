import React from "react";

const RazorpayPayment = () => {
  const handlePayment = async () => {
    const options = {
      key: "rzp_test_WkrGsSgBglkqKl", // Replace with your Test API Key
      amount: 1000, // Amount in paise (1000 = ₹10)
      currency: "INR",
      name: "Your Test Store",
      description: "Test Transaction",
      image: "https://yourlogo.com/logo.png",
      handler: (response) => {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handlePayment}
    >
      Pay with Razorpay
    </button>
  );
};

export default RazorpayPayment;
