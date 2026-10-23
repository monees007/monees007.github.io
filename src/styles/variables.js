import { css } from 'styled-components';

const variables = css`
  :root {
    color-scheme: light;
  }
  :root[data-theme='dark'] {
    color-scheme: dark;
  }

  :root {
    /* Light theme (default). Variable names are kept from the original dark theme:
       --navy = page background, --slate = body text, --lightest-slate = headings, --green = accent */
    --dark-navy: #e8edf3;
    --navy: #f8fafc;
    --light-navy: #ffffff;
    --lightest-navy: #d5dde8;
    --navy-shadow: rgba(15, 23, 42, 0.15);
    --nav-bg: rgba(248, 250, 252, 0.85);
    --pic-overlay: transparent;
    --dark-slate: #94a3b8;
    --slate: #475569;
    --light-slate: #334155;
    --lightest-slate: #1e293b;
    --white: #0f172a;
    --green: #0b7a6a;
    --green-tint: rgba(11, 122, 106, 0.08);
    --pink: #c026d3;
    --blue: #0369a1;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  :root[data-theme='dark'] {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --nav-bg: rgba(10, 25, 47, 0.85);
    --pic-overlay: #0a192f;
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;
  }
`;

export default variables;
