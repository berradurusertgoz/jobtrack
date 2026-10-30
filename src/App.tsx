
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardHeader from './components/DashboardHeader'
import StatCard from './components/StatCard'
import RecentApplications from './components/RecentApplications'
import AddApplicationModal from './components/AddApplicationModal'
import { mockJobs } from './data/mockJobs'
import type { Job, JobFormData } from './types/job'

const STORAGE_KEY = 'jobtrack-applications'

function App() {
  const [applications, setApplications] = useState<Job[]>(() => {
    try {
      const savedApplications = localStorage.getItem(STORAGE_KEY)

      if (savedApplications !== null) {
        return JSON.parse(savedApplications) as Job[]
      }
    } catch (error) {
      console.error('Could not load saved applications:', error)
    }

    return mockJobs
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(applications),
      )
    } catch (error) {
      console.error('Could not save applications:', error)
    }
  }, [applications])

  const stats = [
    {
      title: 'Total Applications',
      value: applications.length,
    },
    {
      title: 'Applied',
      value: applications.filter((job) => job.status === 'Applied').length,
    },
    {
      title: 'Interviews',
      value: applications.filter((job) => job.status === 'Interview').length,
    },
    {
      title: 'Offers',
      value: applications.filter((job) => job.status === 'Offer').length,
    },
  ]

  function handleAddApplication(data: JobFormData) {
    const newJob: Job = {
      ...data,
      id: crypto.randomUUID(),
    }

    setApplications((previous) => [newJob, ...previous])
    setIsModalOpen(false)
  }

  function handleEditApplication(data: JobFormData) {
    if (!editingJob) return

    setApplications((previous) =>
      previous.map((job) =>
        job.id === editingJob.id
          ? { ...data, id: editingJob.id }
          : job,
      ),
    )

    setEditingJob(null)
  }

  function handleDeleteApplication(id: string) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this application?',
    )

    if (!confirmed) return

    setApplications((previous) =>
      previous.filter((job) => job.id !== id),
    )
  }

  function openAddModal() {
    setEditingJob(null)
    setIsModalOpen(true)
  }

  function openEditModal(job: Job) {
    setIsModalOpen(false)
    setEditingJob(job)
  }

  function closeModal() {
    setIsModalOpen(false)
    setEditingJob(null)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-w-0 flex-1 p-5 md:p-8 xl:p-10">
        <div className="mx-auto w-full max-w-[1600px]">
          <DashboardHeader onAddApplication={openAddModal} />

          <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </section>

          <RecentApplications
            applications={applications}
            onEdit={openEditModal}
            onDelete={handleDeleteApplication}
          />
        </div>
      </main>

      {isModalOpen && (
        <AddApplicationModal
          onClose={closeModal}
          onSubmit={handleAddApplication}
        />
      )}

      {editingJob && (
        <AddApplicationModal
          key={editingJob.id}
          initialData={editingJob}
          onClose={closeModal}
          onSubmit={handleEditApplication}
        />
      )}
    </div>
  )
}

export default App
