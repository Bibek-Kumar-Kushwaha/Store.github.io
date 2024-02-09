import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  const notify = () => {
    toast.success('Thank you for your suggestion!');
  };
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
};

  return (
    <footer  id='Contact' className="bg-gray-800 text-white p-4">
      <div  className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Contact Us</p>
        <p className="mb-2">Email: abc@gmail.com</p>
        <p>Phone: +977 98XXXXXXXX</p>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-2 text-center">
        <p>&copy; 2024 Bibek Kumar Kushwaha. All rights reserved.</p>
        <form onSubmit={handleSubmit} className="mt-4 text-black">
          <label htmlFor="suggestion" className="block text-sm font-semibold mb-2">
            Have a suggestion? Let us know!
          </label>
          <input
            type="text"
            id="suggestion"
            name="suggestion"
            placeholder="Type your suggestion..."
            className="w-full p-2 border border-gray-600 rounded"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            onClick={notify}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
