import React from 'react';
import Navbar from '../../components/navbar/Navbar.tsx';

interface Props {
  children: React.JSX.Element;
}

export default function Layout({ children }: Props): React.JSX.Element {
  return (
    <div className="relative h-auto w-full">
      <header className="h-14 bg-primary-green">
        <Navbar />
      </header>
      <main className="h-auto bg-bg p-0">{children}</main>
      <footer className="flex w-full items-end justify-center bg-dark-night p-4 text-xs italic">
        © 2023 Beaumont Florian. All Rights Reserved.
      </footer>
    </div>
  );
}
