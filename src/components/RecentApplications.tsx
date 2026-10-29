const applications = [
  {
    company: 'Akgünler',
    position: 'Management Systems',
    status: 'Interview',
    date: 'Oct 28, 2026',
  },
  {
    company: 'ARUCAD',
    position: 'IT Staff',
    status: 'Applied',
    date: 'Oct 24, 2026',
  },
  {
    company: 'Tech Company',
    position: 'Frontend Developer',
    status: 'Applied',
    date: 'Oct 20, 2026',
  },
  {
    company: 'Startup X',
    position: 'React Developer',
    status: 'Offer',
    date: 'Oct 18, 2026',
  },
]

function RecentApplications() {
  return (
    <section className="bg-white rounded-xl border border-gray-200 mt-8">

      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Applications
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Your latest job applications.
          </p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="px-6 py-4 font-medium">Company</th>
              <th className="px-6 py-4 font-medium">Position</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr
                key={`${application.company}-${application.position}`}
                className="border-b last:border-0 hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {application.company}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {application.position}
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {application.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {application.date}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </section>
  )
}

export default RecentApplications