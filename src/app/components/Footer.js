import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex justify-between">
        {/* Left Part */}
        <div className="w-1/2 text-left">
          <h3 className="text-lg font-bold">Zappos Footer</h3>
          <ul className="list-none">
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-blue-400 hover:underline">About Zappos</a>
              </Link>
            </li>
            <li>
              <Link href="/customer-service" legacyBehavior>
                <a className="text-blue-400 hover:underline">Customer Service</a>
              </Link>
            </li>
            <li>
              <Link href="/resources" legacyBehavior>
                <a className="text-blue-400 hover:underline">Resources</a>
              </Link>
            </li>
            <li>
              <Link href="/explore" legacyBehavior>
                <a className="text-blue-400 hover:underline">Explore Zappos</a>
              </Link>
            </li>
          </ul>
          <p className="mt-4">© 2009–2024 - Zappos.com LLC or its affiliates</p>
        </div>

        {/* Right Part */}
        <div className="w-1/2 text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold">Get on the List</h3>
            <p>
              Subscribe to Zappos emails for exclusive product launches, early
              notifications for sales, and a few extra-special surprises.
            </p>
            <input type='email' placeholder='Enter Email Address' className="border border-gray-300 rounded p-2 mr-2" />
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Join the Party</button>
          </div>
          <div>
            <h3 className="text-lg font-bold">Free Shipping and Free Returns</h3>
            <p>
              If, for any reason, you are unsatisfied with your purchase from
              Zappos.com LLC you may return it in its original condition within 365
              days for a refund. We'll even pay for return shipping!
            </p>
            <Link href='/' legacyBehavior>
              <a className="text-blue-400 hover:underline">Learn more about our free shipping and free returns policy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;