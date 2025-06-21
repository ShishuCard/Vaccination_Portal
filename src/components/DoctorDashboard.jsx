import SearchUser from './SearchUser';

export default function DoctorDashboard() {

  const stats = [
    { label: 'Total Children Registered', value: 1240 },
    { label: 'Vaccinations Administered', value: 980 },
    { label: 'Active Doctors', value: 12 },
    { label: 'Upcoming Appointments', value: 34 },
    { label: 'Hospitals Onboarded', value: 5 },
    { label: 'Project Uptime (days)', value: 210 },
  ];

  return (
    <div className="relative min-h-screen text-gray-800">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Doctor Dashboard</h1>
      </div>

Search Here: <SearchUser/>

      {/* Main Dashboard Content */}
      <main className="p-6 md:p-10">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-950">Hospital & Project Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-5 rounded-xl shadow hover:shadow-md transition text-center"
              >
                <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex flex-col">
            <h3 className="font-semibold text-lg text-blue-950 mb-2">New Registrations</h3>
            <p className="text-sm text-gray-600 mb-4">View newly registered children for vaccination.</p>
            <button className="mt-auto px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
              View
            </button>
          </div>
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex flex-col">
            <h3 className="font-semibold text-lg text-blue-950 mb-2">Vaccination Records</h3>
            <p className="text-sm text-gray-600 mb-4">Access and update child vaccination history.</p>
            <button className="mt-auto px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
              Manage
            </button>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex flex-col">
            <h3 className="font-semibold text-lg text-blue-950 mb-2">Upcoming Appointments</h3>
            <p className="text-sm text-gray-600 mb-4">Check your schedule for the day or week.</p>
            <button className="mt-auto px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
              Check
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
