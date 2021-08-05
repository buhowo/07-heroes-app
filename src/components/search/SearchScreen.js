import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange,] = useForm({ search: q })

  const { search } = formValues;

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`?q=${search}`);
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className='row'>
        <div className='col-5 mx-auto'>
          <h4>Search form</h4>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              name='search'
              placeholder='Find your hero'
              onChange={handleInputChange}
              value={search}
              autoComplete='off'
              className='form-control'
            />

            <button
              typ='submit'
              className='btn m-2 btn-block btn-outline-primary'
            >
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4> Results</h4>
          <hr />
          {
            (!q)
            &&
            <div className='alert alert-info'>
              Search a hero
            </div>
          }

          {
            (q && heroesFilter.length === 0)
            &&
            <div className='alert alert-danger'>
              Theres no such hero with name {q}
            </div>
          }


          {
            heroesFilter.map(hero => (
              <HeroeCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
