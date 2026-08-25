import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('leaderboard').then(setEntries).catch((err) => setError(err.message)) }, [])
  return <section className="resource-view"><p className="eyebrow">WEEKLY RACE</p><h1>Leaderboard</h1>{error ? <p className="error">{error}</p> : <div className="ranking-list">{entries.map((entry) => <article className="ranking-row" key={entry._id}><span className="rank">{String(entry.rank).padStart(2, '0')}</span><strong>{entry.user?.name || 'Member'}</strong><span className="points">{entry.points.toLocaleString()} pts</span></article>)}</div>}</section>
}
