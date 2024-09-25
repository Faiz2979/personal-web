"use client";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
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
      <div className="hidden sm:flex relative py-6 flex-col justify-center w-full">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <DesktopNavLinks />
        </div>
      </div>

      {/* Navbar for Mobile */}
      <div className="sm:hidden relative flex flex-row justify-between w-full my-4 px-4">
        <MobileMenuButton onClick={handleDrawerToggle} />
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
    <div
      className={`fixed z-10 top-0 right-0 h-full w-full bg-blue-400 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-5xl" icon={faXmark} />
      </button>
      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

interface MobileMenuButtonProps {
  onClick: () => void;
}

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button className="p-2" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl" icon={faBars} />
    </button>
  );
}


function DesktopNavLinks() {
  return (
    <ul className="flex flex-row space-x-6">
      <li className="text-xl hover:text-blue-900 font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:text-blue-900 font-semibold">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}
