
import type { Job } from '../types/job'
import StatusBadge from './StatusBadge'

type RecentApplicationsProps = {
  applications: Job[]
  onEdit: (job: Job) => void
  onDelete: (id: string) => void
}

function RecentApplications({
  applications,
  onEdit,
  onDelete,
}: RecentApplicationsProps) {
  return (
    <section
      id="applications"
      className="mt-8 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-6 py-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Applications
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Your latest job applications.
          </p>
        </div>

        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
          {applications.length} applications
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-slate-50/80 text-xs uppercase tracking-wider text-slate-500">
              <th className="whitespace-nowrap px-6 py-4 font-semibold">
                Company
              </th>
              <th className="whitespace-nowrap px-6 py-4 font-semibold">
                Position
              </th>
              <th className="whitespace-nowrap px-6 py-4 font-semibold">
                Status
              </th>
              <th className="whitespace-nowrap px-6 py-4 font-semibold">
                Date
              </th>
              <th className="whitespace-nowrap px-6 py-4 font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <p className="font-medium text-slate-700">
                    No applications yet
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Add your first application to get started.
                  </p>
                </td>
              </tr>
            ) : (
              applications.map((job) => (
                <tr
                  key={job.id}
                  className="border-b border-gray-100 transition-colors last:border-0 hover:bg-blue-50/30"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-semibold text-slate-800">
                    {job.company}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {job.position}
                    {job.location && (
                      <p className="mt-1 text-xs text-gray-400">
                        {job.location}
                      </p>
                    )}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <StatusBadge status={job.status} />
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {job.applicationDate}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onEdit(job)}
                        className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(job.id)}
                        className="text-sm font-semibold text-red-500 transition hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default RecentApplications
