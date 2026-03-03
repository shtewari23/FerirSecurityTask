import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-light-text dark:text-dark-text" />
      ) : (
        <Sun size={20} className="text-light-text dark:text-dark-text" />
      )}
    </button>
  );
};

export default ThemeToggle;
