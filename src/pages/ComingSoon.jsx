import { Construction, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-light-bg dark:bg-dark-bg">
      <Sidebar />

      <main className="flex-1 lg:ml-64 flex flex-col">
        
        {/* Header */}
        <header className="bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              Feature / <span className="text-primary font-medium">Coming Soon</span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-lg w-full text-center">

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20">
                <Construction size={48} className="text-primary" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Under Construction
            </h1>

            {/* Subtitle */}
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 text-sm sm:text-base">
              We're currently building this feature to enhance your experience.
              It will be available very soon.
            </p>

            {/* Status Card */}
            <div className="bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg p-5 mb-8">
              <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium">
                <Clock size={18} />
                Expected Release: Coming Soon
              </div>

              <div className="mt-4 w-full h-2 bg-light-surface dark:bg-dark-bg rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>

 

          </div>
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;