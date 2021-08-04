import React from 'react'
import { useMemo } from 'react/cjs/react.development';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {

  const heroes = useMemo(() => 
    getHeroesByPublisher(publisher)
  , [publisher]); 

  return (
    <div className='row align-items-start animate__animated animate__fadeInRight'>
      {
        heroes.map(hero => (
          <HeroeCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )
}
