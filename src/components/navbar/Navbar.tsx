import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu.tsx';

import './navbar.css';

export default function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      id: 2,
      menuName: 'Snippets',
      path: '/',
      icon: <PiBracketsCurlyBold />,
    },
    {
      id: 3,
      menuName: 'Editor',
      path: '/editor',
      icon: <AiFillEdit />,
    },
  ];
  const handleModalClick = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative flex flex-row">
      <HamburgerMenu
        data-testid="hamburgermenu-test"
        handleClick={handleModalClick}
      />
      <section className={isOpen ? 'hidden' : 'w-screen'}>
        <ul className="invisible absolute right-0 mr-4 flex h-14 w-44 items-center justify-around sm:visible">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="cursor-pointer hover:text-secondary hover:shadow-sm"
            >
              {link.menuName}
            </Link>
          ))}
        </ul>
      </section>
      <section
        className={
          isOpen ? 'w-100 absolute left-0 z-10 duration-150' : 'hidden'
        }
      >
        <ul className="modal relative h-screen w-screen bg-dark-plus">
          <button
            type="button"
            onClick={handleModalClick}
            className="absolute right-5 mt-2 h-10 w-10 transform text-2xl transition-transform hover:-translate-x-0.5 hover:scale-75 hover:text-danger"
          >
            <MdClose />
          </button>
          <div className="flex flex-col items-center p-16">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="flex cursor-pointer select-none items-center gap-2 p-2 opacity-90 hover:text-secondary"
                onClick={handleModalClick}
              >
                {link.icon}
                {link.menuName}
              </Link>
            ))}
          </div>
        </ul>
      </section>
    </div>
  );
}
