import type { Job } from '../types/job'

export const mockJobs: Job[] = [
  {
    id: '1',
    company: 'Akgünler',
    position: 'Management Systems Specialist',
    location: 'Cyprus',
    status: 'Interview',
    applicationDate: '2026-10-20',
    jobUrl: '',
    notes: 'Follow-up required',
  },
  {
    id: '2',
    company: 'ARUCAD',
    position: 'IT Staff',
    location: 'Kyrenia',
    status: 'Applied',
    applicationDate: '2026-10-22',
    jobUrl: '',
    notes: '',
  },
  {
    id: '3',
    company: 'Tech Company',
    position: 'Frontend Developer',
    location: 'Remote',
    status: 'Applied',
    applicationDate: '2026-10-25',
    jobUrl: '',
    notes: 'React and TypeScript',
  },
  {
    id: '4',
    company: 'Startup X',
    position: 'React Developer',
    location: 'Remote',
    status: 'Offer',
    applicationDate: '2026-10-27',
    jobUrl: '',
    notes: '',
  },
]