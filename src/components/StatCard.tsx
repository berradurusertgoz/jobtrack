
type StatCardProps = {
  title: string
  value: number
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
        {value}
      </p>

      <p className="mt-2 text-xs text-gray-400">
        Current application count
      </p>
    </div>
  )
}

export default StatCard
