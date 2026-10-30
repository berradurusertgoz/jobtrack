
function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-slate-950 text-slate-300">
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-7">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
          J
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight text-white">
            JobTrack
          </h1>
          <p className="text-xs text-slate-400">
            Career workspace
          </p>
        </div>
      </div>

      <div className="px-4 pt-8">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Workspace
        </p>

        <nav className="space-y-1">
          <a
            href="#dashboard"
            className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30"
          >
            <span className="text-lg">▦</span>
            Dashboard
          </a>

          <a
            href="#applications"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-white/5 hover:text-white"
          >
            <span className="text-lg">▤</span>
            Applications
          </a>
        </nav>
      </div>

      <div className="mt-auto border-t border-white/10 p-5">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 font-semibold text-white">
            JT
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              My Workspace
            </p>
            <p className="text-xs text-slate-400">
              Personal account
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
