import React from "react";
import Container from "./Container";

function Header() {
  return (
    <header className="mt-8 px-20 uppercase text-lg tracking-wider">
      <Container className="flex gap-4 py-6 px-8 border-[3px] border-borderOnBg rounded-lg">
        <div className="text-xl font-bold text-primary">Logo</div>
        <div className="ml-auto">Search bar</div>
        <nav className="ml-auto">
          <ul>
            <li>Menu item 1</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
