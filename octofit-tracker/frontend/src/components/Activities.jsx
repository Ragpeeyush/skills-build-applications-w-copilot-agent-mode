import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('activities').then(setActivities).catch((err) => setError(err.message)) }, [])
  return <section className="resource-view"><p className="eyebrow">MOVEMENT LOG</p><h1>Activities</h1>{error ? <p className="error">{error}</p> : <div className="table-wrap"><table><thead><tr><th>Member</th><th>Activity</th><th>Duration</th><th>Energy</th></tr></thead><tbody>{activities.map((activity) => <tr key={activity._id}><td><strong>{activity.user?.name || 'Member'}</strong></td><td>{activity.type}</td><td>{activity.durationMinutes} min</td><td>{activity.calories} kcal</td></tr>)}</tbody></table></div>}</section>
}
