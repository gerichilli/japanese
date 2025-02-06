import React from 'react';
import Container from './Container';

function Header() {
  return (
    <header>
      <div className="px-20 py-6 border-b-2 border-borderOnBg uppercase text-lg tracking-wider">
        <Container className='flex gap-4'>
          <div className='text-xl font-bold text-primary'>Logo</div>
          <div className='ml-auto'>Search bar</div>
          <nav className='ml-auto'>
            <ul>
              <li>Menu item 1</li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Header;
