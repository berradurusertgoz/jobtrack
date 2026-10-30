
import { useState, type FormEvent } from 'react'
import type { Job, JobFormData, JobStatus } from '../types/job'

type AddApplicationModalProps = {
  onClose: () => void
  onSubmit: (data: JobFormData) => void
  initialData?: Job
}

function AddApplicationModal({
  onClose,
  onSubmit,
  initialData,
}: AddApplicationModalProps) {
  const [formData, setFormData] = useState<JobFormData>(() => ({
    company: initialData?.company ?? '',
    position: initialData?.position ?? '',
    location: initialData?.location ?? '',
    status: initialData?.status ?? 'Applied',
    applicationDate:
      initialData?.applicationDate ??
      new Date().toISOString().slice(0, 10),
    jobUrl: initialData?.jobUrl ?? '',
    notes: initialData?.notes ?? '',
  }))

  function handleChange(
    field: keyof JobFormData,
    value: string,
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm">
      <form
  onSubmit={handleSubmit}
  className="my-auto w-full max-w-lg space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl sm:p-8"
>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {initialData ? 'Edit Application' : 'Add Application'}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-gray-700">
            Company *
            <input
              required
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500"
              placeholder="Company name"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Position *
            <input
              required
              value={formData.position}
              onChange={(e) => handleChange('position', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500"
              placeholder="Job title"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Location
            <input
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500"
              placeholder="Remote, Cyprus..."
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Status
            <select
              value={formData.status}
              onChange={(e) =>
                handleChange('status', e.target.value as JobStatus)
              }
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
              <option value="Withdrawn">Withdrawn</option>
            </select>
          </label>

          <label className="text-sm font-medium text-gray-700 sm:col-span-2">
            Application Date *
            <input
              required
              type="date"
              value={formData.applicationDate}
              onChange={(e) =>
                handleChange('applicationDate', e.target.value)
              }
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500"
            />
          </label>

          <label className="text-sm font-medium text-gray-700 sm:col-span-2">
            Job URL
            <input
              type="url"
              value={formData.jobUrl}
              onChange={(e) => handleChange('jobUrl', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500"
              placeholder="https://..."
            />
          </label>

          <label className="text-sm font-medium text-gray-700 sm:col-span-2">
            Notes
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500"
              placeholder="Interview details, reminders..."
            />
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {initialData ? 'Save Changes' : 'Add Application'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddApplicationModal
