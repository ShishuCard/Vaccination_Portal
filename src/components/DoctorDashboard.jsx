import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SearchUser from './SearchUser';
import {sendReminderEmail}  from '../utils/sendEmail';


export default function DoctorDashboard() {
  // Use global theme context
  const { theme, toggleTheme } = useTheme();
  // Form dark mode state, persisted in localStorage
  const [formDark, setFormDark] = React.useState(() => {
    const saved = localStorage.getItem('formDark');
    return saved === 'true';
  });
  const toggleFormDarkMode = () => {
    setFormDark(d => {
      localStorage.setItem('formDark', !d);
      return !d;
    });
  };
  // Removed custom dark mode toggle handler. Use global toggleTheme instead.
  const stats = [
    { label: 'Total Children Registered', value: '1,240', trend: '↑ 12%', positive: true },
    { label: 'Vaccinations Administered', value: '980', trend: '↑ 5%', positive: true },
    { label: 'Active Doctors', value: '12', trend: '→', positive: null },
    { label: 'Upcoming Appointments', value: '34', trend: '↑ 8%', positive: true },
    { label: 'Hospitals Onboarded', value: '5', trend: '→', positive: null },
    { label: 'Project Uptime', value: '210 days', trend: '100%', positive: true },
  ];

  const recentActivities = [
    { id: 1, child: 'Rahul Sharma', action: 'BCG vaccination', time: '10 mins ago', status: 'completed' },
    { id: 2, child: 'Priya Patel', action: 'DTwP booster', time: '25 mins ago', status: 'completed' },
    { id: 3, child: 'Arjun Kumar', action: 'Hepatitis B', time: '1 hour ago', status: 'completed' },
    { id: 4, child: 'Neha Gupta', action: 'Appointment scheduled', time: 'Today, 2:30 PM', status: 'upcoming' },
  ];
//   const handleSendReminder = async (data) => {
    
//   await sendReminderEmail({ parentEmail, childName, vaccineName, dueDate });
//   alert(`Reminder sent to ${parentEmail}`);
// };

const handleSendReminder = async (data) => {
  console.log("👉 handleSendReminder called with:", data); // Check if this logs
  await sendReminderEmail(data);
  alert(`Reminder sent to ${data.parentEmail}`);
};


  return (
  <div className={`min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800`}>
    {/* Debug: Show current theme and <html> classList */}
    <div style={{position: 'fixed', top: 0, left: 0, zIndex: 9999, background: '#fff', color: '#333', padding: '4px 8px', fontSize: '12px', borderBottomRightRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
      Theme: {theme} | html.classList: {typeof document !== 'undefined' ? document.documentElement.classList.value : ''}
    </div>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle dark mode"
      >
        Toggle Dark Mode
      </button>
      <div className="dashboard-hero w-full">
      {/* Header */}
      <header className="dashboard-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              className="ml-2 px-2 py-1 rounded-full text-xs font-medium transition-colors bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              aria-label="Toggle theme"
              onClick={toggleFormDarkMode}
            >
              {formDark ? '☀' : '🌙'}
            </button>
            <button
              onClick={toggleFormDarkMode}
              className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle form dark mode"
            >
              Toggle Form Dark Mode
            </button>
            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex items-center">
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
              <span className="ml-2 text-sm font-medium">Dr. Smith</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-card max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="dashboard-form mb-8">
          <SearchUser />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.positive === true ? 'text-green-600' : stat.positive === false ? 'text-red-600' : 'text-gray-500'}`}>
                        {stat.trend}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">New Registrations</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>View and manage newly registered children for vaccination programs.</p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View Registrations
                </button>
              </div>
            </div>
          </div>
          {/* Login Card Section */}
          <div className={`home-login-card ${theme === 'dark' ? 'dark' : ''}`}>
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden dark:bg-gray-900">
              <div className="bg-blue-600 dark:bg-blue-800 py-6 px-8 text-center">
                <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                <p className={`mt-1 text-blue-100 ${formDark ? 'dark:text-blue-300' : ''}`}>Sign in to access your dashboard</p>
              </div>
              <div className="p-8">
                <form className="space-y-5">
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-gray-700 ${formDark ? 'dark:text-gray-200' : ''}`}>Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {/* Email SVG icon here */}
                      </div>
                      <input placeholder="your@email.com" className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formDark ? 'dark:border-gray-700 dark:bg-gray-800 dark:text-white' : ''}`} required type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-gray-700 ${formDark ? 'dark:text-gray-200' : ''}`}>Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {/* Password SVG icon here */}
                      </div>
                      <input placeholder="••••••••" className={`w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formDark ? 'dark:border-gray-700 dark:bg-gray-800 dark:text-white' : ''}`} required type="password" />
                      <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        {/* Eye SVG icon here */}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember" className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${formDark ? 'dark:border-gray-700' : ''}`} type="checkbox" />
                      <label htmlFor="remember" className={`ml-2 block text-sm text-gray-700 ${formDark ? 'dark:text-gray-200' : ''}`}>Remember me</label>
                    </div>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-800">
                    Log In
                    {/* Arrow SVG icon here */}
                  </button>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">Or continue with</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center text-sm">
                  <p className="text-gray-600 dark:text-gray-300">
                    Don't have an account? <a className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400" href="/signup">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="bg-white overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${activity.status === 'completed' ? 'bg-green-100' : 'bg-blue-100'}`}>
                        {activity.status === 'completed' ? (
                          <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-4 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{activity.child}</p>
                        <p className="text-sm text-gray-500 truncate">{activity.action}</p>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Vaccine Reminder Table */}
        <div className="mt-10 bg-white shadow rounded-lg overflow-x-auto">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Send Vaccine Reminders</h3>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Child Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vaccine</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Riya Sharma</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">riya.mom@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">MMR</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-08-01</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => handleSendReminder({
                      parentEmail: "yashswichitkara@gmail.com",
                      childName: "Riya Sharma",
                      vaccineName: "MMR",
                      dueDate: "2025-08-01"
                    })}
                  >
                    ✉️ Send Reminder
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
      </div>
    </div>
  );
}