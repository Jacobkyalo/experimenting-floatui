import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="flex items-center gap-x-16">
        <div className="flex items-center justify-between md:block">
          <h4>Logo</h4>
          <div className="md:hidden">
            <p>hum</p>
          </div>
        </div>
        <div className="items-center hidden md:flex">
          <ul className="flex items-center flex-1 gap-x-8 justify-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
          <div className="justify-end items-center flex flex-1">
            <p>Login</p>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
