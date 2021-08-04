import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';

export const SearchScreen = () => {

  const heroesFilter = heroes;

  const [formValues, handleInputChange,] = useForm({ search: '' })
  const { search } = formValues;
  const handleSearch = (e) => {
    e.preventDefault();

    console.log(search);
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
