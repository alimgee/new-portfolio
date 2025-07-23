'use client';

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Navigation() {
  const { navigation, personal } = portfolioData;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-container">
        <a href="#" className="nav-brand">{personal.name}</a>
        <button
          className="nav-hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 20;
        }
        .hamburger-bar {
          width: 28px;
          height: 3px;
          background: #1a4a6b;
          margin: 4px 0;
          border-radius: 2px;
          transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 64px;
            right: 0;
            background: #a8d0f0;
            width: 200px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem 1rem;
            display: none;
            border-radius: 0 0 0.75rem 0.75rem;
          }
          .nav-links.open {
            display: flex;
          }
          .nav-hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
