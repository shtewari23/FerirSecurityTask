export const mockScans = [
  {
    id: 1,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    stage: 'Completed',
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 2,
    name: 'Servers',
    type: 'Blackbox',
    status: 'Progress',
    progress: 30,
    stage: 'Spidering',
    vulnerabilities: { critical: 0, high: 3, medium: 7, low: 5 },
    lastScan: '1d ago'
  },
  {
    id: 3,
    name: 'Red Servers',
    type: 'Whitebox',
    status: 'Progress',
    progress: 30,
    stage: 'Progress',
    vulnerabilities: { critical: 10, high: 20, medium: 30, low: 8 },
    lastScan: '4d ago'
  },
  {
    id: 4,
    name: 'API Gateway',
    type: 'Greybox',
    status: 'Progress',
    progress: 60,
    stage: 'Testing',
    vulnerabilities: { critical: 2, high: 5, medium: 9, low: 4 },
    lastScan: '2d ago'
  },
  {
    id: 5,
    name: 'Auth Service',
    type: 'Whitebox',
    status: 'Progress',
    progress: 15,
    stage: 'Reconnaissance',
    vulnerabilities: { critical: 0, high: 0, medium: 2, low: 1 },
    lastScan: '6h ago'
  },
  {
    id: 6,
    name: 'Payment Portal',
    type: 'Greybox',
    status: 'Progress',
    progress: 82,
    stage: 'Reporting',
    vulnerabilities: { critical: 7, high: 14, medium: 18, low: 9 },
    lastScan: '12h ago'
  },
 
     {
    id: 7,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    stage: 'Completed',
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  
  {
    id: 8,
    name: 'CDN Infrastructure',
    type: 'Blackbox',
    status: 'Scheduled',
    progress: 0,
    stage: 'Queued',
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: '7d ago'
  },
  {
    id: 9,
    name: 'Mobile Backend',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 0,
    stage: 'Queued',
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: '10d ago'
  },
  {
    id: 10,
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    stage: 'Failed',
    vulnerabilities: { critical: 2, high: 6, medium: 8, low: 1 },
    lastScan: '3d ago'
  },
  {
    id: 11,
    name: 'Temp Data Store',
    type: 'Blackbox',
    status: 'Failed',
    progress: 22,
    stage: 'Failed',
    vulnerabilities: { critical: 1, high: 4, medium: 6, low: 2 },
    lastScan: '3d ago'
  }
];

// Individual scan detail records keyed by scan id
const baseScanDetail = {
  scanType: 'Grey Box',
  targets: 'google.com',
  startedAt: 'Nov 22, 09:00AM',
  credentials: '2 Active',
  files: 'Control.pdf',
  checklists: '40/350',
};

export const mockScanDetails = {
  1: {
    ...baseScanDetail,
    id: 1,
    name: 'Web App Servers',
    status: 'Completed',
    progress: 100,
    stage: 'Completed',
    activityLog: [
      { timestamp: '09:00:00', message: 'Starting reconnaissance on target web app servers.' },
      { timestamp: '09:05:00', message: 'Port scan complete. Found open ports: 80, 443, 8080.' },
      { timestamp: '09:20:00', message: 'Spidering phase initiated. Crawling application endpoints.' },
      { timestamp: '09:45:00', message: 'Spidering complete. 312 endpoints discovered.' },
      { timestamp: '10:00:00', message: 'Vulnerability testing phase started.' },
      { timestamp: '10:45:00', message: 'SQL Injection detected on /api/users/profile.' },
      { timestamp: '11:30:00', message: 'Testing complete. Generating final report.' },
    ],
    findings: [
      { id: 1, severity: 'Critical', timestamp: '10:45:23', title: 'SQL Injection in Authentication Endpoint', endpoint: '/api/users/profile', description: 'Time-based blind SQL injection confirmed. Exploitation allows database-level access.' },
      { id: 2, severity: 'High', timestamp: '10:52:10', title: 'Unauthorized Access to User Metadata', endpoint: '/api/auth/login', description: 'Low-privilege user able to access metadata of other users. Access control checks missing.' },
      { id: 3, severity: 'Medium', timestamp: '11:05:44', title: 'Broken Authentication Rate Limiting', endpoint: '/api/search', description: 'No effective rate limiting on login attempts. Brute-force possible.' },
    ],
    stats: { subAgents: 3, parallelExecutions: 5, operations: 42, critical: 5, high: 12, medium: 23, low: 18 }
  },

  2: {
    ...baseScanDetail,
    id: 2,
    name: 'Servers',
    status: 'Progress',
    progress: 30,
    stage: 'Spidering',
    scanType: 'Black Box',
    activityLog: [
      { timestamp: '09:00:00', message: 'Reconnaissance started. Enumerating subdomains and open ports.' },
      { timestamp: '09:10:00', message: 'Open ports identified: 22, 80, 443, 3306.' },
      { timestamp: '09:20:00', message: 'Spidering initiated. Crawling accessible URLs.' },
      { timestamp: '09:30:00', message: 'Spidering in progress — 89 endpoints discovered so far.' },
    ],
    findings: [
      { id: 1, severity: 'High', timestamp: '09:25:10', title: 'Exposed Admin Panel', endpoint: '/admin', description: 'Admin panel accessible without authentication on port 80.' },
    ],
    stats: { subAgents: 1, parallelExecutions: 2, operations: 14, critical: 0, high: 3, medium: 7, low: 5 }
  },

  4: {
    ...baseScanDetail,
    id: 4,
    name: 'API Gateway',
    status: 'Progress',
    progress: 60,
    stage: 'Testing',
    activityLog: [
      { timestamp: '08:00:00', message: 'Reconnaissance complete. 5 API services identified.' },
      { timestamp: '08:15:00', message: 'Spidering complete. 178 API endpoints mapped.' },
      { timestamp: '08:30:00', message: 'Active testing started. Running injection and auth bypass checks.' },
      { timestamp: '09:00:00', message: 'IDOR vulnerability found on /api/v2/users/{id}.' },
      { timestamp: '09:15:00', message: 'Testing JWT token handling — anomalies detected.' },
    ],
    findings: [
      { id: 1, severity: 'Critical', timestamp: '09:00:00', title: 'IDOR on User Endpoint', endpoint: '/api/v2/users/{id}', description: 'Authenticated users can access other accounts by manipulating the ID parameter.' },
      { id: 2, severity: 'High', timestamp: '09:15:00', title: 'Weak JWT Signing Key', endpoint: '/api/auth/token', description: 'JWT tokens signed with a guessable secret allowing privilege escalation.' },
    ],
    stats: { subAgents: 2, parallelExecutions: 3, operations: 27, critical: 2, high: 5, medium: 9, low: 4 }
  },

  5: {
    ...baseScanDetail,
    id: 5,
    name: 'Auth Service',
    status: 'Progress',
    progress: 15,
    stage: 'Reconnaissance',
    scanType: 'White Box',
    activityLog: [
      { timestamp: '10:00:00', message: 'Scan initiated. Starting passive reconnaissance.' },
      { timestamp: '10:05:00', message: 'DNS enumeration in progress.' },
      { timestamp: '10:10:00', message: '3 subdomains discovered. Checking for exposed services.' },
    ],
    findings: [],
    stats: { subAgents: 1, parallelExecutions: 1, operations: 4, critical: 0, high: 0, medium: 2, low: 1 }
  },

  6: {
    ...baseScanDetail,
    id: 6,
    name: 'Payment Portal',
    status: 'Progress',
    progress: 82,
    stage: 'Reporting',
    activityLog: [
      { timestamp: '07:00:00', message: 'Reconnaissance complete. PCI-DSS scope identified.' },
      { timestamp: '07:30:00', message: 'Spidering complete. 520 endpoints discovered.' },
      { timestamp: '08:00:00', message: 'Testing phase complete. 48 issues logged.' },
      { timestamp: '09:00:00', message: 'Compiling vulnerability report. Prioritising critical findings.' },
    ],
    findings: [
      { id: 1, severity: 'Critical', timestamp: '08:10:00', title: 'Unencrypted Card Data in Transit', endpoint: '/checkout/process', description: 'Payment card numbers transmitted over HTTP fallback without TLS enforcement.' },
      { id: 2, severity: 'Critical', timestamp: '08:22:00', title: 'Remote Code Execution via File Upload', endpoint: '/api/receipts/upload', description: 'Unrestricted file upload allows server-side code execution.' },
      { id: 3, severity: 'High', timestamp: '08:35:00', title: 'Missing CSP Headers', endpoint: '/*', description: 'No Content Security Policy headers allow XSS attack vectors.' },
    ],
    stats: { subAgents: 4, parallelExecutions: 6, operations: 61, critical: 7, high: 14, medium: 18, low: 9 }
  },

  10: {
    ...baseScanDetail,
    id: 10,
    name: 'IoT Devices',
    status: 'Failed',
    progress: 10,
    stage: 'Failed',
    scanType: 'Black Box',
    activityLog: [
      { timestamp: '06:00:00', message: 'Scan started. Attempting to reach IoT device gateway.' },
      { timestamp: '06:05:00', message: 'Connection timeout on primary target. Retrying...' },
      { timestamp: '06:10:00', message: 'ERROR: Target unreachable after 3 retries. Scan aborted.' },
    ],
    findings: [],
    stats: { subAgents: 0, parallelExecutions: 0, operations: 2, critical: 0, high: 0, medium: 0, low: 0 }
  },
};

// Fallback detail for scans without a specific record
export const mockScanDetail = mockScanDetails[1];

export const mockOrgStats = {
  org: 'Project X',
  owner: 'Nammagiri',
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failedScans: 2,
  lastUpdated: '10 mins ago',
  severities: {
    critical: { count: 86, change: '+2% increase than yesterday' },
    high: { count: 16, change: '+0.9% increase than yesterday' },
    medium: { count: 26, change: '+0.9% decrease than yesterday' },
    low: { count: 16, change: '+0.9% increase than yesterday' },
  }
};

// Helper to derive a stage label from progress for scans without explicit details
export const getStageFromProgress = (progress, status) => {
  if (status === 'Failed') return 'Failed';
  if (status === 'Scheduled') return 'Queued';
  if (status === 'Completed') return 'Completed';
  if (progress < 20) return 'Reconnaissance';
  if (progress < 45) return 'Spidering';
  if (progress < 75) return 'Testing';
  return 'Reporting';
};