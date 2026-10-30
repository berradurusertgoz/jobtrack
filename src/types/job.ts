export type JobStatus =
  | 'Applied'
  | 'Interview'
  | 'Offer'
  | 'Rejected'
  | 'Withdrawn'

export type Job = {
  id: string
  company: string
  position: string
  location: string
  status: JobStatus
  applicationDate: string
  jobUrl: string
  notes: string
}

export type JobFormData = Omit<Job, 'id'>