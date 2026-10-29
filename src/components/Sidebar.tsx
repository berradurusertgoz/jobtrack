function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          JobTrack
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Job Application Tracker
        </p>
      </div>

      <nav className="px-4">
        <a
          href="#"
          className="block px-4 py-3 rounded-lg bg-gray-100 text-gray-900 font-medium"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 mt-1"
        >
          Applications
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar