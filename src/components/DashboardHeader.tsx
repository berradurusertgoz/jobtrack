
type DashboardHeaderProps = {
  onAddApplication: () => void
}

function DashboardHeader({
  onAddApplication,
}: DashboardHeaderProps) {
  return (
    <header
      id="dashboard"
      className="flex flex-col justify-between gap-5 border-b border-gray-200 pb-7 sm:flex-row sm:items-center"
    >
      <div>
        <p className="mb-2 text-sm font-semibold text-blue-600">
          YOUR CAREER OVERVIEW
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Keep track of your applications and next opportunities.
        </p>
      </div>

      <button
        type="button"
        onClick={onAddApplication}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100"
      >
        <span className="text-lg leading-none">+</span>
        Add Application
      </button>
    </header>
  )
}

export default DashboardHeader
