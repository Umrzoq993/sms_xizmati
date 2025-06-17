import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Ikonkalar

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Nav className={isScrolled ? "scrolled" : ""}>
      <div className="logo">SMS Gateway</div>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="hero" smooth={true} duration={500} onClick={closeMenu}>
            Bosh sahifa
          </Link>
        </li>
        <li>
          <Link to="why" smooth={true} duration={500} onClick={closeMenu}>
            Nega biz?
          </Link>
        </li>
        <li>
          <Link to="benefits" smooth={true} duration={500} onClick={closeMenu}>
            Afzalliklar
          </Link>
        </li>
        <li>
          <Link to="steps" smooth={true} duration={500} onClick={closeMenu}>
            Foydalanish
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Aloqa
          </Link>
        </li>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .logo {
    font-weight: bold;
    font-size: 1.4rem;
    color: #0070f3;
  }

  .menu {
    list-style: none;
    display: flex;
    gap: 2rem;

    li {
      a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          color: #0070f3;
        }
      }
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    color: #0070f3;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;

    .menu {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background: #fff;
      flex-direction: column;
      gap: 1.2rem;
      padding: 2rem 0;
      align-items: center;
      transform: translateY(-200%);
      transition: all 0.3s ease;
    }

    .menu.open {
      transform: translateY(0);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .hamburger {
      display: block;
    }
  }
`;
