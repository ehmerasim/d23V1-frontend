

import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className='border-solid border-4 border-black flex items-center flex-wrap bg-white p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-4xl text-black font-sans font-semibold tracking-wide'>
              HEROES ARC
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-white rounded lg:hidden text-black ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href="/about">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-center hover:bg-black hover:text-white '>
                About
              </a>
            </Link>
            <Link href="https://heroesarc.beehiiv.com/">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-center hover:bg-black hover:text-white'>
                Blog
              </a>
            </Link>
            <Link href="/Origins">
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-center hover:bg-black hover:text-white'>
                Origins
              </a>
            </Link>
            <Link href="https://heroesarc.beehiiv.com/subscribe">
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-center hover:bg-black hover:text-white'>
                Subscribe
            </a>
            </Link>
            <Link href="mailto:ehmerasim24@gmail.com">
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-center hover:bg-black hover:text-white'>
                Contact
            </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};