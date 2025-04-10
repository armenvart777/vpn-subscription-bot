interface Props {
  value: string | number
  label: string
}

export default function StatBlock({ value, label }: Props) {
  return (
    <div className="card stat-block">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
