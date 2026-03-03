# APS Security Dashboard

A production-grade B2B SaaS cybersecurity platform dashboard built with React, featuring dark/light mode theming, responsive design, and modern UI components.

##  Features

- **3 Complete Screens**
  - Login/Sign-up page with social authentication
  - Main Dashboard with scan list and severity statistics
  - Active Scan Detail with live console and finding logs

- **Dark/Light Mode**
  - Full theme support across all screens
  - Persistent theme preference
  - Smooth transitions

- **Responsive Design**
  - Mobile-friendly (375px+)
  - Desktop optimized (1280px+)
  - Adaptive layouts

- **Interactive Components**
  - Toast notifications for user actions
  - Clickable scan rows with navigation
  - Functional tabs, filters, and search
  - Theme toggle

- **Production-Ready**
  - Clean component architecture
  - Reusable UI components
  - Mock data integration
  - Type-safe styling with Tailwind CSS

##  Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Fonts**: Inter (Google Fonts)

##  Installation

1. Clone the repository:
```bash
cd aps-security-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

##  Build for Production

```bash
npm run build
```



## Project Structure

```
aps-security-dashboard/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Sidebar.jsx
│   │   ├── SeverityBadge.jsx
│   │   ├── StatusChip.jsx
│   │   └── ThemeToggle.jsx
│   │   └── ComingSoon.jsx

│   ├── context/            # React context providers
│   │   └── ThemeContext.jsx
│   ├── data/               # Mock data
│   │   └── mockData.js
│   ├── pages/              # Page components
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── ScanDetail.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Design System

### Colors

- **Primary (Teal)**: `#0CC8A8` - CTAs, active states, links
- **Critical (Red)**: `#EF4444` - Critical severity
- **High (Orange)**: `#F97316` - High severity  
- **Medium (Yellow)**: `#EAB308` - Medium severity
- **Low (Green)**: `#22C55E` - Low severity

### Typography

- **Font Family**: Inter
- **Headings**: Bold weights (600-700)
- **Body**: Regular (400-500)

### Components

- **Severity Badges**: Color-coded vulnerability indicators
- **Status Chips**: Green (Completed), Gray (Scheduled), Red (Failed)
- **Progress Bars**: Visual scan progress indicators
- **Toast Notifications**: User feedback system

## Navigation Flow

1. **Login Screen** (`/`)
   - Sign up form with validation
   - Social login buttons (Apple, Google, Meta)
   - Theme toggle
   - Redirects to Dashboard on successful signup

2. **Dashboard** (`/dashboard`)
   - Organization statistics
   - Severity counters with trends
   - Scan list table
   - Search and filter functionality
   - Click any scan row to view details

3. **Scan Detail** (`/scan/:id`)
   - Live scan progress tracker
   - Stage indicator (Spidering → Reporting)
   - Activity log with syntax highlighting
   - Finding log with vulnerability cards
   - Real-time statistics

##  Key Features Implemented

### Login Page
- Split layout with hero section
- Gradient background with decorative elements
- Form validation
- Password visibility toggle
- Social authentication buttons
- Responsive card design

### Dashboard
- Sidebar navigation
- Organization stats bar
- Severity metrics with percentage changes
- Searchable scan table
- Status badges and progress bars
- Vulnerability count badges

### Scan Detail
- Circular progress indicator
- Multi-stage progress tracker
- Tabbed console interface
- Syntax-highlighted activity logs
- Finding cards with severity levels
- Real-time statistics footer



##  Mock Data

All screens use realistic mock data located in `src/data/mockData.js`:

- **mockScans**: 11 scan entries with various statuses
- **mockScanDetail**: Active scan with activity logs and findings
- **mockOrgStats**: Organization-level statistics

##  Known Limitations

- No backend integration (mock data only)
- Social login buttons show toast notifications only
- Filter and column customization show coming soon messages
- Some navigation items redirect to dashboard

## Development Notes

- All interactive elements are functional with visual feedback
- Theme preference is persisted in localStorage
- Clean separation of concerns with component architecture
- Reusable components for badges, chips, and status indicators



