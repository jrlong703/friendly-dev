import { useState, type FC } from 'react';
import { NavLink } from 'react-router';
import { FaBars, FaLaptopCode, FaTimes } from 'react-icons/fa';

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <div className='flex items-center gap-4 md:hidden'>
          <button
            type='button'
            title='Menu'
            onClick={() => setMenuOpen(!menuOpen)}
            className='cursor-pointer text-xl text-blue-400'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className='space-y-2 space-x-4 border-t border-gray-700 bg-gray-800 px-6 py-4 text-center md:hidden'>
          <NavLink
            to='/'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Home
          </NavLink>
          <NavLink
            to='/projects'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Projects
          </NavLink>
          <NavLink
            to='/blog'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Blog
          </NavLink>
          <NavLink
            to='/about'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
