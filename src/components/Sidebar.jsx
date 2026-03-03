import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Activity, 
  Calendar, 
  Bell, 
  Settings, 
  HelpCircle,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('#sidebar') && !e.target.closest('#sidebar-toggle')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FolderKanban, label: 'Projects', path: '/projects' },
    { icon: Activity, label: 'Scans', path: '/scans' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Support', path: '/support' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile hamburger toggle — visible only on small screens */}
      <button
        id="sidebar-toggle"
        onClick={() => setIsOpen(prev => !prev)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-md text-light-text dark:text-dark-text"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop overlay — mobile only */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`
          w-64 h-screen bg-white dark:bg-dark-surface border-r border-light-border dark:border-dark-border
          flex flex-col fixed left-0 top-0 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-light-border dark:border-dark-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            <span className="text-xl font-semibold text-light-text dark:text-dark-text">aps</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      active
                        ? 'bg-primary/10 text-primary'
                        : 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-surface dark:hover:bg-dark-bg'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-light-border dark:border-dark-border">
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-light-surface dark:hover:bg-dark-bg transition-colors group">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">admin@edu.com</p>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Security Lead</p>
            </div>
            <ChevronRight size={16} className="text-light-text-secondary dark:text-dark-text-secondary group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;