import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, FileText, FlaskConical, CheckCircle2, FileCheck, ChevronDown, ChevronUp } from 'lucide-react';
import toast from 'react-hot-toast';
import Sidebar from '../components/Sidebar';
import SeverityBadge from '../components/SeverityBadge';
import ThemeToggle from '../components/ThemeToggle';
import { mockScanDetails, mockScans, mockOrgStats } from '../data/mockData';

// Map stage name → stepper index (0-based, matches the 5 steps below)
const STAGE_INDEX = {
  Reconnaissance: 0,
  Spidering:      0,
  Mapping:        1,
  Testing:        2,
  Validating:     3,
  Reporting:      4,
  Completed:      5, // beyond last step → all complete
  Failed:        -1,
  Queued:        -1,
};

const STEPS = [
  { name: 'Spidering',  icon: Search       },
  { name: 'Mapping',    icon: FileText      },
  { name: 'Testing',    icon: FlaskConical  },
  { name: 'Validating', icon: CheckCircle2  },
  { name: 'Reporting',  icon: FileCheck     },
];

const ScanDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('activity');
  const [isConsoleExpanded, setIsConsoleExpanded] = useState(true);
  const stats = mockOrgStats;

  // Look up full detail record, fall back to list-level data
  const scan =
    mockScanDetails[Number(id)] ||
    mockScans.find((s) => s.id === Number(id)) ||
    mockScanDetails[1];

  const activeStepIndex = STAGE_INDEX[scan.stage] ?? 0;
  const isAllDone = scan.status === 'Completed';
  const isFailed  = scan.status === 'Failed';

  // SVG ring
  const SVG_SIZE      = 112;
  const STROKE_WIDTH  = 8;
  const RADIUS        = (SVG_SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const strokeOffset  = CIRCUMFERENCE - (scan.progress / 100) * CIRCUMFERENCE;
  const ringColor     = isFailed ? 'text-critical' : isAllDone ? 'text-green-500' : 'text-primary';

  return (
    <div className="flex min-h-screen bg-light-bg dark:bg-dark-bg">
      <Sidebar />

      <main className="flex-1 lg:ml-64 min-w-0">

        {/* Header */}
        <header className="bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between gap-3">
            <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap pl-12 lg:pl-0">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">Scan</span>
              <span className="text-light-text-secondary dark:text-dark-text-secondary">/</span>
              <span className="text-light-text-secondary dark:text-dark-text-secondary hidden sm:inline">Private Assets</span>
              <span className="text-light-text-secondary dark:text-dark-text-secondary hidden sm:inline">/</span>
              <span className="text-primary font-medium">{scan.name}</span>
            </nav>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <ThemeToggle />
              <button
                onClick={() => toast.success('Export report feature coming soon')}
                className="hidden sm:block px-4 py-2 border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text hover:bg-light-surface dark:hover:bg-dark-bg transition-colors font-medium text-sm"
              >
                Export Report
              </button>
              <button
                onClick={() => toast.error('Scan stopped')}
                className="px-3 sm:px-4 py-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors font-medium text-sm"
              >
                Stop Scan
              </button>
            </div>
          </div>
        </header>

        {/* Stats Bar */}
        <div className="bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm min-w-max">
                {[
                  ['Org', stats.org],
                  ['Owner', stats.owner],
                  ['Total', stats.totalScans],
                  ['Scheduled', stats.scheduled],
                  ['Rescans', stats.rescans],
                  ['Failed', stats.failedScans],
                ].map(([label, value], i, arr) => (
                  <div key={label} className="flex items-center gap-4 sm:gap-6">
                    <div className="whitespace-nowrap">
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">{label}: </span>
                      <span className="text-light-text dark:text-dark-text font-semibold">{value}</span>
                    </div>
                    {i < arr.length - 1 && <div className="h-4 w-px bg-light-border dark:bg-dark-border" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-primary shrink-0">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {stats.lastUpdated}
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

            {/* SVG Ring */}
            <div className="shrink-0 relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} className="-rotate-90">
                {/* Track */}
                <circle
                  cx={SVG_SIZE / 2} cy={SVG_SIZE / 2} r={RADIUS}
                  fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH}
                  className="text-light-border dark:text-dark-border"
                />
                {/* Progress arc */}
                {scan.progress > 0 && (
                  <circle
                    cx={SVG_SIZE / 2} cy={SVG_SIZE / 2} r={RADIUS}
                    fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH}
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={strokeOffset}
                    strokeLinecap="round"
                    className={ringColor}
                    style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                  />
                )}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text leading-none">
                  {scan.progress}%
                </div>
                <div className={`text-xs mt-0.5 font-medium ${
                  isFailed ? 'text-critical' : isAllDone ? 'text-green-500' : 'text-primary'
                }`}>
                  {scan.status}
                </div>
              </div>
            </div>

            {/* Stepper + Metadata */}
            <div className="flex-1 w-full min-w-0">

              {/* Stepper */}
              <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0 px-4 sm:px-0">
                <div className="flex items-start w-full min-w-max sm:min-w-0">
                  {STEPS.map((step, index) => {
                    const Icon      = step.icon;
                    const isPast    = !isFailed && index < activeStepIndex;
                    const isCurrent = !isFailed && !isAllDone && index === activeStepIndex;
                    const isDone    = isAllDone || isPast;
                    const isLast    = index === STEPS.length - 1;

                    return (
                      <div key={step.name} className={`flex items-start ${isLast ? '' : 'flex-1'}`}>
                        {/* Step node */}
                        <div className="flex flex-col items-center">
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                            isFailed
                              ? 'bg-light-surface dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary'
                              : isDone
                              ? 'bg-primary/20 text-primary'
                              : isCurrent
                              ? 'bg-primary text-white'
                              : 'bg-light-surface dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary'
                          }`}>
                            {isDone ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                          </div>
                          <span className={`mt-1.5 text-xs font-medium whitespace-nowrap ${
                            isFailed
                              ? 'text-light-text-secondary dark:text-dark-text-secondary'
                              : isDone
                              ? 'text-primary/70'
                              : isCurrent
                              ? 'text-primary'
                              : 'text-light-text-secondary dark:text-dark-text-secondary'
                          }`}>
                            {step.name}
                          </span>
                        </div>
                        {/* Connector — fills all available space between nodes */}
                        {!isLast && (
                          <div className="flex-1 flex items-center px-1.5 sm:px-2 mt-4 sm:mt-5">
                            <div className={`h-0.5 w-full transition-colors ${
                              !isFailed && (isAllDone || index < activeStepIndex)
                                ? 'bg-primary/50'
                                : 'bg-light-border dark:bg-dark-border'
                            }`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  ['Scan Type',   scan.scanType,    false],
                  ['Targets',     scan.targets,     false],
                  ['Started At',  scan.startedAt,   false],
                  ['Credentials', scan.credentials, false],
                  ['Files',       scan.files,       false],
                  ['Checklists',  scan.checklists,  true ],
                ].map(([label, value, highlight]) => (
                  <div key={label}>
                    <span className="text-light-text-secondary dark:text-dark-text-secondary block mb-1 text-xs sm:text-sm">{label}</span>
                    <span className={`font-semibold text-xs sm:text-sm truncate block ${
                      highlight ? 'text-primary' : 'text-light-text dark:text-dark-text'
                    }`}>
                      {value ?? '—'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Console + Findings */}
        <div className="p-4 sm:p-8">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">

            {/* Live Scan Console */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border overflow-hidden">
                <div className="border-b border-light-border dark:border-dark-border p-3 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${scan.status === 'Progress' ? 'bg-primary animate-pulse' : 'bg-light-text-secondary dark:bg-dark-text-secondary'}`} />
                      <span className="text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text">Live Scan Console</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      isFailed  ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      : isAllDone ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                      : 'bg-primary/10 text-primary'
                    }`}>
                      {isFailed ? 'Failed' : isAllDone ? 'Completed' : 'Running...'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsConsoleExpanded(!isConsoleExpanded)}
                    className="p-1 hover:bg-light-surface dark:hover:bg-dark-bg rounded transition-colors"
                  >
                    {isConsoleExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                {isConsoleExpanded && (
                  <>
                    <div className="border-b border-light-border dark:border-dark-border flex">
                      {[['activity', 'Activity Log'], ['verification', 'Verification Loops']].map(([tab, label]) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
                            activeTab === tab
                              ? 'border-primary text-primary'
                              : 'border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    <div className="p-3 sm:p-4 bg-light-surface dark:bg-dark-bg h-64 sm:h-96 overflow-y-auto font-mono text-xs sm:text-sm">
                      {activeTab === 'activity' ? (
                        <div className="space-y-3">
                          {(scan.activityLog || []).length === 0 ? (
                            <div className="text-light-text-secondary dark:text-dark-text-secondary text-center py-12">No activity yet</div>
                          ) : (
                            (scan.activityLog || []).map((log, index) => (
                              <div key={index} className="leading-relaxed break-words">
                                <span className="text-light-text-secondary dark:text-dark-text-secondary">[{log.timestamp}]</span>{' '}
                                <span
                                  className="text-light-text dark:text-dark-text"
                                  dangerouslySetInnerHTML={{
                                    __html: log.message
                                      .replace(/helpdesk\.democorp\.com/g, '<span class="text-primary">helpdesk.democorp.com</span>')
                                      .replace(/\/password\/test/g, '<span class="bg-dark-bg dark:bg-light-surface text-white dark:text-black px-1 rounded">/password/test</span>')
                                      .replace(/"TODO:[^"]*"/g, (m) => `<span class="text-primary">${m}</span>`)
                                      .replace(/'X-UserId:[^']*'/g, (m) => `<span class="text-primary">${m}</span>`)
                                      .replace(/\*\*([^*]+)\*\*/g, '<span class="text-critical font-bold">$1</span>')
                                      .replace(/ERROR:/g, '<span class="text-critical font-bold">ERROR:</span>')
                                  }}
                                />
                              </div>
                            ))
                          )}
                        </div>
                      ) : (
                        <div className="text-light-text-secondary dark:text-dark-text-secondary text-center py-12">
                          No verification loops running
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Stats footer */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                  {[['Sub-Agents', scan.stats?.subAgents], ['Parallel', scan.stats?.parallelExecutions], ['Operations', scan.stats?.operations]].map(([l, v]) => (
                    <div key={l}>
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">{l}: </span>
                      <span className="text-light-text dark:text-dark-text font-semibold">{v ?? 0}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  {[['Critical','text-critical',scan.stats?.critical],['High','text-high',scan.stats?.high],['Medium','text-medium',scan.stats?.medium],['Low','text-low',scan.stats?.low]].map(([l,cls,v]) => (
                    <div key={l} className="flex items-center gap-1.5">
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">{l}:</span>
                      <span className={`${cls} font-semibold`}>{v ?? 0}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Finding Log */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border overflow-hidden">
                <div className="border-b border-light-border dark:border-dark-border p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text">Finding Log</span>
                </div>
                <div className="p-3 sm:p-4 space-y-3 h-64 sm:h-96 overflow-y-auto">
                  {(scan.findings || []).length === 0 ? (
                    <div className="text-center text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary py-12">
                      No findings yet
                    </div>
                  ) : (
                    (scan.findings || []).map((finding) => (
                      <div
                        key={finding.id}
                        className="p-3 sm:p-4 bg-light-surface dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border hover:border-primary transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <SeverityBadge severity={finding.severity} showCount={false} />
                          <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary shrink-0">{finding.timestamp}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text mb-2 leading-snug">{finding.title}</h4>
                        <div className="text-xs text-primary font-mono mb-2 bg-primary/5 px-2 py-1 rounded truncate">{finding.endpoint}</div>
                        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">{finding.description}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ScanDetail;