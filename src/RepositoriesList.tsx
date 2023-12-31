import { useState } from 'react'
import { useActions } from './hooks/useActions'
import { useSelector } from 'react-redux'
import { RootState } from './state'
import { RepositoriesState } from './state/reducers/repositoriesReducer'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, error, loading } = useSelector<RootState, RepositoriesState>(
    (state) => state.repositories
  )

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    searchRepositories(term)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
      </form>
    </div>
  )
}

export default RepositoriesList
