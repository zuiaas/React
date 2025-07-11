import { useEffect, useState } from 'react'
import './app.css'

export default function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          setUsers(data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Erro ao buscar usuários:', err)
          setLoading(false)
        })
    }, [])
  
    if (loading) return <p>Carregando...</p>
  
    return (
      <div>
        <h1>Usuários</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </div>
    )
  }