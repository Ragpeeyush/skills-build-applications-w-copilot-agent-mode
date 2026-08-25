import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  ['/', 'Overview'], ['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'], ['/users', 'Members'], ['/workouts', 'Workouts'],
]

function Overview() {
  return <section className="overview"><p className="eyebrow">OCTOFIT TRACKER / 2026</p><h1>Make your next<br /><em>strong move.</em></h1><p className="intro">A shared training space for small wins, steady habits, and friendly competition.</p><div className="overview-stats"><div><strong>06</strong><span>active views</span></div><div><strong>24/7</strong><span>momentum</span></div><div><strong>01</strong><span>team goal</span></div></div></section>
}

function App() {
  return <div className="app-shell"><aside className="sidebar"><NavLink className="brand" to="/"><img src="/octofitapp-small.png" alt="OctoFit" /><span>OCTOFIT<br /><b>TRACKER</b></span></NavLink><nav aria-label="Main navigation">{navigation.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}</nav><div className="sidebar-footer"><span className="status-dot" />API connected</div></aside><main className="content"><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main></div>
}

export default App
