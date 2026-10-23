import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledToggle = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 36px;
  height: 36px;
  margin-left: 15px;
  padding: 0;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  background: transparent;
  color: var(--green);
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    background-color: var(--green-tint);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const getTheme = () =>
  typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';

const ThemeToggle = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => setMode(getTheme()), []);

  const toggle = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // storage unavailable (private mode etc.) - theme still switches for this visit
    }
    setMode(next);
  };

  const label = mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <StyledToggle type="button" onClick={toggle} aria-label={label} title={label}>
      {mode === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </StyledToggle>
  );
};

export default ThemeToggle;
