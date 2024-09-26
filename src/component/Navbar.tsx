"use client";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Navbar for Desktop */}
      <div className="hidden sm:flex relative pt-10 flex-col justify-center w-full ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <DesktopNavLinks />
        </div>
      </div>

      {/* Navbar for Mobile */}
      <div className="sm:hidden relative flex justify-between w-full my-4 px-4">
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <div className="fixed inset-0 flex justify-end">
      <button
        className={`absolute top-4 right-4 p-2 transition-opacity duration-200 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        onClick={onClose}
      >
        <FontAwesomeIcon className="text-4xl" icon={faBars} />
      </button>
      {/* Menutup Navbar Hamburger */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Hamburger Navbar */}
      <div
        className={`relative px-4 bg-blue-400 bg-opacity-50 w-5/12 max-w-xs h-screen rounded-md my-10 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <ul className="flex flex-col justify-center text-center items-center space-y-4 mt-10 koho-regular">
            <li className="text-2xl p-2 w-full">
              <Link href="/">Home</Link>
            </li>
            <li className="text-2xl p-2 w-full">
              <Link href="/about">About</Link>
            </li>
            <li className="text-2xl p-2 w-full">
              <Link href="/project">Project</Link>
            </li>
            <li className="text-2xl p-2 w-full">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



function DesktopNavLinks() {
  return (
    <ul className="flex flex-row space-x-20 koho-semibold w-auto border border-blue-600 text-xl rounded-xl px-6 py-2">
      <li className="hover:underline hover:underline-sky-400 hover:text-sky-300 hover:underline-offset-8 transition-colors duration-500 p-2">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:underline hover:underline-sky-400 hover:text-sky-300 hover:underline-offset-8 transition-colors duration-500 p-2">
        <Link href="/about">About</Link>
      </li>
      <li className="hover:underline hover:underline-sky-400 hover:text-sky-300 hover:underline-offset-8 transition-colors duration-500 p-2">
        <Link href="/project">Project</Link>
      </li>
      <li className="hover:underline hover:underline-sky-400 hover:text-sky-300 hover:underline-offset-8 transition-colors duration-500 p-2">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
