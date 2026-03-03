import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, Eye, EyeOff, Apple } from 'lucide-react';
import toast from 'react-hot-toast';
import ThemeToggle from '../components/ThemeToggle';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreedToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Welcome to APS Security!');
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 p-12 flex-col justify-between overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-teal-500/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-16">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-white"></div>
            </div>
            <span className="text-2xl font-semibold text-white">aps</span>
          </div>

          {/* Main Content */}
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Expert level Cybersecurity in <span className="text-primary">hours</span> not weeks.
            </h1>

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-white mb-6">What's included</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="text-primary" size={20} />
                  </div>
                  <p className="text-gray-300 text-base">
                    Effortlessly spider and map targets to uncover hidden security flaws
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="text-primary" size={20} />
                  </div>
                  <p className="text-gray-300 text-base">
                    Deliver high-quality, validated findings in hours, not weeks.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="text-primary" size={20} />
                  </div>
                  <p className="text-gray-300 text-base">
                    Generate professional, enterprise-grade security reports automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trustpilot Rating */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-semibold">Trustpilot</span>
          </div>
          <p className="text-white text-lg">
            <span className="font-bold">Rated 4.5/5.0</span>{' '}
            <span className="text-gray-400">(100k+ reviews)</span>
          </p>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-light-bg dark:bg-dark-bg relative">
        <div className="absolute top-8 right-8">
          <ThemeToggle />
        </div>

        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-xl p-8 border border-light-border dark:border-dark-border">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">Sign up</h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
              Already have an account?{' '}
              <Link to="/" className="text-primary hover:underline font-medium">
                Log in
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password (8+ characters)*"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
                  className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  id="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-light-border dark:border-dark-border text-primary focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="agreedToTerms" className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  I agree to Aps's{' '}
                  <a href="#" className="text-primary hover:underline">
                    Terms & Conditions
                  </a>{' '}
                  and acknowledge the{' '}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Create account
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => toast.success('Apple sign-in clicked')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-black hover:bg-gray-900 text-white font-medium transition-colors"
                >
                  <Apple size={20} />
                </button>
                
                <button
                  type="button"
                  onClick={() => toast.success('Google sign-in clicked')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-light-border dark:border-dark-border hover:bg-light-surface dark:hover:bg-dark-bg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
                
                <button
                  type="button"
                  onClick={() => toast.success('Meta sign-in clicked')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
