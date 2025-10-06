import type { FC } from 'react';
import { NavLink } from 'react-router';
import { FaLaptopCode } from 'react-icons/fa';

const Navbar: FC = () => {
  const base = 'transition hover:text-blue-400';
  const active = 'text-blue-400 font-semibold';

  return (
    <nav className='a-50 sticky top-0 border-b border-gray-700 bg-gray-800 shadow-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-lg font-bold text-blue-300'
        >
          <FaLaptopCode className='text-xl text-blue-400' />
          <span>The Friendly Developer</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className='hidden items-center gap-6 md:flex'>
          <div className='space-x-4 text-sm text-gray-300'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? active : base)}
            >
              Home
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) => (isActive ? active : base)}
            >
              Projects
            </NavLink>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? active : base)}
            >
              Blog
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? active : base)}
            >
              About
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? active : base)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
