
import type { JobStatus } from '../types/job'

type StatusBadgeProps = {
  status: JobStatus
}

const statusStyles: Record<JobStatus, string> = {
  Applied: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  Interview: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  Offer: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Rejected: 'bg-red-50 text-red-700 ring-red-600/20',
  Withdrawn: 'bg-gray-100 text-gray-600 ring-gray-500/20',
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}

export default StatusBadge
