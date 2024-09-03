'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaCalendarAlt, FaTasks, FaMoneyCheckAlt, FaGift, FaWallet } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

const Sidebar = () => {
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(true);

  return (
    <div className="h-screen bg-gray-50 shadow-lg w-64">
      {/* Company Logo */}
      <div className="flex items-center justify-center py-6 border-b">
        <img src="https://cdn.pixabay.com/photo/2016/03/31/08/00/painting-1292226_640.jpg" alt="Logo" className="h-12" />
      </div>

      {/* Menu */}
      <nav className="mt-6">
        <ul>
          <li>
            <Link href="/dashboard" legacyBehavior>
              <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors duration-200">
                <FaUserCircle className="text-lg" />
                <span className="ml-4">Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <div>
              <button
                onClick={() => setIsEmployeesOpen(!isEmployeesOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
              >
                <span className="flex items-center">
                  <FaUserCircle className="text-lg" />
                  <span className="ml-4">Employees</span>
                </span>
                <BsChevronDown className={`transition-transform ${isEmployeesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isEmployeesOpen && (
                <ul className="pl-8 mt-1">
                  <li>
                    <Link href="/profile" legacyBehavior>
                      <a className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/attendance" legacyBehavior>
                      <a className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Attendance</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tasks" legacyBehavior>
                      <a className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Tasks</a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link href="/payroll" legacyBehavior>
              <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors duration-200">
                <FaMoneyCheckAlt className="text-lg" />
                <span className="ml-4">Payroll</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/holidays" legacyBehavior>
              <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors duration-200">
                <FaGift className="text-lg" />
                <span className="ml-4">Holidays</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced-payment" legacyBehavior>
              <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors duration-200">
                <FaWallet className="text-lg" />
                <span className="ml-4">Advanced Payment</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login" legacyBehavior>
              <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors duration-200">
                <FaWallet className="text-lg" />
                <span className="ml-4">Login</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
