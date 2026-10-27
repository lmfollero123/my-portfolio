export const EMAIL = 'follero.luismiguel.noora@gmail.com';
export const GITHUB = 'https://github.com/lmfollero123';
export const LINKEDIN = 'https://www.linkedin.com/in/luis-miguel-follero';

export const approach = [
  {
    title: 'I write the rules first',
    body: 'Who can approve what, what counts as a conflict, how a payslip is computed. I put these in specs before any code, because that is where systems usually go wrong.',
  },
  {
    title: 'Claude writes a lot of the code',
    body: 'I work in Claude Code every day. It is fast, and it is only as good as the instructions and checks around it.',
  },
  {
    title: 'I check what comes back',
    body: 'Architecture tests, permission tests, and end-to-end browser runs that click through the real flows. If I cannot verify it, I do not ship it.',
  },
];

export const projects = [
  {
    name: 'HONOR-ERP',
    kind: 'Company platform, HONOR Philippines',
    ai: 'Built with Claude Code',
    blurb:
      'One system that replaced four separate apps: intranet, HR, employee self-service and IT. It runs recruitment from manpower request to signed offer, then payroll, leave, attendance, KPI reviews, helpdesk and assets. Every request type has its own approval route, and changes are audited.',
    points: [
      'Modules only talk through public contracts, and a test fails the build if that is broken',
      'Own OpenID Connect sign-in, English and Chinese interface, light and dark theme, Flutter mobile app',
      'Screenshots come from the automated end-to-end runs on seeded test data',
    ],
    stack: '.NET 10, EF Core, PostgreSQL, Next.js, TypeScript, Flutter, Playwright',
    shots: [
      { src: 'erp-recruitment', alt: 'HONOR-ERP recruitment screening with scored candidates' },
      { src: 'erp-payroll', alt: 'HONOR-ERP payroll runs' },
    ],
  },
  {
    name: 'Board Room Reservation System',
    kind: 'Internal tool, HONOR Philippines',
    ai: 'Built with Claude Code',
    blurb:
      'Meeting room booking with a calendar, an approval step and notifications. Signing in or out of HONOR-ERP does the same here, and bookings appear on the employee’s reservations page.',
    stack: 'Laravel 12, React 19, TypeScript, PostgreSQL',
    shots: [{ src: 'boardroom-1', alt: 'Board Room weekly calendar' }],
  },
  {
    name: 'HONOR PH POS',
    kind: 'Point of sale and inventory, in progress',
    ai: 'Built with AI assistance',
    blurb:
      'An Electron desktop app for cashiers with Google Authenticator 2FA and local data over IPC, plus a Laravel backend for receiving, transfers, returns, serial number tracking, multi-store stock and PDF reports.',
    stack: 'Electron, React, TypeScript, Laravel 12, Inertia.js, MySQL',
    shots: [
      { src: 'pos-desktop-1', alt: 'POS desktop app' },
      { src: 'pos-backend-1', alt: 'POS inventory backend' },
    ],
  },
  {
    name: 'Barangay Culiat Facilities Reservation',
    kind: 'Capstone, local government unit',
    ai: 'Built with AI assistance',
    blurb:
      'Residents book public facilities online and staff manage them. It suggests alternative slots on conflicts, auto-approves after eight checks (about 60% less admin work), recommends facilities by distance and follows the Data Privacy Act. A Flutter companion app, CPRF-App, adds QR passes and push notifications.',
    stack: 'PHP, MySQL, Tailwind CSS, JavaScript, Flutter',
    link: { label: 'CPRF-App on GitHub', href: 'https://github.com/lmfollero123/CPRF-App' },
    shots: [
      { src: 'bcfrs-1', alt: 'Facilities reservation dashboard' },
      { src: 'bcfrs-4', alt: 'Facilities reservation booking view' },
    ],
  },
  {
    name: 'Luz De Luna Hotel HR',
    kind: 'HR system for a hotel',
    blurb:
      'Employee records, payroll with tax and deductions, multi-level leave approval, attendance with overtime, and an analytics dashboard.',
    stack: 'PHP, MySQL, Bootstrap, Chart.js',
    shots: [{ src: 'hr-1', alt: 'Hotel HR dashboard' }],
  },
  {
    name: 'Online Marketplace',
    kind: 'Mobile app',
    blurb:
      'One Flutter codebase for Android, iOS, web and desktop, with Supabase for data, Firebase push notifications and secure token storage.',
    stack: 'Flutter, Dart, Riverpod, Supabase, Firebase',
    phone: true,
    shots: [
      { src: 'owtw-1', alt: 'Marketplace app home' },
      { src: 'owtw-2', alt: 'Marketplace app listing' },
    ],
  },
  {
    name: 'TravelCore Financial Management',
    kind: 'Team project',
    blurb:
      'General ledger, payables, receivables, budgeting, tax and cash management for travel agencies, with decision-support alerts and a cash-flow forecast.',
    stack: 'PHP, MySQL, Chart.js',
    shots: [{ src: 'fms-1', alt: 'Financial dashboard with decision support alerts' }],
  },
  {
    name: 'School Clinic Management',
    kind: 'Team project',
    blurb: 'Clinic visits, student health records, medicines and reports for a school clinic.',
    stack: 'JavaScript, Tailwind CSS, PHP, MySQL',
    shots: [{ src: 'clinic-1', alt: 'School clinic sign-in' }],
  },
];

export const stack = [
  ['Backend', '.NET 10, ASP.NET Core, EF Core, Laravel 12, PHP, Node'],
  ['Frontend', 'React, Next.js, TypeScript, Tailwind CSS, Inertia.js'],
  ['Mobile and desktop', 'Flutter and Dart, Electron'],
  ['Data', 'PostgreSQL, MySQL, Supabase'],
  ['Tooling', 'Claude Code, Git, Docker, Playwright, GitHub Actions'],
];
