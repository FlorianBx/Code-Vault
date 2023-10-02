import React from 'react';

interface HamburgerMenuProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function HamburgerMenu({
  handleClick,
}: HamburgerMenuProps): React.JSX.Element {
  return (
    <div data-testid="hamburger-menu-test" className="sm:hidden">
      <button
        type="button"
        className="space-y-2 bg-transparent p-4"
        onClick={handleClick}
      >
        <span className="block h-0.5 w-6 bg-gray-100 opacity-70" />
        <span className="block h-0.5 w-6 bg-gray-100 opacity-70" />
        <span className="block h-0.5 w-6 bg-gray-100 opacity-70" />
      </button>
    </div>
  );
}
