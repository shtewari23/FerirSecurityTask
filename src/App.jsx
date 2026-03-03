import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Scan from './pages/Scan';
import ScanDetail from './pages/ScanDetail';
import ComingSoon from './pages/ComingSoon';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scans" element={<Scan />} />
          <Route path="/scan/:id" element={<ScanDetail />} />
          <Route path="/projects" element={<ComingSoon />} />
          <Route path="/schedule" element={<ComingSoon />} />
          <Route path="/notifications" element={<ComingSoon />} />
          <Route path="/settings" element={<ComingSoon />} />
          <Route path="/support" element={<ComingSoon />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'var(--toast-bg)',
              color: 'var(--toast-color)',
              border: '1px solid var(--toast-border)',
            },
            success: {
              iconTheme: {
                primary: '#0CC8A8',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
