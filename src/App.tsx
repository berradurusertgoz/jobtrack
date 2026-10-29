import Sidebar from './components/Sidebar'
import DashboardHeader from './components/DashboardHeader'
import StatCard from './components/StatCard'
import RecentApplications from './components/RecentApplications'

function App() {
  const stats = [
    {
      title: 'Total Applications',
      value: 24,
    },
    {
      title: 'Applied',
      value: 15,
    },
    {
      title: 'Interviews',
      value: 6,
    },
    {
      title: 'Offers',
      value: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">

      <Sidebar />

      <main className="flex-1 p-8">

        <DashboardHeader />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </section>

        <RecentApplications />

      </main>

    </div>
  )
}

export default App