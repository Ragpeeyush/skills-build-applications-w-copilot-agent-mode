import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchCollection } from '../api.js'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : `${apiBaseUrl}/api/workouts/`

export default function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('workouts', workoutsEndpoint).then(setWorkouts).catch((err) => setError(err.message)) }, [])
  return <section className="resource-view"><p className="eyebrow">TRAINING LIBRARY</p><h1>Workouts</h1>{error ? <p className="error">{error}</p> : <div className="workout-grid">{workouts.map((workout) => <article className="workout-card" key={workout._id}><div className="card-top"><span>{workout.focus}</span><span>{workout.durationMinutes} min</span></div><h2>{workout.title}</h2><p>{workout.difficulty}</p><ul>{workout.exercises.map((exercise) => <li key={exercise}>{exercise}</li>)}</ul></article>)}</div>}</section>
}
