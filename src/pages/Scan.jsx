import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Columns, Plus} from 'lucide-react';
import toast from 'react-hot-toast';
import Sidebar from '../components/Sidebar';
import SeverityBadge from '../components/SeverityBadge';
import StatusChip from '../components/StatusChip';
import ThemeToggle from '../components/ThemeToggle';
import { mockScans } from '../data/mockData';
import { X } from 'lucide-react';
const Scan = () => {
const [isFilterOpen, setIsFilterOpen] = useState(false);
const [selectedStatus, setSelectedStatus] = useState('all');
const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
const navigate = useNavigate();


const filteredScans = mockScans.filter((scan) => {
  const matchesSearch =
    scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scan.type.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesStatus =
    selectedStatus === 'all' || scan.status === selectedStatus;

  const matchesType =
    selectedType === 'all' || scan.type === selectedType;

  return matchesSearch && matchesStatus && matchesType;
});

const handleScanClick = (scanId) => {
  navigate(`/scan/${scanId}`);
};


  return (
    <div className="flex min-h-screen bg-light-bg dark:bg-dark-bg">
      <Sidebar />

      {/* Main content — offset for desktop sidebar, full width on mobile */}
      <main className="flex-1 lg:ml-64 min-w-0">

        {/* Header */}
        <header className="bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between gap-3">
            {/* Breadcrumb — shift right on mobile to clear hamburger button */}
            <div className="flex items-center gap-2 pl-12 lg:pl-0 min-w-0">
              <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
                <span className="text-light-text-secondary dark:text-dark-text-secondary whitespace-nowrap">Scan</span>
                <span className="text-light-text-secondary dark:text-dark-text-secondary">/</span>
                <span className="text-light-text-secondary dark:text-dark-text-secondary whitespace-nowrap hidden sm:inline">Private Assets</span>
                <span className="text-light-text-secondary dark:text-dark-text-secondary hidden sm:inline">/</span>
                <span className="text-primary font-medium whitespace-nowrap">New Scan</span>
              </nav>
            </div>

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

       

        {/* Scans Table Section */}
        <div className="p-4 sm:p-8">

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            {/* Search + filter buttons */}
            <div className="flex items-center gap-2 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-dark-text-secondary" size={18} />
                <input
                  type="text"
                  placeholder="Search scans..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>

             <button
  onClick={() => setIsFilterOpen(!isFilterOpen)}
  className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface text-light-text dark:text-dark-text hover:bg-light-surface dark:hover:bg-dark-bg transition-colors shrink-0"
>
  <Filter size={18} />
  <span className="font-medium text-sm hidden sm:inline">Filter</span>
</button>
{isFilterOpen && (
  <div className="mb-6 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm">

    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-light-border dark:border-dark-border">
      
      <h3 className="text-sm font-semibold text-light-text dark:text-dark-text">
        Filters
      </h3>

      <div className="flex items-center gap-3">

        {/* Clear Filters */}
        <button
          onClick={() => {
            setSelectedStatus('all');
            setSelectedType('all');
          }}
          disabled={selectedStatus === 'all' && selectedType === 'all'}
          className={`
            text-xs font-medium transition
            ${
              selectedStatus === 'all' && selectedType === 'all'
                ? 'text-light-text-secondary dark:text-dark-text-secondary cursor-not-allowed opacity-50'
                : 'text-primary hover:underline'
            }
          `}
        >
          Clear
        </button>

        {/* Close Button */}
        <button
          onClick={() => setIsFilterOpen(false)}
          className="p-1.5 rounded-md hover:bg-light-surface dark:hover:bg-dark-bg transition-colors"
        >
          <X size={16} className="text-light-text-secondary dark:text-dark-text-secondary" />
        </button>

      </div>
    </div>

    {/* Body */}
    <div className="p-4 grid sm:grid-cols-2 gap-4">

      {/* Status Filter */}
      <div>
        <label className="block text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">
          Status
        </label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="
            w-full px-3 py-2 rounded-lg
            border border-light-border dark:border-dark-border
            bg-light-bg dark:bg-dark-bg
            text-light-text dark:text-dark-text
            text-sm
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition
          "
        >
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Progress">Progress</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {/* Type Filter */}
      <div>
        <label className="block text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">
          Scan Type
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="
            w-full px-3 py-2 rounded-lg
            border border-light-border dark:border-dark-border
            bg-light-bg dark:bg-dark-bg
            text-light-text dark:text-dark-text
            text-sm
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition
          "
        >
          <option value="all">All</option>
          <option value="Greybox">Greybox</option>
          <option value="Blackbox">Blackbox</option>
          <option value="Whitebox">Whitebox</option>
        </select>
      </div>

    </div>
  </div>
)}

              <button
                onClick={() => toast.info('Column options coming soon')}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface text-light-text dark:text-dark-text hover:bg-light-surface dark:hover:bg-dark-bg transition-colors shrink-0"
              >
                <Columns size={18} />
                <span className="font-medium text-sm hidden sm:inline">Column</span>
              </button>
            </div>

            {/* New Scan button — full width on mobile */}
            <button
              onClick={() => toast.success('Creating new scan...')}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold transition-colors text-sm w-full sm:w-auto shrink-0"
            >
              <Plus size={18} />
              New scan
            </button>
          </div>

          {/* Table — horizontally scrollable on mobile */}
          <div className="bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-bg">
                    <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text whitespace-nowrap">Scan Name</th>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text whitespace-nowrap">Type</th>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text whitespace-nowrap">Status</th>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text whitespace-nowrap">Progress</th>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text whitespace-nowrap">Vulnerability</th>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text whitespace-nowrap">Last Scan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border dark:divide-dark-border">
                  {filteredScans.map((scan) => (
                    <tr
                      key={scan.id}
                      onClick={() => handleScanClick(scan.id)}
                      className="hover:bg-light-surface dark:hover:bg-dark-bg transition-colors cursor-pointer"
                    >
                      <td className="px-4 sm:px-6 py-4">
                        <span className="text-xs sm:text-sm font-medium text-light-text dark:text-dark-text">{scan.name}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary whitespace-nowrap">{scan.type}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <StatusChip status={scan.status} />
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-2 bg-light-surface dark:bg-dark-bg rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                scan.status === 'Failed' ? 'bg-critical' : 'bg-primary'
                              }`}
                              style={{ width: `${scan.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-light-text dark:text-dark-text min-w-[36px]">
                            {scan.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {scan.vulnerabilities.critical > 0 && (
                            <SeverityBadge severity="critical" count={scan.vulnerabilities.critical} />
                          )}
                          {scan.vulnerabilities.high > 0 && (
                            <SeverityBadge severity="high" count={scan.vulnerabilities.high} />
                          )}
                          {scan.vulnerabilities.medium > 0 && (
                            <SeverityBadge severity="medium" count={scan.vulnerabilities.medium} />
                          )}
                          {scan.vulnerabilities.low > 0 && (
                            <SeverityBadge severity="low" count={scan.vulnerabilities.low} />
                          )}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary whitespace-nowrap">{scan.lastScan}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 text-center text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">
            Showing {filteredScans.length} of {mockScans.length} Scans
          </div>
        </div>
      </main>
    </div>
  );
};

export default Scan;