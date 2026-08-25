import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('users').then(setUsers).catch((err) => setError(err.message))
  }, [])

  return <ResourceTable title="Members" eyebrow="PEOPLE" error={error}>
    {users.map((user) => <tr key={user._id}><td><strong>{user.name}</strong><small>{user.email}</small></td><td>{user.team?.name || 'Unassigned'}</td><td><span className="avatar">{user.avatar}</span></td></tr>)}
  </ResourceTable>
}

function ResourceTable({ title, eyebrow, error, children }) {
  return <section className="resource-view"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{error ? <p className="error">{error}</p> : <div className="table-wrap"><table><thead><tr><th>Name</th><th>Team</th><th>Badge</th></tr></thead><tbody>{children}</tbody></table></div>}</section>
}
