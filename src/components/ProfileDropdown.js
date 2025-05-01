'use client';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaUser, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add logout logic here
    window.location.href = '/login';
  };

  return (
    <StyledWrapper ref={dropdownRef}>
      <button
        className="profile-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/default-avatar.svg"
          alt="Profile"
          className="profile-image"
        />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <Link href="/dashboard" className="menu-item">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          <Link href="/profile" className="menu-item">
            <FaUser />
            <span>Profile</span>
          </Link>
          <button onClick={handleLogout} className="menu-item logout">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;

  .profile-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    margin: -8px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    touch-action: manipulation;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 1024px) {
      padding: 12px;
      margin: -12px;
    }
  }

  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #4F46E5;
    padding: 2px;
    background: #1F2937;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.5rem;
    
    @media (max-width: 1024px) {
      position: relative;
      margin-top: 1rem;
      width: 100%;
    }
    background: rgba(31, 41, 55, 0.95);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(79, 70, 229, 0.1);
    border-radius: 0.5rem;
    padding: 0.5rem;
    min-width: 200px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 50;
    animation: slideDown 0.2s ease-out;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    color: #E5E7EB;
    text-decoration: none;
    border-radius: 0.375rem;
    transition: all 0.2s;
    font-size: 0.875rem;
    width: 100%;
    border: none;
    background: none;
    cursor: pointer;
    text-align: left;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      background: rgba(79, 70, 229, 0.1);
      color: #4F46E5;
    }

    &.logout {
      color: #EF4444;
      
      &:hover {
        background: rgba(239, 68, 68, 0.1);
      }
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default ProfileDropdown;