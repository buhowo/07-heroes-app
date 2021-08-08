import React,  { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';

import { getHeroeById } from '../../selectors/getHeroesById';

export const HeroesScreen = ({ history }) => {
  
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);
  
  if (!hero) return <Redirect to='/' />

  const handleReturn = () => {
    (history.length <= 2) ? history.push('/') :
    history.goBack();
  }
  
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  console.log(id);

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          // src={`../assets/heroes/${heroeId}.jpg`}
          src={heroImages(`./${heroeId}.jpg`).default}  
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"><b>First appearencer:</b> {first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p className="card-footer">{characters}</p>
        <button
          className='btn btn-primary'
          onClick={handleReturn}
        >
          Rerturn
        </button>
      </div>
    </div>
  )
}
