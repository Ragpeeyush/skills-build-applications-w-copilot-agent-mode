import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('teams').then(setTeams).catch((err) => setError(err.message)) }, [])
  return <section className="resource-view"><p className="eyebrow">COMMUNITY</p><h1>Teams</h1>{error ? <p className="error">{error}</p> : <div className="team-grid">{teams.map((team) => <article className="team-card" key={team._id}><span className="team-dot" style={{ backgroundColor: team.color }} /><h2>{team.name}</h2><p>{team.motto}</p></article>)}</div>}</section>
}
